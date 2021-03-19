<template>
  <div>
    <div class="[ layout-wrapper ] [ transition-colors-300 ]">
      <the-navigation></the-navigation>
      <the-header></the-header>
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
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheNavigation
  }
}
</script>
<style scoped></style>
