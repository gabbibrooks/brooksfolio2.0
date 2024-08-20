<template>
  <div class="[ layout-wrapper ] [ transition-colors-300 ]">
    <the-navigation></the-navigation>
    <nuxt keep-alive />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavigation,
    TheFooter,
  }
}
</script>
<style></style>
