<template>
  <div>
    <content-hero :article="post" :showSitePath="true" />
    <div class="main-content-container">
      <main id="content" class="[ main-content ] [ wrapper ]">
        <block-content :content="post" :surround="surround" />
      </main>
    </div>
  </div>
</template>

<script>
import ContentHero from '@/components/ContentHero.vue'
import BlockContent from '@/components/BlockContent.vue'

export default {
  layout: 'article',
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const surround = await $content('blog')
      .sortBy('updatedAt', 'asc')
      .only(['title', 'subtitle', 'path', 'updatedAt'])
      .surround(post.slug)
      .fetch()

    let heroLinks = ['Home', 'Blog']
    return { post, surround }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.category,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
      ],
    }
  },
  scrollToTop: true,
  components: {
    ContentHero,
    BlockContent,
  },
}
</script>

<style></style>
