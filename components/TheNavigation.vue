<template>
  <nav
    class="fixed top-0 left-0 w-full leading-8 z-1000 bg-navigation text-nav"
  >
    <a href="#content" id="skip-navigation" class="sr-only">Skip to Content</a>
    <div
      class="relative flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto my-0 sm:px-6 lg:px-8"
    >
    <div class="flex items-center h-16">
        <logo class="order-1"></logo>
      <transition name="slide">
        <div
          v-show="menuVisible"
          class="relative flex flex-col items-start order-3 w-full py-4 lg:flex-row lg:items-center lg:h-auto lg:w-auto lg:order-2 lg:py-0"
        >
          <div
            class="flex flex-col items-start justify-start mb-0 ml-0 lg:flex-row lg:justify-center lg:items-center lg:relative"
          >
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/about">
              About
            </nuxt-link>
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/blog">
              Blog
            </nuxt-link>
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/work">
              Work
            </nuxt-link>
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/speaking">
              Speaking
            </nuxt-link>
          </div>
        </div>
      </transition>
    </div>

      <div class="flex items-center order-2 h-full lg:order-3">
        <color-mode-picker class="mr-3 lg:mr-0"/>
        <button
          @click="clickMenu"
          class="flex items-center lg:hidden text-primary hover:text-secondary"
        >
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
import ColorModePicker from './ColorModePicker'

const tailwindConfig = require('../tailwind.config.js')

export default {
  name: 'TheHeader',
  data() {
    return {
      windowWidth: 0,
      menuOpen: false,
      lgBreakpoint: Number(tailwindConfig.theme.screens.lg.replace('px', ''))
    }
  },
  computed: {
    menuVisible() {
      return this.windowWidth > this.lgBreakpoint ? true : this.menuOpen
    }
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth
    },
    clickMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  mounted() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
  },
  beforeDestroyed() {
    window.removeEventListener('resize', this.updateWindowSize)
  },
  components: {
    Logo,
    ColorModePicker
  }
}
</script>

<style></st
    ColorModePickeryle>
