<template>
  <div class="main-content-container">
    <hero :header="blogPage.header" :body="blogPage.description" />
    <div class="[ category-buttons ] [ wrapper ]">
      <div v-for="(category, i) in topCategories" :key="i" :category="category">
        <button class="tag" @click="filterBlogByType(category)">
          {{ category }}
        </button>
      </div>
    </div>
    <main id="content" class="[ main-content ] [ wrapper ]">
      <section v-if="articleList.length > 0">
        <div class="[ category-header ] [ text-primary ]">
          <h1 class="title">
            {{ categoryTitle }}
          </h1>
          <span class="num-articles"> {{ numberOfArticles }}</span>
        </div>
        <div class="articles">
          <div v-for="article in articleList" :key="article.slug">
            <blog-post-card :post="article" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { topEntries } from '~/utils/array'
import Hero from '@/components/Hero.vue'
import BlogPostCard from '@/components/BlogPostCard.vue'

export default {
  async asyncData({ $content }) {
    const blogPage = await $content('blogpage').fetch()
    const articles = await $content('blog')
      .where({ published: { $ne: false } })
      .sortBy('updatedAt', 'desc')
      .fetch()
    const blogCategories = await $content('blog')
      .only('tags')
      .fetch()
      .then((response) => {
        const tags = Array.prototype.concat(
          ...response.map((article) => article.tags)
        )
        return tags
      })
    const topCategories = topEntries(blogCategories, 9)
    return { blogPage, articles, topCategories }
  },
  data() {
    return {
      selectedTag: 'All',
      categoryTitle: 'All',
    }
  },
  head() {
    return {
      title: 'Blog - Gabrielle Brooks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPage.description,
        },
      ],
    }
  },
  computed: {
    articleList() {
      return this.articles.filter((el) => el.tags.includes(this.selectedTag))
    },
    numberOfArticles() {
      const articleCount = this.articleList.length
      return articleCount > 1 ? `${articleCount} Articles` : '1 Article'
    },
  },
  methods: {
    filterBlogByType(tag) {
      this.selectedTag = tag
      this.categoryTitle = tag
    },
  },
  components: {
    Hero,
    BlogPostCard,
  },
}
</script>

<style scoped>
.category-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

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

.tag {
  padding: 0.5rem;
  border: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: #003566;
  border-radius: 0.25rem;
  color: #f3f4f6;
}

.tag:hover {
  cursor: pointer;
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
