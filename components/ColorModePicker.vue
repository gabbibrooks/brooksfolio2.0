<template>
  <div>
    <button
      class="p-1 transition duration-150 ease-in-out border-2 border-transparent text-white rounded-full focus:outline-none"
      @click="toggleColorMode()"
      type="button"
    >
      <component :is="icon" />
    </button>
  </div>
</template>

<script>
import IconLight from '@/assets/images/icons/light.svg?inline'
import IconDark from '@/assets/images/icons/dark.svg?inline'

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
