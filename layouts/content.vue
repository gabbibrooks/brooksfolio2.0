<template>
  <div class="transition-colors-300">
    <div class="layout-wrapper">
      <the-navigation></the-navigation>
      <div>
        <the-content-header></the-content-header>
        <div class="main-content-container">
          <main id="content" class="[ main-content ] [ wrapper ]">
            <nuxt keep-alive />
          </main>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'
import TheContentHeader from '@/components/TheContentHeader.vue'

export default {
  components: {
    TheContentHeader,
    TheFooter,
    TheNavigation
  }
}
</script>
<style></style>
