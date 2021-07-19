<template>
  <div>
    <section class="pt-8 pt-md-11">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md">
            <!-- Heading -->
            <h1 class="display-4 mb-2">
              {{ company.company_name }}
            </h1>

            <!-- Text -->
            <p class="font-size-lg text-gray-700 mb-5 mb-md-0">
              {{ company.subtitle }}
            </p>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-12">
            <!-- Divider -->
            <hr class="my-6 my-md-8 border-gray-300" />
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-12 col-md-8" v-html="company.content"></div>
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card shadow-light-lg mb-5">
              <div class="card-body">
                <!-- Heading -->
                <h4>Company Info</h4>

                <p class="font-size-sm text-gray-800 mt-5 mb-0">
                  <img
                    :src="`/public/img/clients/${company.logo_name}`"
                    class="shame__client__logo"
                    :alt="`${company.company_name} logo`"
                  />
                </p>

                <!-- Text -->
                <p class="font-size-sm text-gray-800 mt-5 mb-0">
                  {{ company.description }}
                </p>

                <p
                  v-if="showBadge"
                  class="font-size-sm text-gray-800 mt-5 mb-0"
                >
                  <a
                    :style="`color: ${company.color}}`"
                    :href="company.url.href"
                    rel="external"
                  >
                    {{ company.url.name }}
                  </a>
                </p>
              </div>
            </div>

            <!-- Card -->
            <div v-if="company.opinion" class="card shadow-light-lg">
              <div class="card-body">
                <!-- Heading -->
                <h4>Company Testimonial</h4>

                <blockquote class="blockquote mb-0">
                  <p class="font-size-sm font-italic text-gray-800 mt-5 mb-5">
                    <q>{{ company.opinion }}</q>
                  </p>
                  <footer class="blockquote-footer">
                    <cite class="h6 text-uppercase shame__font-normal">{{
                      company.author
                    }}</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- FORM
      ================================================== -->
    <section class="pt-6 pt-md-8 pb-8 pb-md-14">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Card -->
            <div class="card card-border border-primary shadow-light-lg">
              <div class="card-body">
                <div class="contact_form">
                  <h2>Contact David Today</h2>
                  <p>
                    Please describe your situation and your cloud computing
                    needs.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </div>
</template>

<script>
import companies from '~/assets/content/helpers/companies.json'

export default {
  name: 'Clients',
  data() {
    return {
      company: companies.find((item) => item.slug === this.$route.params.slug),
    }
  },
  computed: {
    showBadge() {
      return this.company.url && this.company.url.name && this.company.url.href
    },
  },
}
</script>
