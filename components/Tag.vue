<template>
  <nuxt-link
    class="[ tag ] [ not-external-link bg-secondary text-primary ]"
    :to="tagLink"
    >{{ category }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    category: String
  },
  computed: {
    tagLink() {
      return `/blog/${this.category.toLowerCase()}`
    }
  }
}
</script>

<style scoped>
.tag {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

.tag:hover {
  color: var(--color-text-secondary);
}
</style>
