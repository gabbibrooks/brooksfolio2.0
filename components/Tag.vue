<template>
  <nuxt-link
    class="px-3 py-1 mb-4 mr-3 text-sm rounded-lg first:pl-0 bg-secondary text-primary hover:text-secondary no-external-link"
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

<style></style>
