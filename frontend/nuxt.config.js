// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Company Profile",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Meta description" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});
