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
      return `Turn on ${
        this.$colorMode.value == 'dark' ? 'light' : 'dark'
      } mode`
    }
  }
}
</script>

<style scoped>
.color-mode-btn {
  background-color: transparent;
  border: 2px transparent;
  border-radius: 9999px;
  padding: 0.25rem;
  height: 3rem;
}

.color-mode-btn:hover .icn {
  cursor: pointer;
  color: var(--color-primary);
}

.color-mode-btn:focus {
  outline: none;
}

.color-mode-btn .icn {
  color: var(--color-text-primary);
  height: 2.5rem;
  width: 2.5rem;
}

@media screen and (min-width: 800px) {
  .color-mode-btn {
    height: 2rem;
  }

  .color-mode-btn .icn {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
