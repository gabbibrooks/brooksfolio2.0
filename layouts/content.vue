<template>
  <div class="min-h-screen pt-16 transition-colors duration-500">
    <the-navigation></the-navigation>
    <div>
      <the-content-header></the-content-header>
      <div class="relative">
        <main class="relative pt-8 pb-20 lg:pt-12 lg:pb-28">
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
