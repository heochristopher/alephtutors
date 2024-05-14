// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port:8080
  },
  modules: ['@nuxtjs/tailwindcss', '@hypernym/nuxt-anime'],
  css: ['~/assets/main.css'],
  app: {
    head: {
    title: "Aleph Tutors",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  }
})
