import Stripe from "stripe";
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  // 1. Grab the submission ID from the URL query
  const query = getQuery(event);
  const tallyId = query.order_id;

  if (!tallyId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing order ID",
    });
  }

  // 2. Fetch the real data securely from Tally
  const response = await fetch(
    `https://api.tally.so/forms/${config.public.tallyFormId}/submissions/${tallyId}`,
    {
      headers: { Authorization: `Bearer ${config.public.tallyApiKey}` },
    },
  );
  const tallyData = await response.json();

  // 3. Calculate your dynamic shipping
  // Find object in tallyData.submission.responses where questionId == "x259Xk"
  const qty = parseInt(
    tallyData.submission.responses.find((r) => r.questionId === "x259Xk")
      ?.answer,
  );
  const customerEmail = tallyData.submission.responses.find(
    (r) => r.questionId === "Qdl8o1",
  )?.answer;

  if (!qty) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing quantity",
    });
  }
  const shippingCost = qty === 1 ? 200 : qty * 300; // In Rappen

  // 4. Initialize Stripe
  const stripe = new Stripe(config.public.stripeSecretKey);

  // 5. Generate the Checkout Session
  const session = await stripe.checkout.sessions.create({
    customer_email: customerEmail,
    client_reference_id: tallyId,
    metadata: {
      tally_submission_id: tallyId,
      order_batch: `herz-widmung-202608`,
    },
    payment_intent_data: {
      metadata: {
        tally_submission_id: tallyId,
        order_batch: `herz-widmung-202608`,
      },
    },
    line_items: [
      { price: "price_1TmcCqCee8O73oNt3sllnlCo", quantity: qty },
      {
        price_data: {
          currency: "chf",
          product_data: {
            name: `Versandgebühr für ${qty == 1 ? "ein Buch" : `${qty} Bücher`}`,
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    // Point this back to your Nuxt frontend
    success_url: `${config.public.appUrl}/herz-widmung/danke`,
  });

  // 6. Instantly redirect the browser to Stripe
  return sendRedirect(event, session.url, 302);
});
