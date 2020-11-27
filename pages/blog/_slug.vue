<template>
  <div class="grid grid-cols-1 gap-24 lg:grid-cols-3 table-of-contents">
    <section class="block col-span-1 mt-0 lg:col-span-2">
      <article class="prose lg:prose-xl">
        <nuxt-content ref="nuxtContent" :document="post" />
      </article>
      <last-updated :date="post.updatedAt" />
      <prev-next :surround="surround" />
    </section>

    <aside class="lg:col-span-1 lg:flex lg:flex-col">
      <div class="sticky top-16">
        <h2 class="text-lg tracking-wider uppercase text-primary lg:mt-16">
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul class="table-of-contents-list">
            <li
              @click="tableOfContentsHeadingClick(link)"
              :class="{
                'pl-4': link.depth === 3
              }"
              v-for="link of post.toc"
              :key="link.id"
            >
              <a
                role="button"
                :class="{
                  'text-initial hover:text-initial--muted':
                    link.id === currentlyActiveToc,
                  'text-secondary hover:text-primary':
                    link.id !== currentlyActiveToc
                }"
                class="block mb-2 text-base transition-colors duration-75 nav-link"
                :href="`#${link.id}`"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
import PrevNext from '~/components/PrevNext'
import LastUpdated from '~/components/LastUpdated'

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.tag
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        }
      ]
    }
  },
  components: {
    LastUpdated,
    PrevNext
  },
  layout: 'content',
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    const surround = await $content('blog')
      .sortBy('createdAt', 'asc')
      .only(['title', 'path', 'createdAt'])
      .surround(post.slug)
      .fetch()

    return { post, surround }
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        rootMargin: '0px',
        threshold: 1.0
      }
    }
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)
    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach(section => {
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    this.observer.disconnect()
  }
}
</script>

<style></style>
