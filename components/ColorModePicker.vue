<template>
  <div>
    <button
      class="p-1 text-white transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none"
      @click="toggleColorMode()"
      type="button"
      :aria-label="label"
      :title="label"
    >
      <component class="w-10 h-10 lg:h-6 lg:w-6" :is="icon" />
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
    },
    label() {
      return `Activate ${
        this.$colorMode.value == 'dark' ? 'light' : 'dark'
      } mode`
    }
  }
}
</script>

<style></style>
