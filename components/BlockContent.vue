<template>
  <div class="lg:gap-24 lg:grid-cols-3 smooth-scroll grid grid-cols-1 gap-4">
    <section class="lg:col-span-2 lg:order-1 order-2 block col-span-1 mt-0">
      <article class="lg:prose-xl prose">
        <nuxt-content ref="nuxtContent" :document="content" />
      </article>
      <last-updated :date="content.updatedAt" />
      <prev-next :surround="surround" />
    </section>

    <aside class="lg:col-span-1 lg:flex lg:flex-col lg:order-2 order-1">
      <small class="text-secondary"
        >{{ content.formattedCreatedDate }} &mdash;
        {{ content.readingTime }}</small
      >
      <div
        v-if="content.tags.length > 0"
        class="lg:flex flex-row flex-wrap hidden py-4"
      >
        <tag v-for="tag in content.tags" :key="tag" :category="tag" />
      </div>
      <div v-if="content.toc.length > 0" class="top-16 lg:block sticky hidden">
        <h2 class="text-primary lg:mt-16 text-lg tracking-wider uppercase">
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul class="table-of-contents-list">
            <li
              @click="tableOfContentsHeadingClick(link)"
              :class="{
                'pl-4': link.depth === 3
              }"
              v-for="link of content.toc"
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
                class="no-external-link block mb-2 text-base transition-colors duration-75"
                :href="`#${link.id}`"
                >{{ tableOfContentsLinkText(link.text) }}</a
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
import Tag from '~/components/Tag'

export default {
  props: {
    content: Object,
    surround: Array
  },
  components: {
    LastUpdated,
    PrevNext,
    Tag
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
    },
    tableOfContentsLinkText(link) {
      return link.replace(/\#$/, '')
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
