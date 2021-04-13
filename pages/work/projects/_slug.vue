<template>
  <div>
    <content-hero :article="project" :showSitePath="false" />
    <div class="main-content-container">
      <main id="content" class="[ main-content ] [ wrapper ]">
        <block-content :content="project" :surround="surround" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('work/projects', params.slug).fetch()
    const surround = await $content('work/projects')
      .sortBy('createdAt', 'asc')
      .only(['title', 'subtitle', 'path', 'createdAt'])
      .surround(project.slug)
      .fetch()

    return { project, surround }
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.project.tags.join(', '),
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.project.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.description,
        },
      ],
    }
  },
  layout: 'article',
  scrollToTop: true,
}
</script>

<style></style>
