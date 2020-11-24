<template>
  <div>
    <article class="prose lg:prose-xl">
      <nuxt-content :document="project" />
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
    const project = await $content('work/projects', params.slug).fetch()
    const surround = await $content('work/projects')
      .sortBy('createdAt', 'asc')
      .only(['title', 'path', 'createdAt'])
      .surround(project.slug)
      .fetch()

    return { project, surround }
  }
}
</script>

<style></style>
