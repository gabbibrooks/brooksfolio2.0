<template>
  <div class="flex">
    <div class="flex flex-col text-primary">
      <p class="mb-0 text-lg uppercase">Last Updated</p>
      <span class="text-secondary">{{ updatedDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String
  },
  computed: {
    updatedDate() {
      return new Date(this.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style></style>
