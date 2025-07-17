// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  imports: {
    autoImport: false,
  },

  srcDir: "./src",

  css: ["@/assets/styles/global.scss"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
      title: "Бени",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
