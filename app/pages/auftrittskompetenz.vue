<script setup>
useSeoMeta({
  title: "Feministische Auftrittskompetenz",
  ogTitle: "Feministische Auftrittskompetenz",
  description: "Ein Input für alle, die mehr Raum einnehmen wollen",
  ogDescription: "Ein Input für alle, die mehr Raum einnehmen wollen",
  ogImage: "/og/og_auftrittskompetenz.jpg",
});
</script>
<template>
  <div
    class="min-h-screen bg-light text-rose font-poppins flex flex-col items-center justify-center"
  >
    <div
      class="input-container py-8 md:py-12 px-4 md:px-6 md:text-xl max-w-2xl"
    >
      <div class="input-heroine animate-fade-in-up">
        <picture>
          <source
            type="image/avif"
            srcset="
              /img/Header_Auftrittskompetenz_DEF-100.avif?width=100 100w,
              /img/Header_Auftrittskompetenz_DEF-200.avif?width=200 200w,
              /img/Header_Auftrittskompetenz_DEF-400.avif?width=400 400w,
              /img/Header_Auftrittskompetenz_DEF-800.avif?width=800 800w
            "
          />
          <source
            type="image/webp"
            srcset="
              /img/Header_Auftrittskompetenz_DEF-100.webp?width=100 100w,
              /img/Header_Auftrittskompetenz_DEF-200.webp?width=200 200w,
              /img/Header_Auftrittskompetenz_DEF-400.webp?width=400 400w,
              /img/Header_Auftrittskompetenz_DEF-800.webp?width=800 800w
            "
          />
          <img
            src="/img/Header_Auftrittskompetenz_DEF.png"
            srcset="
              /img/Header_Auftrittskompetenz_DEF-100.png?width=100 100w,
              /img/Header_Auftrittskompetenz_DEF-200.png?width=200 200w,
              /img/Header_Auftrittskompetenz_DEF-400.png?width=400 400w,
              /img/Header_Auftrittskompetenz_DEF-800.png?width=800 800w
            "
            sizes="(max-width: 800px) 100vw, 50vw"
            style="width: 100%; aspect-ratio: 1.8571428571428572"
            loading="lazy"
            decoding="async"
            alt="My awesome image"
            class="rounded-xl overflow-clip shadow-md md:shadow-xl shadow-rose/40 mb-8 md:mb-12"
          />
        </picture>
        <h1 class="text-3xl md:text-5xl font-bold mb-2">
          Feministische Auftrittskompetenz
        </h1>
        <p class="text-xl md:text-2xl italic mb-4">
          Zwei Inputs für alle, die mehr Raum einnehmen wollen
        </p>
        <p>
          In einem ehrlichen Referat erzähle ich davon, was ich gelernt habe in
          meinen letzten zehn Jahren als Journalistin, Aktivistin, Influencerin
          und Politikerin. Ich teile mit euch meine Gedanken, warum es vielen
          von uns schwer fällt, Raum einzunehmen – und mit welchen Tricks es
          gelingen kann.
        </p>
        <p class="text-base mt-4">
          <b>Uhrzeit</b>: 19:00 Uhr<br />
          <b>Dauer</b>: ca. 90 Minuten<br />
          <b>Ort</b>:
          <a
            href="https://maps.app.goo.gl/Lk5R2sPeRzRiUrT99"
            target="_blank"
            rel="noopener noreferrer"
            class="underline text-rose hover:text-rose/80 transition-colors duration-300"
          >
            Comedyhaus / Théâtre a.part, Albisriederstrasse 16, Zürich, 8003, CH
          </a>
          <br />
          <b>Preis</b>: CHF 15.–
        </p>
        <div class="input-buttons mt-8">
          <h2 class="text-2xl italic">
            Für welchen Input willst du dich anmelden?
          </h2>
          <div class="flex flex-wrap gap-4 mt-4">
            <a
              class="input-button"
              href="https://tix.rose-water.ch/event/3/feministische-auftrittskompetenz-17072026"
            >
              Input am 17. Juli
              <Icon name="heroicons:chevron-right-16-solid" size="1.25em" />
            </a>
            <a
              class="input-button"
              href="https://tix.rose-water.ch/event/4/feministische-auftrittskompetenz-27072026"
              >Input am 27. Juli
              <Icon name="heroicons:chevron-right-16-solid" size="1.25em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
