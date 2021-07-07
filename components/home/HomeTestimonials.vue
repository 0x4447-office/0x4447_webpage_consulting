<template>
  <section class="pt-8 pt-md-11">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <!-- Heading -->
          <h2 class="font-weight-bold">
            {{ testimonials.title }}
          </h2>

          <!-- Text -->
          <p class="text-muted mb-7 mb-md-9">
            {{ testimonials.text }}
          </p>
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div class="col-12">
          <!-- Flickity -->
          <div class="flickity-viewport-visible pt-2 pb-9">
            <ClientOnly>
              <Flickity :options="options">
                <CompanyCard
                  v-for="(company, index) in companies"
                  :key="index + '-companies-card-item'"
                  :company="company"
                />
              </Flickity>
            </ClientOnly>
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
import CompanyCard from '../CompanyCard'
import companies from '~/assets/content/helpers/companies.json'

export default {
  name: 'HomeTestimonials',
  components: { CompanyCard },
  props: {
    testimonials: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      companies,
      options: {
        cellAlign: 'left',
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false,
        contain: true,
      },
    }
  },
}
</script>
