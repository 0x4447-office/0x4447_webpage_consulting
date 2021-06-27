export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Landing WebApp',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css',
      },
    ],
    script: [
      // {
      //   src: '/public/js/libs/bootstrap.bundle.min.js',
      //   body: true,
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss', '~/assets/styles/theme.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/flickity.client' },
    { src: '~/plugins/aos.client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://www.npmjs.com/package/@nuxtjs/stylelint-module
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    '@nuxtjs/svg-sprite',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Landing WebApp',
      short_name: 'landing',
      description: 'Bootstrap WebApp landing',
    },
    meta: {
      author: '0x4447',
      description: '',
      theme_color: '#fff',
      ogType: 'website',
      ogSiteName: 'Landing WebApp',
      ogTitle: 'Landing WebApp',
      ogDescription: '',
      ogImage: 'https://example.domain/logo-icon.png',
      twitterCard: 'Twitter card',
      twitterSite: 'domain.com',
      twitterCreator: '0x4447',
    },
    icon: {
      source: 'static/logo-icon.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
