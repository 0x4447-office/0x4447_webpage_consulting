<template>
  <article>
    <!-- WELCOME
 ================================================== -->
    <section
      class="py-10 py-md-14 bg-cover shame__background-image__contact"
      :style="`background-image: url(/public/img/covers/contact.jpg)`"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <!-- Heading -->
            <h1 class="display-2 font-weight-bold text-white">
              Contact David Today
            </h1>

            <!-- Text -->
            <p class="lead text-white-75 mb-0">
              Please describe your situation and your cloud computing needs.
            </p>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>

    <!-- SHAPE
    ================================================== -->
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
        <SvgIcon name="curve-1" />
      </div>
    </div>

    <!-- FORM
    ================================================== -->
    <section class="pt-8 pt-md-11 pb-10 pb-md-13 contact_form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 col-lg-10">
            <ContactForm />
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
  </article>
</template>

<script>
export default {
  name: 'Contact',
}
</script>
