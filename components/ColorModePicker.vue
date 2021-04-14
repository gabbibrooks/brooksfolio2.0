<template>
  <button
    class="[ color-mode-btn ] [ transition ease-in-out ]"
    @click="toggleColorMode()"
    type="button"
    :aria-label="label"
    :title="label"
  >
    <component class="icn" :is="icon" />
  </button>
</template>

<script>
import IconLight from '@/assets/images/icons/light.svg?inline'
import IconDark from '@/assets/images/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark,
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value == 'dark' ? 'light' : 'dark'
    },
  },
  computed: {
    icon() {
      return `icon-${this.$colorMode.value}`
    },
    label() {
      return `Turn on ${
        this.$colorMode.value == 'dark' ? 'light' : 'dark'
      } mode`
    },
  },
}
</script>

<style scoped>
.color-mode-btn {
  height: 3rem;
  padding: 0.25rem;
  border: 2px transparent;
  background-color: transparent;
  border-radius: 9999px;
}

.color-mode-btn:hover .icn {
  color: var(--color-primary);
  cursor: pointer;
}

.color-mode-btn:focus {
  outline: none;
}

.color-mode-btn .icn {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-text-primary);
}

@media screen and (min-width: 800px) {
  .color-mode-btn {
    height: 2rem;
  }

  .color-mode-btn .icn {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
