// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: ['localhost', '.ngrok-free.app', '.ngrok-free.dev', '.ngrok.io']
    }
  },
  app: {
    head: {
      title: 'Brisa Consciente - Centro Terapéutico',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
      ],
    },
  },
})