<template>
  <div class="transition-colors duration-100">
    <div class="min-h-screen-w-footer pt-16">
      <the-navigation></the-navigation>
      <div>
        <the-content-header></the-content-header>
        <div class="relative">
          <main id="content" class="lg:pt-12 lg:pb-28 relative pt-8 pb-20">
            <div class="sm:px-6 lg:px-8 max-w-6xl px-4 mx-auto">
              <nuxt keep-alive />
            </div>
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
