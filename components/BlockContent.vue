<template>
  <div class="block-content">
    <section class="main">
      <article class="prose">
        <nuxt-content ref="nuxtContent" :document="content" />
      </article>
      <last-updated :date="content.updatedAt" />
      <prev-next :surround="surround" />
    </section>

    <aside v-if="content.toc.length > 0" class="sidebar">
      <table-of-contents
        :toc="content.toc"
        :currentlyActiveToc="currentlyActiveToc"
        @tocHeadingClick="tableOfContentsHeadingClick"
      />
    </aside>
  </div>
</template>

<script>
import LastUpdated from '@/components/LastUpdated.vue'
import PrevNext from '@/components/PrevNext.vue'
import TableOfContents from '@/components/TableOfContents.vue'

export default {
  props: {
    content: Object,
    surround: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '0px',
        threshold: 1.0,
      },
    }
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)
    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  components: {
    LastUpdated,
    PrevNext,
    TableOfContents,
  }
}
</script>

<style scoped>
.block-content {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.main {
  display: block;
  order: 2;
  margin-top: 0;
  grid-column: span 1 / span 1;
}

.sidebar {
  order: 1;
}

.sidebar .tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.sidebar .tags:first-child {
  padding-left: 0;
}

@media screen and (min-width: 1024px) {
  .block-content {
    gap: 10rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .main {
    order: 1;
    grid-column: span 2 / span 2;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    order: 2;
    grid-column: span 1 / span 1;
  }
}
</style>
