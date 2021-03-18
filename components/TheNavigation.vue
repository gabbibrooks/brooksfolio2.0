<template>
  <nav class="[ site-nav-layout ] [ bg-secondary text-primary ]">
    <a href="#content" id="skip-navigation" class="visually-hidden"
      >Skip to Content</a
    >
    <div class="[ site-nav content-inner ]">
      <div class="site-nav-inner">
        <logo></logo>
        <div class="site-nav-inner-items">
          <div class="site-nav-links">
            <nuxt-link class="[ nav-link ] [ text-primary ]" to="/about">
              About
            </nuxt-link>
            <nuxt-link class="[ nav-link ] [ text-primary ]" to="/blog">
              Blog
            </nuxt-link>
            <nuxt-link class="[ nav-link ] [ text-primary ]" to="/work">
              Work
            </nuxt-link>
            <nuxt-link class="[ nav-link ] [ text-primary ]" to="/speaking">
              Speaking
            </nuxt-link>
          </div>
        </div>
      </div>
      <color-mode-picker class="color-mode" />
      <button
        v-if="!menuOpen"
        @click="clickMenu"
        class="[ nav-menu-btn open] [ text-primary ]"
        :aria-label="menuLabel"
        :aria-expanded="menuOpen"
      >
        Menu
      </button>
      <div v-if="menuOpen" class="nav-menu">
        <button
          @click="clickMenu"
          class="[ nav-menu-btn close ] [ text-primary ]"
          :aria-label="menuLabel"
          :aria-expanded="menuOpen"
        >
          Close
        </button>
        <div class="[ nav-menu-overlay ] [ bg-primary ] "></div>
        <nav class="nav-menu-layout">
          <div class="nav-menu-links">
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ text-primary ]"
              to="/about"
            >
              About
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ text-primary ]"
              to="/blog"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ text-primary ]"
              to="/work"
            >
              Work
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ text-primary ]"
              to="/speaking"
            >
              Speaking
            </nuxt-link>
          </div>

          <color-mode-picker class="color-mode" />
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
import ColorModePicker from './ColorModePicker'

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
    Logo
  }
}
</script>

<style scoped>
.site-nav-layout {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  line-height: 2rem;
}

.site-nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.site-nav-inner {
  display: flex;
  align-items: center;
  height: 4rem;
}

.site-nav-inner-items {
  position: relative;
  display: none;
  order: 3;
  width: 100%;
  padding: 1rem 0;
}

.site-nav-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
}

.nav-link {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  border: none;
}

.nav-link:hover {
  cursor: pointer;
  background-color: transparent;
  color: var(--color-text-primary);
}

.site-nav .color-mode {
  display: none;
  margin-right: 0;
}

.nav-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid var(--color-text-primary);
  border-radius: 0.25rem;
  cursor: pointer;
}

.nav-menu-btn.close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 50;
  margin: 0.9rem 1rem;
}

.nav-menu-btn:hover {
  color: var(--text-secondary);
}

.site-nav .nav-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
}

.nav-menu-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.9;
  height: 100vh;
  width: 100vh;
}

.nav-menu-layout {
  position: absolute;
  left: 0;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75%;
  width: 75%;
  z-index: 2;
}

.nav-menu-links {
  margin-left: 2rem;
}

.nav-menu .nav-menu-layout .color-mode {
  display: block;
  align-self: start;
  margin-left: 2rem;
}

.nav-menu .nav-menu-layout .nav-menu-links .nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  margin-top: 0.25rem;
  font-size: 1.75rem;
  line-height: 1.75rem;
}

.nav-menu .nav-menu-layout .nav-menu-links .nav-link:focus {
  outline: none;
}

@media screen and (min-width: 640px) {
  .nav-menu-btn.close {
    margin: 0.9rem 1.5rem;
  }
}

@media screen and (min-width: 800px) {
  .site-nav-inner-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    width: auto;
    padding: 0;
  }

  .site-nav-links {
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .site-nav .color-mode {
    display: block;
  }

  .nav-menu-btn,
  .nav-menu {
    display: none;
  }
}
</style>
