<template>
  <div>
    <section class="position-relative pt-12 pt-md-14 mt-n11">
      <!-- Content -->
      <div class="container">
        <div class="row align-items-center text-center text-md-left">
          <div class="col-12 col-md-6">
            <!-- Image -->
            <img
              src="public/img/index/aws-cloud-consulting.png"
              alt="AWS Cloud Consulting"
              class="img-fluid mw-130 float-right mb-6 mb-md-0"
            />
          </div>
          <div class="col-12 col-md-6">
            <!-- Heading -->
            <h1
              class="display-1 font-weight-bold"
              v-html="data.content.title"
            ></h1>

            <!-- Text -->
            <p class="font-size-lg text-muted mb-0">
              {{ data.content.text }}
            </p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
    <HomeHub :hub="data.hub" />
    <HomeAbout :about="data.about" />
    <HomeTestimonials
      :testimonials="data.testimonials"
      :companies="companies"
    />
    <HomeCta :cta="data.cta" />
  </div>
</template>

<script>
import headMixins from '../mixins/head-mixins'
export default {
  name: 'Home',
  mixins: [headMixins],
  async asyncData() {
    const companies = await fetch(
      process.env.baseUrl + '/public/content/helpers/companies.json'
    ).then((res) => res.json())

    const data = await fetch(
      process.env.baseUrl + '/public/content/pages/home.json'
    ).then((res) => res.json())

    return {
      companies,
      data,
    }
  },
  data() {
    return {
      data: {},
      companies: [],
    }
  },
}
</script>
