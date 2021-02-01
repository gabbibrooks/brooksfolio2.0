<template>
  <block-content :content="post" :surround="surround" />
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const surround = await $content('blog')
      .sortBy('createdAt', 'asc')
      .only(['title', 'subtitle', 'path', 'createdAt'])
      .surround(post.slug)
      .fetch()

    return { post, surround }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.tag
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        }
      ]
    }
  },
  components: {
    BlockContent
  },
  layout: 'content',
  scrollToTop: true,
  mounted() {
    this.$store.dispatch('setPageHeader', this.post.title)
    this.$store.dispatch('setPageSubheader', this.post.description)
    this.$store.dispatch('setPageHeaderPosition', 'left')
  }
}
</script>

<style></style>
