<template>
  <div>
    <ul class="PostsList">
      <li v-for="post in posts" :key="post.slug" class="PostsList-item">
        <nuxt-link class="MainLink" :to="post.path">
          {{ post.title }} &mdash;
          <small>{{ post.createdAt.split('T')[0] }}</small>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['path', 'title', 'createdAt', 'updatedAt'])
      .fetch()

    return { posts }
  }
}
</script>

<style></style>
