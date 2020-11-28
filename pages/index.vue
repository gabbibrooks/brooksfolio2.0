<template>
  <div class="grid grid-cols-1 gap-24 md:grid-cols-3">
    <section class="col-span-2">
      <h2 class="text-3xl leading-9 text-primary sm:text-4xl sm:leading-10">
        Recent Blog Posts
      </h2>
      <div class="block">
        <article
          v-for="post in recentPosts"
          :key="post.slug"
          class="block mt-12"
        >
          <nuxt-link :to="post.path">
            {{ post.title }} &mdash;
            <small>{{ post.createdAt.split('T')[0] }}</small>
          </nuxt-link>
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
    <nuxt-content :document="homepage" />
  </div>
</template>

<script>
import { distinct, topEntries, countEntries } from '~/utilities/array'
import { capitalize } from '~/utilities/string'

export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch()
    const recentPosts = await $content('blog')
      .only([
        'path',
        'title',
        'description',
        'header',
        'introduction',
        'tags',
        'createdAt',
        'updatedAt'
      ])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    const blogTags = await $content('blog')
      .only(['tags'])
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(...response.map(post => post.tags))
        return tags
      })
    const projectTags = await $content('work/projects')
      .only('tags')
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(...response.map(post => post.tags))
        return tags
      })
    const topCategories = topEntries(blogTags.concat(projectTags), 5)

    return {
      homepage,
      recentPosts,
      topCategories
    }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', this.homepage.header)
    this.$store.dispatch('setPageSubheader', this.homepage.introduction)
  }
}
</script>

<style></style>
