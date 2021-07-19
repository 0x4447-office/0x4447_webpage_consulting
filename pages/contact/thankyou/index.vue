<template>
  <div class="container" style="padding-top: 10%">
    <div class="col-12">
      <div class="text-center">
        <h1>{{ data.title }}</h1>
        <h2 class="text-gray-700">{{ data.description }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import headMixins from '../../../mixins/head-mixins'
import data from '~/assets/content/pages/thankyou.json'

export default {
  name: 'Thankyou',
  mixins: [headMixins],
  data() {
    return {
      data,
    }
  },
}
</script>
