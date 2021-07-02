<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand" href="/">
          <img
            class="navbar__logo navbar-brand-img"
            alt="0x4447, LLC."
            src="/public/img/logo_light.svg"
          />
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <!-- Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fe fe-x"></i>
          </button>

          <!-- Navigation -->
          <ul class="navbar-nav ml-auto">
            <li
              v-for="(item, index) in data"
              :key="index + '-header-navbar-item'"
              class="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NuxtLink :to="item.url" class="nav-link">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import data from '~/assets/content/navbar.json'

export default {
  name: 'TheHeader',
  data() {
    return {
      data,
    }
  },
}
</script>

<style lang="scss">
.navbar {
  &__logo {
    width: 200px;
  }
}
</style>
