<template>
  <section v-if="articles.length > 0">
    <div class="[ category-header ] [ text-primary ]">
      <h1 class="title">
        {{ categorytitle }}
      </h1>
      <span class="num-articles"> {{ numberOfArticles }}</span>
    </div>
    <div class="category-articles">
      <div v-for="article in articles" :key="article.slug">
        <blog-post-card :post="article" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categorytitle: String,
    articles: Array,
  },
  computed: {
    numberOfArticles() {
      const articleCount = this.articles.length
      return articleCount > 1 ? `${articleCount} Articles` : '1 Article'
    },
  },
}
</script>

<style scoped>
.category-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.title {
  padding-bottom: 1rem;
  padding-left: 2rem;
}

.num-articles {
  display: none;
}

@media screen and (min-width: 640px) {
  .num-articles {
    display: block;
    padding-right: 2rem;
    font-size: 1.25rem;
  }

  .title {
    padding-left: 0;
  }
}
</style>
