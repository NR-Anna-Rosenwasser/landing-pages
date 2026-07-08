// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxt/icon", "nuxt-umami"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/img/favicon/favicon.svg",
        },
        { rel: "shortcut icon", href: "/img/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/img/favicon/site.webmanifest" },
      ],
      meta: [{ name: "apple-mobile-web-app-title", content: "MyWebSite" }],
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 900],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Poppins",
        provider: "google",
      },
    ],
  },
  umami: {
    id: "be413953-fb78-4691-ac43-9c7b05fbfd69",
    host: "https://tr.toes.ch",
    autoTrack: true,
    ignoreLocalhost: false,
    // domains: ["toes.ch"],
    logErrors: true,
  },
  runtimeConfig: {
    tallyApiKey: "",
    tallyFormId: "",
    stripeSecretKey: "",
    public: {
      appUrl: "",
    },
  },
});
