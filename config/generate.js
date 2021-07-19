import companies from '../assets/content/helpers/companies.json'
import articlesCategories from '../assets/content/pages/articles.json'

export const generate = {
  async routes() {
    const clientsRoutes = companies.map((company) => `/clients/${company.slug}`)

    const { $content } = require('@nuxt/content')

    const articlesContent = await $content('articles').fetch()

    const articles = articlesContent.map((article) => {
      const category = article.categories[0]

      return `/articles/${category}/${article.slug}`
    })

    const categories = articlesCategories.categories.map(
      (category) => `/articles/${category.slug}`
    )

    return [...clientsRoutes, ...categories, ...articles]
  },
}
