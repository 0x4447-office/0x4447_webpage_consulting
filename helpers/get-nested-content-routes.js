import fetch from 'node-fetch'

export const getRoutes = async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path']).fetch()

  const contentRoutes = files.map((file) =>
    file.path === '/index' ? '/' : file.path
  )

  const data = await fetch(
    process.env.BASE_URL + '/public/content/helpers/companies.json'
  ).then((res) => res.json())
  const companiesRoutes = data.map((company) => `/clients/${company.slug}`)

  return [...contentRoutes, ...companiesRoutes]
}
