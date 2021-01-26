<template>
  <div class="flex">
    <div class="flex flex-col text-primary">
      <p class="mb-0 text-lg uppercase">Last Updated</p>
      <span class="text-secondary">{{ updatedDate }}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/utils/date'

export default {
  props: {
    date: String
  },
  computed: {
    updatedDate() {
      return formatDate(this.date)
    }
  }
}
</script>

<style></style>
