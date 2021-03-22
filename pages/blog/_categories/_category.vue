<template>
  <div class="block">
    <section v-if="posts.length > 0">
      <div class="flex items-baseline justify-between">
        <h2 class="text-primary sm:text-4xl sm:leading-10 text-3xl leading-9">
          {{ category }}
        </h2>
        <span class="text-lg"> {{ numberOfArticles }}</span>
      </div>
      <div class="block">
        <article v-for="post in posts" :key="post.slug" class="block mt-12">
          <blog-post-card :post="post" />
        </article>
      </div>
    </section>
    <!-- <section v-if="projects.length > 0">
      <div class="flex items-baseline justify-between">
        <h2 class="text-primary sm:text-4xl sm:leading-10 text-3xl leading-9">
          Related Work
        </h2>
        <span class="text-lg"> {{ numberOfProjects }}</span>
      </div>
      <div class="block">
        <article
          v-for="project in projects"
          :key="project.slug"
          class="block mt-12"
        ></article>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  layout: 'category',
  async asyncData({ $content, params }) {
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

    // const projects = await $content('work/projects')
    //   .where({ category: { $containsAny: [category] } })
    //   .fetch()
    return {
      posts,
      //   projects,
      category
    }
  },
  head() {
    return {
      title: `${this.category} Articles - Zachary Brooks`
    }
  },
  computed: {
    numberOfArticles() {
      const postCount = this.posts.length
      return postCount > 1 ? `${postCount} Articles` : '1 Article'
    }
    // numberOfProjects() {
    //   const projectCount = this.projects.length
    //   return projectCount > 1 ? `${projectCount} Projects` : '1 Project'
    // }
  }
}
</script>

<style></style>
