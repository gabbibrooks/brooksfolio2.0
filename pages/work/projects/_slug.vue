<template>
  <div class="grid grid-cols-1 gap-24 lg:grid-cols-3 table-of-contents">
    <section class="order-2 block col-span-1 mt-0 lg:col-span-2 lg:order-1">
      <article class="prose lg:prose-xl">
        <nuxt-content ref="nuxtContent" :document="project" />
      </article>
      <last-updated :date="project.updatedAt" />
      <prev-next :surround="surround" />
    </section>

    <aside class="order-1 lg:col-span-1 lg:flex lg:flex-col lg:order-2">
      <small class="text-secondary"
        >{{ project.formattedCreatedDate }} &mdash;
        {{ project.readingTime }}</small
      >
      <div class="flex-row flex-wrap hidden py-4 lg:flex">
        <tag v-for="tag in project.tags" :key="tag" :category="tag" />
      </div>
      <div v-if="project.toc.length > 0" class="sticky hidden lg:block top-16">
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
              v-for="link of project.toc"
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
                class="block mb-2 text-base transition-colors duration-75 no-external-link"
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
import Tag from '~/components/Tag'

export default {
  components: {
    LastUpdated,
    PrevNext,
    Tag
  },
  layout: 'content',
  async asyncData({ $content, params }) {
    const project = await $content('work/projects', params.slug).fetch()
    const surround = await $content('work/projects')
      .sortBy('createdAt', 'asc')
      .only(['title', 'subtitle', 'path', 'createdAt'])
      .surround(project.slug)
      .fetch()

    return { project, surround }
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
    this.$store.dispatch('setPageHeader', this.project.title)
    this.$store.dispatch('setPageSubheader', this.project.description)
    this.$store.dispatch('setPageHeaderPosition', 'left')

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
