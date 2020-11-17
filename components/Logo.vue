<template>
  <nuxt-link to="/" class="flex items-center nav-link">
    <component :is="logo" class="hidden w-auto h-8 lg:block" />
    <span class="ml-3 text-xl font-bold">Zachary Brooks</span>
  </nuxt-link>
</template>

<script>
import LogoLight from '@/assets/images/logos/light.svg?inline'
import LogoDark from '@/assets/images/logos/dark.svg?inline'

export default {
  computed: {
    logo() {
      return `logo-${this.$colorMode.value}`
    }
  },
  components: {
    LogoLight,
    LogoDark
  }
}
</script>
<style></style>
