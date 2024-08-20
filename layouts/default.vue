<template>
  <div>
    <div class="[ layout-wrapper ] [ transition-colors-300 ]">
      <the-navigation></the-navigation>
      <nuxt keep-alive />
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter,
    TheNavigation
  }
}
</script>
<style scoped></style>
