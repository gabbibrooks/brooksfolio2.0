<template>
  <div class="main-content-container">
    <hero :header="uses.title" :body="uses.description" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <block-content :content="uses" />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import BlockContent from '@/components/BlockContent.vue'

export default {
  layout: 'article',
  async asyncData({ $content }) {
    const uses = await $content('uses').fetch()

    return { uses }
  },
  head() {
    return {
      title: 'Uses - Gabrielle Brooks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.uses.description,
        },
      ],
    }
  },
  scrollToTop: true,
  components: {
    Hero,
    BlockContent,
  }
}
</script>

<style></style>
