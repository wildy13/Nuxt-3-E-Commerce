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
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],

  runtimeConfig: {
    public: {
      apiUrl: '',
    },
  },
  
  auth: {
    origin: process.env.ORIGIN,
    baseURL: process.env.BACKEND_URL,
    provider: {
      type: 'local',
      sessionDataType: {
        id: 'string',
        username: 'string',
      },
      pages:{
        login: "/auth/login/"
      },
      endpoints: {
        signIn: {
          path: "/api/auth/login",
          method: "post"
        },
        signOut: {
          path: "/logout",  
          method: "post"
        },
/*         signUp: {
          path: "/register",
          method: "post"
        }, */
        getSession: {
          path: "/api/auth/session",
          method: "get"
        }
      },
    },
    token: {
      maxAgeInSeconds: 8 * 60 * 60,
    },
    globalAppMiddleware: true,
  },
});
