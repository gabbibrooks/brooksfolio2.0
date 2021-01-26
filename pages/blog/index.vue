<template>
  <div class="grid grid-cols-1 gap-24 md:grid-cols-3">
    <section class="col-span-2">
      <div class="block">
        <article v-for="post in posts" :key="post.slug" class="block mt-12">
          <blog-post-link :post="post" />
        </article>
      </div>
    </section>
    <section class="flex flex-col col-span-1">
      <h3 class="text-3xl leading-9 text-primary sm:text-2xl sm:leading-10">
        Top Categories
      </h3>
      <div class="flex flex-row flex-wrap mt-4">
        <tag
          v-for="category in topCategories"
          :key="category"
          :category="category"
        />
      </div>
    </section>
  </div>
</template>

<script>
import BlogPostLink from '~/components/BlogPostLink'
import Tag from '~/components/Tag'
import { topEntries } from '~/utils/array'

export default {
  layout: 'content',
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    const blogTags = await $content('blog')
      .only('tags')
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(...response.map(post => post.tags))
        return tags
      })
    const topCategories = topEntries(blogTags, 5)
    return { posts, topCategories }
  },
  components: {
    BlogPostLink,
    Tag
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Blog')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
