<template>
  <blog-category :articles="posts" categorytitle="Gridsome" />
</template>

<script>
export default {
  layout: 'category',
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only([
        'title',
        'slug',
        'subtitle',
        'description',
        'category',
        'createdAt'
      ])
      .where({ category: { $eq: 'Gridsome' } })
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  },
  head() {
    return {
      title: 'Gridsome Articles - Zachary Brooks'
    }
  },
  computed: {
    numberOfArticles() {
      const postCount = this.posts.length
      return postCount > 1 ? `${postCount} Articles` : '1 Article'
    }
  }
}
</script>

<style scoepd></style>
