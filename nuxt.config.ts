// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    '@pinia/nuxt'
  ],
  ui: {
    global: true,
  },
  runtimeConfig:{
    public:{
      apiBase:'https://nuxt.pockethost.io'
    }
  }
})