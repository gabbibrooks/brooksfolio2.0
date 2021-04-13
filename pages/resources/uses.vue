<template>
  <div class="main-content-container">
    <hero :header="uses.title" :body="uses.description" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <block-content :content="uses" />
    </main>
  </div>
</template>

<script>
export default {
  layout: 'article',
  async asyncData({ $content }) {
    const uses = await $content('uses').fetch()

    return { uses }
  },
  head() {
    return {
      title: this.uses.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.uses.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.uses.tags,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.uses.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.uses.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.uses.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.uses.description,
        },
      ],
    }
  },
  scrollToTop: true,
}
</script>

<style></style>
