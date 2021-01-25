<template>
  <div class="grid grid-cols-1 gap-24 md:grid-cols-3">
    <section class="col-span-2">
      <div class="block">
        <article v-for="post in posts" :key="post.slug" class="block mt-12">
          <nuxt-link :to="post.path">
            {{ post.title }} &mdash;
            <small>{{ post.createdAt.split('T')[0] }}</small>
          </nuxt-link>
          <div class="text-md">{{ post.readingTime }}</div>
        </article>
      </div>
    </section>
    <section class="flex flex-col col-span-1">
      <h3 class="text-3xl leading-9 text-primary sm:text-2xl sm:leading-10">
        Top Categories
      </h3>
      <div class="flex flex-row flex-wrap mt-4">
        <nuxt-link
          v-for="category in topCategories"
          :key="category"
          class="px-3 py-1 mb-4 mr-3 text-sm rounded-lg first:pl-0 bg-secondary text-primary hover:text-secondary nav-link"
          :to="`categories/${category}`"
          >{{ category.capitalize() }}</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import { topEntries } from '~/utils/array'
import { capitalize } from '~/utils/string'

export default {
  layout: 'content',
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    const blogTags = await $content('blog')
      .only(['tags'])
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(...response.map(post => post.tags))
        return tags
      })
    const topCategories = topEntries(blogTags, 5)
    return { posts, topCategories }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Blog')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
