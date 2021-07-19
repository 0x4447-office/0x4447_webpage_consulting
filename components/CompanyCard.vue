<template>
  <div class="col-12 col-md-5 col-lg-4">
    <!-- Card -->
    <div
      class="card card-border shadow-light-lg lift lift-lg"
      :style="`border-top-color: ${company.color}`"
    >
      <div class="card-body text-center">
        <!-- Icon -->
        <div
          class="img-fluid mb-5 w-50 svg-shim mx-auto"
          style="color: #ff5a5f"
        >
          <img
            :src="`public/img/clients/${company.logo_name}`"
            height="21px"
            :alt="`${company.company_name} logo`"
          />
        </div>
        <!-- Text -->
        <p class="text-gray-700 mb-5">
          {{ company.description }}
        </p>

        <!-- Link -->
        <NuxtLink
          :to="`/clients/${company.slug}`"
          :style="`color: ${company.color}`"
        >
          Check the whitepaper
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: {
    company: {
      type: Object,
      required: true,
    },
  },
}
</script>
