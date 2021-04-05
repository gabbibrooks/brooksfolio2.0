<template>
  <div v-if="toc.length > 0" class="toc">
    <h2 class="[ heading ] [ text-primary ]">Table of contents</h2>
    <nav class="toc-menu">
      <ul class="toc-list">
        <li
          @click="$emit('tocHeadingClick', link)"
          class="toc-list-item"
          :data-depth="link.depth"
          v-for="link of toc"
          :key="link.id"
        >
          <a
            role="button"
            class="[ toc-link ] [ not-external-link text-secondary ]"
            :data-state="
              link.id === currentlyActiveToc ? 'active' : 'not-active'
            "
            :href="`#${link.id}`"
            >{{ tableOfContentsLinkText(link.text) }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toc: Array,
    currentlyActiveToc: String,
  },
  methods: {
    tableOfContentsLinkText(link) {
      return link.replace(/\#$/, '')
    },
  },
}
</script>

<style scoped>
.toc {
  position: sticky;
  top: 4rem;
  display: block;
}

.heading {
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  line-height: 1.75rem;
  text-transform: uppercase;
}

.toc-menu {
  margin-top: 1rem;
}

.toc-list-item[data-depth='3'] {
  padding-left: 1rem;
}

.toc-link {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition-duration: 75ms;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.toc-link:hover {
  color: var(--color-text-primary);
}

.toc-link[data-state='active'] {
  color: var(--color-primary);
}

.toc-link[data-state='active']:hover {
  color: var(--color-primary--muted);
}

@media screen and (min-width: 1024px) {
  .toc {
    margin-top: 4rem;
  }
}
</style>
