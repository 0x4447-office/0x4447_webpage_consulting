export default {
  head() {
    return {
      title: this.data.head.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.head.meta.description,
        },
        {
          property: 'og:title',
          content: this.data.head.meta.ogTitle + ' - 0x4447',
        },
        {
          property: 'og:description',
          content: this.data.head.meta.description,
        },
      ],
    }
  },
}
