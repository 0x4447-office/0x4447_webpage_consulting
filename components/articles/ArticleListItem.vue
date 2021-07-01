<template>
  <NuxtLink
    :to="{ path: `/articles/${article.categories[0]}/${article.slug}` }"
    class="text-decoration-none col-12 col-md-6 col-lg-4 d-flex"
  >
    <!-- Card -->
    <div class="card mb-6 shadow-light-lg lift lift-lg">
      <!-- Image -->
      <div class="card-img-top">
        <!-- Image -->
        <img :src="article.preview" alt="..." class="card-img-top" />
      </div>

      <!-- Body -->
      <div class="card-body" :href="article.url">
        <!-- Heading -->
        <h3 class="text-black">
          {{ article.title }}
        </h3>

        <!-- Text -->
        <p class="mb-0 text-muted">
          {{ article.description }}
        </p>
      </div>

      <!-- Meta -->
      <div class="card-meta mt-auto" :href="article.url">
        <!-- Divider -->
        <hr class="card-meta-divider" />

        <!-- Author -->
        <h6 class="text-uppercase text-muted mr-2 mb-0">
          {{ article.author }}
        </h6>

        <!-- Date -->
        <p class="h6 text-uppercase text-muted mb-0 ml-auto">
          <Timestamp :createdAt="article.createdAt" />
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
