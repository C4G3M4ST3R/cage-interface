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
      {
        href: 'https://cdn.lineicons.com/3.0/lineicons.css',
        rel: 'stylesheet',
      },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/LineIcons.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/css/slick.css' },
      { rel: 'stylesheet', href: '/css/default.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
    ],
    // Scripts
    script: [
      { src: '/js/vendor/jquery-1.12.4.min.js' },
      { src: '/js/vendor/modernizr-3.7.1.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/popper.min.js' },
      { src: '/js/plugins.js' },
      { src: '/js/slick.min.js' },
      { src: '/js/ajax-contact.js' },
      { src: '/js/waypoints.min.js' },
      { src: '/js/jquery.counterup.min.js' },
      { src: '/js/jquery.magnific-popup.min.js' },
      { src: '/js/jquery.easing.min.js' },
      { src: '/js/scrolling-nav.js' },
      { src: '/js/wow.min.js' },
      { src: '/js/particles.min.js' },
      { src: '/js/main.js' },
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
  buildModules: ['@nuxtjs/dotenv'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.c4g3.io',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
