module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['vue', 'standard', 'prettier'],
  rules: {
    'vue/no-v-html': 'off',
    'no-console': 'off',
  },
  globals: {
    $: true,
    jQuery: true,
  },
}
