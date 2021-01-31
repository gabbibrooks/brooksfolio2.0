<template>
  <div class="block">
    <section v-if="posts.length > 0">
      <div class="flex items-baseline justify-between">
        <h2 class="text-3xl leading-9 text-primary sm:text-4xl sm:leading-10">
          Related Blog Posts
        </h2>
        <span class="text-lg"> {{ numberOfArticles }}</span>
      </div>
      <div class="block">
        <article v-for="post in posts" :key="post.slug" class="block mt-12">
          <blog-post-card :post="post" />
        </article>
      </div>
    </section>
    <section v-if="projects.length > 0">
      <div class="flex items-baseline justify-between">
        <h2 class="text-3xl leading-9 text-primary sm:text-4xl sm:leading-10">
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
    </section>
  </div>
</template>

<script>
import BlogPostCard from '~/components/BlogPostCard'

export default {
  layout: 'content',
  async asyncData({ $content, params }) {
    const tag = params.tag
    const posts = await $content('blog')
      .where({ tags: { $containsAny: [params.tag] } })
      .fetch()

    const projects = await $content('work/projects')
      .where({ tags: { $containsAny: [params.tag] } })
      .fetch()
    return {
      posts,
      projects,
      tag
    }
  },
  computed: {
    numberOfArticles() {
      const postCount = this.posts.length
      return postCount > 1 ? `${postCount} Articles` : '1 Article'
    },
    numberOfProjects() {
      const projectCount = this.projects.length
      return projectCount > 1 ? `${projectCount} Projects` : '1 Project'
    }
  },
  components: {
    BlogPostCard
  },
  mounted() {
    this.$store.dispatch('setPageHeader', this.tag)
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
