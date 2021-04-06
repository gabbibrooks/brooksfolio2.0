<template>
  <div class="main-content-container">
    <hero :header="homepage.header" :body="homepage.introduction" />
    <main id="content" class="[ home-content main-content ] [ wrapper ]">
      <section class="recently-published">
        <h2 class="[ title ] [ text-primary ]">Recently Published</h2>
        <div class="posts-group" v-for="post in recentPosts" :key="post.slug">
          <blog-post-card :post="post" />
        </div>
      </section>
      <section class="popular-content"></section>
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
      recentPosts,
    }
  },
  head() {
    return {
      title: 'Home - Zachary Brooks',
    }
  },
}
</script>

<style scoped>
.home-content {
  display: grid;
  gap: 16rem 8rem;
  grid-template-areas: 'recent' 'popular';
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}

.recently-published {
  grid-area: recent;
}

.recently-published .title {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.popular-content {
  grid-area: popular;
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

@media screen and (min-width: 640px) {
  .recently-published .title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

@media screen and (min-width: 800px) {
  .home-content {
    grid-template: 'recent popular' 1fr / 2fr;
  }
}
</style>
