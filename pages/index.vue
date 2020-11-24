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
          <nuxt-link class="MainLink" :to="post.path">
            {{ post.title }} &mdash;
            <small>{{ post.createdAt.split('T')[0] }}</small>
          </nuxt-link>
        </article>
      </div>
    </section>
    <section class="flex flex-col col-span-1">
      <h3 class="text-3xl leading-9 text-primary sm:text-2xl sm:leading-10">
        Categories
      </h3>
    </section>
    <nuxt-content :document="homepage" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch()
    const recentPosts = await $content('blog')
      .sortBy('createdAt', 'dsc')
      .only(['path', 'title', 'description', 'tag', 'createdAt', 'updatedAt'])
      .limit(5)
      .fetch()
    const blogTags = await $content('blog')
      .only(['tag'])
      .fetch()
    const projectTags = await $content('work/projects')
      .only('tag')
      .fetch()
    const categories = blogTags.concat(projectTags)

    return {
      homepage,
      recentPosts,
      categories
    }
  }
}
</script>

<style></style>
