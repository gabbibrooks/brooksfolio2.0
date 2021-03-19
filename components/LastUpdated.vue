<template>
  <div class="[ last-updated ] [ text-primary fit-content ]">
    <p class="[ title ] [ text-secondary ]">Last Updated</p>
    <span class="date">{{ updatedDate }}</span>
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

<style scoped>
.last-updated {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0;
}

.date {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}
</style>
