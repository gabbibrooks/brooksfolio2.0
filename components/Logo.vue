<template>
  <nuxt-link to="/" class="logo-link">
    <component :is="logo" />
    <span class="[ text ] [ text-primary ]">Zachary Brooks</span>
  </nuxt-link>
</template>

<script>
import LogoLight from '@/assets/images/logos/light.svg?inline'
import LogoDark from '@/assets/images/logos/dark.svg?inline'

export default {
  computed: {
    logo() {
      return `logo-${this.$colorMode.value}`
    },
  },
  components: {
    LogoLight,
    LogoDark,
  },
}
</script>
<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  border: none;
}

.logo-link svg {
  display: block;
  width: auto;
  height: 2rem;
}

.logo-link .text {
  margin: 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
}

.logo-link:hover {
  background-color: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
}
</style>
