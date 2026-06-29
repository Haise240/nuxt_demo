export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/ossetia-tours/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'Дикий Кавказ — джип-туры и треккинг по Осетии',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Дикий Кавказ — авторские джип-туры, треккинг и экспедиции по Северной Осетии. Цей, Дигория, Даргавс, Мидаграбинские водопады. Малые группы, опытные гиды.',
        },
        { property: 'og:title', content: 'Дикий Кавказ — джип-туры по Осетии' },
        {
          property: 'og:description',
          content: 'Авторские туры по горам Северной Осетии. Малые группы, внедорожники, опытные гиды.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  typescript: { strict: true },
  compatibilityDate: '2024-11-01',
})
