<template>
  <NuxtLink
    class="row text-decoration-none"
    :to="{ path: `/articles/${article.categories[0]}/${article.slug}` }"
  >
    <div class="col-12">
      <!-- Card -->
      <div class="card card-row shadow-light-lg mb-6 lift lift-lg">
        <div class="row no-gutters">
          <a
            class="col-12 col-md-6 order-md-2 shame__bg-contain card-img-right"
            :style="`background-image: url(${article.featured})`"
            :href="article.url"
          >
            <!-- Image (placeholder) -->
            <img
              :src="article.featured"
              alt="..."
              class="img-fluid d-md-none invisible"
            />
          </a>
          <div class="col-12 col-md-6 order-md-1">
            <!-- Body -->
            <a class="card-body" :href="article.url">
              <!-- Heading -->
              <h3 class="text-black">
                {{ article.title }}
              </h3>

              <!-- Text -->
              <p class="mb-0 text-muted">
                {{ article.description }}
              </p>
            </a>

            <!-- Meta -->
            <a class="card-meta" :href="article.url">
              <!-- Divider -->
              <hr class="card-meta-divider" />

              <!-- Author -->
              <h6 class="text-uppercase text-muted mr-2 mb-0">
                {{ article.author }}
              </h6>

              <!-- Date -->
              <p class="h6 text-uppercase text-muted mb-0 ml-auto">
                <Timestamp :created-at="article.createdAt" />
              </p>
            </a>
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </NuxtLink>
  <!-- / .row -->
</template>

<script>
export default {
  name: 'ArticleFeaturedListItem',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
