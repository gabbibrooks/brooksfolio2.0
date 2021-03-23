<template>
  <div class="main-content-container">
    <hero :header="homepage.header" :body="homepage.introduction" />
    <main id="content" class="[ home-content main-content ] [ wrapper ]">
      <section class="recently-published" style="grid-area: recent;">
        <h2 class="text-primary sm:text-4xl sm:leading-10 text-3xl leading-9">
          Recently Published
        </h2>
        <div class="posts-group" v-for="post in recentPosts" :key="post.slug">
          <blog-post-card :post="post" />
        </div>
      </section>
      <section class="popular-content" style="grid-area: popular;"></section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch()
    const recentPosts = await $content('blog')
      .sortBy('updatedAt', 'desc')
      .limit(5)
      .fetch()

    return {
      homepage,
      recentPosts
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
  grid-template-areas: 'recent' 'popular';
  gap: 16rem 8rem;
}

.recently-published {
}

.posts-group {
  margin-top: 2.25rem;
}

.categories-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
}

@media screen and (min-width: 800px) {
  .home-content {
    grid-template: 'recent popular' 1fr / 2fr;
  }
}
</style>
