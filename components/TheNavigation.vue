<template>
  <nav
    class="fixed top-0 left-0 w-full leading-8 z-1000 bg-navigation text-nav"
  >
    <a href="#content" id="skip-navigation" class="sr-only">Skip to Content</a>
    <div
      class="relative flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto my-0 sm:px-6 lg:px-8"
    >
      <div class="flex items-center h-16">
        <logo></logo>
        <div
          class="relative flex-row items-center order-3 hidden w-full py-4 lg:flex lg:h-auto lg:w-auto lg:py-0"
        >
          <div
            class="flex flex-col items-start justify-start mb-0 ml-0 md:flex-row lg:justify-center lg:items-center lg:relative"
          >
            <nuxt-link
              class="px-3 py-2 text-sm rounded-md nav-link"
              to="/about"
            >
              About
            </nuxt-link>
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/blog">
              Blog
            </nuxt-link>
            <nuxt-link class="px-3 py-2 text-sm rounded-md nav-link" to="/work">
              Work
            </nuxt-link>
            <nuxt-link
              class="px-3 py-2 text-sm rounded-md nav-link"
              to="/speaking"
            >
              Speaking
            </nuxt-link>
          </div>
        </div>
      </div>
      <color-mode-picker class="hidden mr-0 lg:block" />
      <div class="fixed inset-0 z-50 overflow-hidden lg:hidden">
        <button
          @click="clickMenu"
          class="absolute top-0 right-0 z-50 inline-flex items-center justify-center p-2 m-3 lg:hidden text-primary hover:text-secondary"
          :aria-label="menuLabel"
          :aria-expanded="menuOpen"
        >
          <component :is="menuIcon" />
        </button>
        <div
          class="absolute inset-0 w-screen h-screen opacity-90 bg-secondary"
          v-show="menuOpen"
        ></div>
        <div class="block" v-show="menuOpen">
          <nav
            class="absolute left-0 flex flex-col justify-between w-3/4 z-2 h-3/4 bottom-100px"
          >
            <div class="ml-12">
              <nuxt-link
                @click.native="menuOpen = false"
                class="block px-3 py-2 mt-1 text-2xl transition duration-150 ease-in-out rounded-md nav-link focus:outline-none"
                to="/about"
              >
                About
              </nuxt-link>
              <nuxt-link
                @click.native="menuOpen = false"
                class="block px-3 py-2 mt-1 text-2xl transition duration-150 ease-in-out rounded-md nav-link focus:outline-none"
                to="/blog"
              >
                Blog
              </nuxt-link>
              <nuxt-link
                @click.native="menuOpen = false"
                class="block px-3 py-2 mt-1 text-2xl transition duration-150 ease-in-out rounded-md nav-link focus:outline-none"
                to="/work"
              >
                Work
              </nuxt-link>
              <nuxt-link
                @click.native="menuOpen = false"
                class="block px-3 py-2 mt-1 text-2xl transition duration-150 ease-in-out rounded-md nav-link focus:outline-none"
                to="/speaking"
              >
                Speaking
              </nuxt-link>
            </div>
            <div class="ml-12">
              <color-mode-picker />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
import ColorModePicker from './ColorModePicker'
import MenuOpen from '@/assets/images/icons/menu_open.svg?inline'
import MenuClose from '@/assets/images/icons/menu_close.svg?inline'

const tailwindConfig = require('../tailwind.config.js')

export default {
  name: 'TheNavigation',
  data() {
    return {
      windowWidth: 0,
      menuOpen: false,
      mdBreakpoint: Number(tailwindConfig.theme.screens.md.replace('px', ''))
    }
  },
  computed: {
    menuLabel() {
      return this.menuOpen ? 'Close navigation' : 'Open navigation'
    },
    menuIcon() {
      return this.menuOpen ? 'menu-close' : 'menu-open'
    }
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth
      this.menuOpen =
        this.windowWidth > this.mdBreakpoint ? false : this.menuOpen
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
    ColorModePicker,
    Logo,
    MenuClose,
    MenuOpen
  }
}
</script>

<style></style>
