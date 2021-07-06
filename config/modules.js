import { getRoutes } from '../helpers/get-nested-content-routes'

export const modules = [
  // '~/modules/api',
  // https://go.nuxtjs.dev/pwa
  '@nuxtjs/svg',
  // SVG Sprite Module https://github.com/nuxt-community/svg-sprite-module
  '@nuxtjs/svg-sprite',
  // https://content.nuxtjs.org/installation
  '@nuxt/content',
  // https://github.com/nuxt-community/robots-module
  [
    '@nuxtjs/robots',
    {
      /* module options */
      UserAgent: '*',
      Allow: '/',
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
    },
  ],
  // https://sitemap.nuxtjs.org/guide/setup
  [
    '@nuxtjs/sitemap',
    {
      /* module options */
      path: '/sitemap.xml',
      hostname: process.env.BASE_URL,
      gzip: true,
      routes() {
        return getRoutes()
      },
    },
  ],
]

export const buildModules = [
  // https://go.nuxtjs.dev/eslint
  '@nuxtjs/eslint-module',
  // https://go.nuxtjs.dev/stylelint
  '@nuxtjs/stylelint-module',
  // https://www.npmjs.com/package/@nuxtjs/stylelint-module
  '@nuxtjs/stylelint-module',
]
