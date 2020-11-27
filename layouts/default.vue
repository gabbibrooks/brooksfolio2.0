<template>
  <div class="min-h-screen pt-16 transition-colors duration-500">
    <the-navigation></the-navigation>
    <the-header></the-header>
    <div>
      <div class="relative">
        <main id="content" class="relative pt-8 pb-20 lg:pt-12 lg:pb-28">
          <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <nuxt />
          </div>
        </main>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'
import TheHeader from '../components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheNavigation
  }
}
</script>
<style></style>
