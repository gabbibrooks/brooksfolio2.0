<template>
  <div class="min-h-screen pt-16 transition-colors duration-500">
    <the-header></the-header>
    <nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style></style>
