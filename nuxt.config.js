export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'steamingweb',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=3' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
      },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/youtube'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/cards',
      '~/components/forms/content',
      '~/components/tables',
      '~/components/payment',
      '~/components/panels',
      '~/components/portals',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'portal-vue/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],

  publicRuntimeConfig: {
    BASE_URL:
      process.env.ENV_TYPE === 'localhost'
        ? 'http://localhost:8001/'
        : process.env.ENV_TYPE === 'development'
        ? 'https://streaming-app-server.herokuapp.com/'
        : 'https://streaming-app-server.herokuapp.com/',
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
