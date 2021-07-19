<template>
  <section
    class="py-10 py-md-13 bg-gray-200 bg-between"
    :style="{
      backgroundImage:
        'url(public/img/index/cloud.png), url(public/img/index/robot.png)',
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <!-- Heading -->
          <h2 class="font-weight-bold">
            {{ cta.title }}
          </h2>

          <!-- Text -->
          <p class="font-size-lg text-muted mb-8 px-lg-9">
            {{ cta.text }}
          </p>

          <!-- Button -->
          <NuxtLink :to="cta.button.link" class="btn btn-primary-desat lift">
            {{ cta.button.text }}
          </NuxtLink>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
export default {
  name: 'HomeCta',
  props: {
    cta: {
      type: Object,
      required: true,
    },
  },
}
</script>
