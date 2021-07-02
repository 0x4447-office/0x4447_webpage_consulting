<template>
  <div class="footer_shape">
    <div class="position-relative footer_shape">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-dark">
        <SvgIcon name="curve-1" />
      </div>
    </div>
    <footer class="footer py-8 py-md-9 bottom bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <!-- Brand -->
            <NuxtLink to="/" title="Go to the home page">
              <img
                class="footer__logo img-fluid mb-2"
                alt="0x4447, LLC."
                src="/public/img/logo_dark.svg"
              />
            </NuxtLink>

            <!-- Text -->
            <p class="text-gray-700 mb-2">AWS Cloud Consulting</p>
          </div>

          <div class="col-12 col-md-2">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Sitemap
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-0">
              <li
                v-for="(item, index) in data"
                :key="index + '-footer-navbar-item'"
                class="mb-3"
              >
                <NuxtLink class="text-reset" :to="item.url">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-2">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Social
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a
                  class="text-reset"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCgRepT4AO6mGsJaWsS_mHbA"
                >
                  YouTube
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-reset"
                  target="_blank"
                  href="https://github.com/0x4447"
                >
                  GitHub
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-reset"
                  target="_blank"
                  href="https://www.linkedin.com/company/0x4447"
                >
                  LinkedIn
                </a>
              </li>
              <li class="mb-3">
                <a
                  class="text-reset"
                  target="_blank"
                  href="https://twitter.com/0x4447"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-2">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">Legal</h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a
                  href="https://legal.0x4447.com/consulting.0x4447.com/privacy_policy.pdf"
                  class="text-reset"
                >
                  Privacy Policy
                </a>
              </li>
              <li class="mb-3">
                <a
                  href="https://legal.0x4447.com/consulting.0x4447.com/terms_of_service.pdf"
                  class="text-reset"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </footer>
  </div>
</template>

<script>
import data from '~/assets/content/navbar.json'

export default {
  name: 'TheFooter',
  data() {
    return {
      data,
    }
  },
}
</script>
<style lang="scss">
.footer {
  &__logo {
    width: 200px;
    max-height: 60px;
  }
}
</style>
