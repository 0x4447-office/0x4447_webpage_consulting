export const getRoutes = async (routes, pageName) => {
  const { $content } = require('@nuxt/content')

  const files = await $content({ deep: true }).only(['path']).fetch()

  const contentRoutes = files.map((file) =>
    file.path === '/index' ? '/' : file.path
  )

  const routesArray = routes.map((route) => `/${pageName}/${route.slug}`)
  return [...contentRoutes, ...routesArray]
}
