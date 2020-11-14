<template>
  <div>
    <component :is="icon" @click="toggleColorMode()" />
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark
  },
  data() {
    return {
      color: 'dark'
    }
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value == 'dark' ? 'light' : 'dark'
    }
  },
  computed: {
    icon() {
      return `icon-${this.$colorMode.value}`
    }
  }
}
</script>

<style></style>
