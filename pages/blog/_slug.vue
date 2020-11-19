<template>
  <div>
    <article class="prose">
      <nuxt-content :document="post" />
    </article>

    <prev-next :surround="surround" />
  </div>
</template>

<script>
import PrevNext from '~/components/PrevNext'

export default {
  components: {
    PrevNext
  },
  layout: 'content',
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const surround = await $content('blog')
      .sortBy('createdAt', 'asc')
      .only(['title', 'path', 'createdAt'])
      .surround(post.slug)
      .fetch()

    return { post, surround }
  }
}
</script>

<style></style>
