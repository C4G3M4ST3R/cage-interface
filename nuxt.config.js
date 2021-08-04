export default {
  // Target (https://go.nuxtjs.dev/config-target)

  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
  head: {
    title: 'Cag3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#848283',
      },

      // Stylesheets
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap-extended.css' },
      { rel: 'stylesheet', href: '/css/vertical-menu.css' },
      { rel: 'stylesheet', href: '/css/feather.css' },
      { rel: 'stylesheet', href: '/css/colors.css' },
      { rel: 'stylesheet', href: '/css/components.css' },
      { rel: 'stylesheet', href: '/css/dark-layout.css' },
      { rel: 'stylesheet', href: '/css/vendor.min.css' },
      { rel: 'stylesheet', href: '/css/semi-dark-layout.css' },
      { rel: 'stylesheet', href: '/css/palette-gradient.css' },
      { rel: 'stylesheet', href: '/css/slick.min.css' },
      { rel: 'stylesheet', href: '/css/styles.css' },
    ],
    // Scripts
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/app.js' },
      { src: '/js/app-menu.js' },
      { src: '/js/slick.min.js' },
    ],
  },
  loading: { color: '#27AE60' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/animation.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuex-persist', '~/plugins/moment'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.scrate.io',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
