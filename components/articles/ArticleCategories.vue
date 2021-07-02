<template>
  <div class="row align-items-center">
    <div class="col-auto">
      <h6 class="font-weight-bold text-uppercase text-muted mb-0">Tags:</h6>
    </div>
    <div class="col ml-n5">
      <NuxtLink
        v-for="(category, index) in categories"
        :key="index"
        class="badge badge-pill badge-secondary-soft mr-1 cursor-pointer"
        :to="{ path: `/articles/${category.slug}` }"
      >
        <span class="h6 text-uppercase">{{ category.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCategories',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
