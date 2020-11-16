<template>
  <div class="flex justify-center text-secondary">
    <color-mode-picker />
    <nuxt-content :document="homepage" />
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker.vue'
export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch()
    const contacts = await $content('data/contact').fetch()

    return {
      homepage,
      contacts
    }
  },
  components: {
    ColorModePicker
  }
}
</script>

<style></style>
