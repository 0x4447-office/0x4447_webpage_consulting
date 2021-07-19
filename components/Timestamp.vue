<template>
  <time :datetime="createdAt">
    {{ formatDate }}
  </time>
</template>

<script>
export default {
  name: 'Timestamp',
  props: {
    createdAt: {
      type: [String, Date],
      required: true,
    },
  },
  computed: {
    formatDate() {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(this.createdAt).toLocaleDateString('en', options)
    },
  },
}
</script>
