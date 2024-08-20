<template>
  <div>
    <div class="[ layout-wrapper ] [ transition-colors-300 ]">
      <the-navigation></the-navigation>
      <div class="main-content-container">
        <main id="content" class="[ main-content ] [ wrapper ]">
          <nuxt keep-alive />
        </main>
      </div>
    </div>
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
  },
}
</script>
<style scoped></style>
