<template>
  <div class="block">
    <article v-for="post in posts" :key="post.slug" class="block mt-12">
      <nuxt-link :to="post.path">
        {{ post.title }} &mdash;
        <small>{{ post.createdAt.split('T')[0] }}</small>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'content',
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['path', 'title', 'description', 'tags', 'createdAt', 'updatedAt'])
      .fetch()

    return { posts }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Blog')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
