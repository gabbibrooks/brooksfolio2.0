<template>
  <div class="main-content-container">
    <hero :header="blogPage.header" :body="blogPage.description" />
    <main
      v-if="posts.length > 0"
      id="content"
      class="[ main-content ] [ wrapper ]"
    >
      <div class="articles">
        <div v-for="post in posts" :key="post.slug">
          <blog-post-card :post="post" />
        </div>
      </div>
    </main>
  </div>
  <!-- <div class="md:grid-cols-3 grid grid-cols-1 gap-24">
    <section class="col-span-2">
      <div class="block">
        <article v-for="post in posts" :key="post.slug" class="block mt-12">
          <blog-post-card :post="post" />
        </article>
      </div>
    </section>
    <section class="flex flex-col col-span-1">
      <h3 class="text-primary sm:text-2xl sm:leading-10 text-3xl leading-9">
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
  </div> -->
</template>

<script>
import { topEntries } from '~/utils/array'

export default {
  async asyncData({ $content }) {
    const blogPage = await $content('blogpage').fetch()
    const posts = await $content('blog').fetch()
    const blogCategories = await $content('blog')
      .only('category')
      .fetch()
      .then(response => {
        const categories = Array.prototype.concat(
          ...response.map(post => post.category)
        )
        return categories
      })
    const topCategories = topEntries(blogCategories, 10)
    return { blogPage, posts, topCategories }
  },
  head() {
    return {
      title: 'Blog - Zachary Brooks'
    }
  }
}
</script>

<style scoped></style>
