<template>
  <nuxt-link
    class="[ tag ] [ not-external-link bg-secondary text-primary ]"
    :to="`/categories/${category}`"
    >{{ category }}</nuxt-link
  >
</template>

<script>
export default {
  props: {
    category: String
  }
}
</script>

<style scoped>
.tag {
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.25rem 0.75rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.tag:hover {
  color: var(--color-text-secondary);
}
</style>
