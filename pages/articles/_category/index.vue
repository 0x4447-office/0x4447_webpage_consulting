<template>
  <div>
    <!-- WELCOME
    ================================================== -->
    <section
      class="py-10 py-md-14 bg-cover shame__background-image__articles"
      :style="`background-image: url(/public/img/covers/articles.jpg)`"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-7 text-center">
            <!-- Heading -->
            <h1 class="display-2 font-weight-bold text-white">
              {{ data.title }}
            </h1>

            <!-- Text -->
            <p class="lead mb-0 text-white-75">
              {{ data.description }}
            </p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SHAPE
  ================================================== -->
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
        <SvgIcon name="curve-1" />
      </div>
    </div>

    <section class="mt-7">
      <div class="container">
        <ArticleCategories :categories="data.categories" />
      </div>
    </section>

    <!--    {{ articles }}-->
    <section v-if="!$route.params.category" class="pt-7 pt-md-10">
      <div class="container">
        <ArticleFeaturedListItem
          v-for="(article, index) in featuredArticles"
          :key="index"
          :article="article"
        />
      </div>
      <!-- / .container -->
    </section>

    <!-- ARTICLES
  ================================================== -->
    <section class="pt-7 pt-md-10 pb-10 pb-md-13">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="mb-0">Latest Articles</h3>

            <!-- Text -->
            <p class="mb-0 text-muted">Some things that I learned over time.</p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <ArticleListItem
            v-for="(article, index) in standardArticles"
            :key="index"
            :article="article"
          />
        </div>
      </div>
      <!-- / .container -->
    </section>
    <!--  {{ content }}-->
  </div>
</template>

<script>
import ArticleListItem from '../../../components/articles/ArticleListItem'
import ArticleCategories from '../../../components/articles/ArticleCategories'
import ArticleFeaturedListItem from '../../../components/articles/ArticleFeaturedListItem'
import headMixins from '../../../mixins/head-mixins'
import data from '~/assets/content/pages/articles.json'

export default {
  name: 'Articles',
  components: { ArticleListItem, ArticleCategories, ArticleFeaturedListItem },
  mixins: [headMixins],
  async asyncData({ $content, params }) {
    let queryBuilder = $content('articles')

    const conditions = {}

    if (params.category) {
      conditions.categories = {
        $contains: params.category,
      }
      queryBuilder = queryBuilder.where(conditions)
    }

    const articles = await queryBuilder.sortBy('createdAt', 'desc').fetch()

    return {
      articles,
    }
  },
  data() {
    return {
      data,
      articles: [],
    }
  },
  computed: {
    featuredArticles() {
      return this.articles.filter((article) => article.isFeatured)
    },
    standardArticles() {
      return this.$route.params.category
        ? this.articles
        : this.articles.filter((article) => !article.isFeatured)
    },
  },
}
</script>
