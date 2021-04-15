<template>
  <header class="[ content-header ] [ bg-primary ]">
    <div class="[ content-header-items ] [ wrapper ]">
      <div v-if="showSitePath" class="breadcrumbs">
        <nuxt-link to="/" class="[ breadcrumb ] [ text-secondary ]"
          >Home</nuxt-link
        >
        <chevron class="[ chevron ] [ text-secondary ]" />
        <nuxt-link to="/blog" class="[ breadcrumb ] [ text-secondary ]"
          >Blog</nuxt-link
        >
        <chevron class="[ chevron ] [ text-secondary ]" />
        <div class="[ title ] [ text-primary ]">{{ article.title }}</div>
      </div>
      <h1 class="[ headline ] [ text-primary ]">
        {{ article.title }}
      </h1>
      <h2
        v-if="article.description"
        class="[ sub-headline ] [ text-secondary ]"
      >
        {{ article.description }}
      </h2>
    </div>
  </header>
</template>

<script>
import Chevron from '@/assets/images/icons/chevron.svg?inline'

export default {
  props: {
    article: Object,
    showSitePath: Boolean,
  },
  computed: {
    category() {
      return this.article.category.toLowerCase()
    },
  },
  components: {
    Chevron,
  },
}
</script>

<style scoped>
.content-header {
  overflow: hidden;
  padding: 4rem 0 6rem 0;
}

.content-header-items {
  position: relative;
  text-align: left;
}

.breadcrumbs {
  display: flex;
  align-items: center;
}

.breadcrumb,
.title {
  border: none;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem;
}

.breadcrumb:nth-of-type(2),
.breadcrumb:nth-of-type(3) {
  margin-left: 0.5rem;
}

.breadcrumbs .chevron {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 0.5rem;
}

.breadcrumb:focus,
.breadcrumb:hover {
  background: transparent;
  color: var(--color-text-primary);
  outline: none;
}

.headline {
  margin-top: 1rem;
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2rem;
}

.sub-headline {
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.75rem;
}

@media screen and (min-width: 640px) {
  .headline {
    font-size: 2.25rem;
    line-height: none;
  }

  .sub-headline {
    line-height: none;
  }
}

@media screen and (min-width: 800px) {
  .content-header-items {
    padding-bottom: 1rem;
  }

  .headline {
    font-size: 3rem;
    line-height: 1;
  }

  .sub-headline {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .breadcrumbs .chevron {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
  }

  .breadcrumb {
    font-size: 1.125rem;
  }
}

@media screen and (min-width: 1024px) {
  .content-header {
    padding-bottom: 2rem;
  }

  .headline {
    margin-top: 3rem;
  }
}
</style>
