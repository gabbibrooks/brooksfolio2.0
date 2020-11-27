<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .where({ tags: { $containsAny: [params.tag] } })
      .fetch()

    const projects = await $content('work/projects')
      .where({ tags: { $containsAny: [params.tag] } })
      .fetch()
    return {
      posts,
      projects
    }
  }
}
</script>

<style></style>
