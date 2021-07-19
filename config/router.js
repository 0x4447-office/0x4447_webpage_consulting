export const router = {
  trailingSlash: false,

  extendRoutes(routes) {
    routes.forEach((route) => {
      route.alias = route.path.length > 1 ? `${route.path}.html` : '/index.html'

      console.log(route.alias)
    })
  },
}
