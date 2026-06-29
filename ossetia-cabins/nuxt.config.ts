export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/ossetia-cabins/',
    buildAssetsDir: '/_nuxt/' ,
    head: {
      title: 'Горные домики в Северной Осетии',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Аренда горных домиков в Северной Осетии.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: { strict: true },
  compatibilityDate: '2024-11-01',
})
