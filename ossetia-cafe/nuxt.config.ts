export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/ossetia-cafe/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Фарн — осетинская кухня во Владикавказе',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Фарн — ресторан осетинской кухни во Владикавказе. Осетинские пироги, шашлык, домашний сыр и горное гостеприимство. Бронь столика онлайн.',
        },
        { property: 'og:title', content: 'Фарн — осетинская кухня' },
        {
          property: 'og:description',
          content: 'Осетинские пироги, шашлык и домашняя кухня. Забронируйте столик.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: { strict: true },
  compatibilityDate: '2024-11-01',
})
