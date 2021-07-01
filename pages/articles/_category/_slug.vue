<template>
  <div>
    <!-- IMAGE
     ================================================== -->

    <section
      class="py-10 py-md-14 shame__bg-contain bg-white"
      :style="`background-image: url(${article.cover})`"
    ></section>

    <!-- SHAPE
    ================================================== -->
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
        <SvgIcon name="curve-1" />
      </div>
    </div>

    <!-- HEADER
  ================================================== -->
    <section class="pt-8 pt-md-11">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            <!-- Heading -->
            <h1 class="display-4 text-center">
              {{ article.title }}
            </h1>

            <!-- Meta -->
            <div class="row align-items-center py-5 border-top border-bottom">
              <div class="col-6">
                <!-- Name -->
                <h6 class="text-uppercase mb-0">
                  {{ article.author }}
                </h6>

                <!-- Date -->
                <p class="font-size-sm text-muted mb-0">
                  <Timestamp :created-at="article.createdAt" />
                </p>
              </div>
              <div class="col-6 text-right">
                <!-- Share -->
                <span
                  class="h6 text-uppercase text-muted d-none d-md-inline mr-4"
                >
                  Share:
                </span>

                <!--              {% assign shareUrl = site.url | append: page.url | url_encode %}-->
                <!--              {% assign shareTitle = page.title | url_encode %} {% assign-->
                <!--              shareSource = site.name | url_encode %} {% assign shareSummary =-->
                <!--              page.description | url_encode %}-->

                <!-- Icons -->
                <ul class="d-inline list-unstyled list-inline list-social">
                  <li class="list-inline-item list-social-item mr-3">
                    <a
                      :href="`https://www.facebook.com/sharer.php?u=${shareUrl}&title=${shareTitle}`"
                      class="text-decoration-none"
                    >
                      <img
                        src="/public/img/icons/social/facebook.svg"
                        class="list-social-icon"
                        alt="Share on Facebook"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item mr-3">
                    <a
                      :href="`https://twitter.com/intent/tweet?url=${shareUrl}&title=${shareTitle}`"
                      class="text-decoration-none"
                    >
                      <img
                        src="/public/img/icons/social/twitter.svg"
                        class="list-social-icon"
                        alt="Share on Twitter"
                      />
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item">
                    <a
                      onclick="window.open(this.href, 'linkedinwindow','left=20,top=20,width=600,height=700,toolbar=0,resizable=1'); return false;"
                      :href="`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&source=${shareUrl}&summary=${shareTitle}`"
                      class="text-decoration-none"
                    >
                      <img
                        src="/public/img/icons/social/linkedin.svg"
                        class="list-social-icon"
                        alt="Share on LinkedIn"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SECTION
   ================================================== -->
    <section class="pt-6 pt-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            <nuxt-content :document="article" />

            <h2>Sharing is Caring</h2>
            <p>
              If you found this article useful, consider sharing it with someone
              you think could benefit from it.
            </p>
            <h2>Contact David Today</h2>
            <p>
              Please describe your situation and your cloud computing needs.
            </p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- ARTICLES
   ================================================== -->
    <section class="pt-7 pt-md-10 pb-10 pb-md-13 bg-gray-200">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h3 class="mb-0">Latest Stories</h3>

            <!-- Text -->
            <p class="mb-0 text-muted">
              Here’s what we've been up to recently.
            </p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <ArticleListItem
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
          />
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </div>
</template>

<script>
import ArticleListItem from '../../../components/articles/ArticleListItem'
export default {
  name: 'ArticlesSlug',
  components: { ArticleListItem },
  async asyncData({ params, $content, error }) {
    if (!params.slug) {
      return error(404, 'Article not found')
    }
    const article = await $content('articles', params.slug).fetch()
    if (!article) {
      return error(404, 'Article not found')
    }

    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return {
      article,
      articles,
    }
  },
  data() {
    return {
      article: {},
    }
  },
  head() {
    const { title } = this.article
    return {
      title,
    }
  },
  computed: {
    shareUrl() {
      return this.$route.fullPath
    },
    shareTitle() {
      return this.article.title
    },
  },
}
</script>
