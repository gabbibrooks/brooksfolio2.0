<template>
  <div class="main-content-container">
    <hero :header="homepage.header" :body="homepage.introduction" />
    <main id="content" class="[ home-content main-content ] [ wrapper ]">
      <section class="recently-published" style="grid-area: newest;">
        <h2 class="text-primary sm:text-4xl sm:leading-10 text-3xl leading-9">
          Recently Published
        </h2>
        <div class="" v-for="post in recentPosts" :key="post.slug">
          <blog-post-card :post="post" />
        </div>
      </section>
      <section class="flex flex-col col-span-1" style="grid-area: categories;">
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
    </main>
  </div>
</template>

<script>
import { topEntries } from '~/utils/array'

export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch()
    const recentPosts = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    const blogTags = await $content('blog')
      .only('tags')
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(...response.map(post => post.tags))
        return tags
      })
    const projectTags = await $content('work/projects')
      .only('tags')
      .fetch()
      .then(response => {
        const tags = Array.prototype.concat(
          ...response.map(project => project.tags)
        )
        return tags
      })
    const topCategories = topEntries(blogTags.concat(projectTags), 5)

    return {
      homepage,
      recentPosts,
      topCategories
    }
  },
  head() {
    return {
      title: 'Home - Zachary Brooks'
    }
  }
}
</script>

<style scoped>
.home-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'newest' 'categories';
  gap: 16rem 8rem;
}

.recently-published {
}

@media screen and (min-width: 800px) {
  .home-content {
    grid-template: 'newest categories' 1fr / 2fr;
  }
}
</style>
