<template>
  <nav class="[ site-nav-layout ] [ bg-primary text-primary ]">
    <a href="#content" id="skip-navigation" class="visually-hidden"
      >Skip to Content</a
    >
    <div class="[ site-nav ] [ wrapper ]">
      <div class="site-nav-inner">
        <logo></logo>
        <div class="site-nav-inner-items">
          <div class="site-nav-links">
            <nuxt-link
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/about"
            >
              About
            </nuxt-link>
            <nuxt-link
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/blog"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/work"
            >
              Work
            </nuxt-link>
            <nuxt-link
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/resources/talks"
            >
              Talks
            </nuxt-link>
            <nuxt-link
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/resources"
            >
              Resources
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
        <div class="[ nav-menu-overlay ] [ bg-primary ]"></div>
        <nav class="nav-menu-layout">
          <div class="nav-menu-links">
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/about"
            >
              About
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/blog"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/work"
            >
              Work
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/resources/talks"
            >
              Talks
            </nuxt-link>
            <nuxt-link
              @click.native="menuOpen = false"
              class="[ nav-link ] [ not-external-link text-primary ]"
              to="/resources"
            >
              Resources
            </nuxt-link>
          </div>

          <color-mode-picker class="color-mode" />
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation',
  data() {
    return {
      windowWidth: 0,
      menuOpen: false,
      mdBreakpoint: 800,
    }
  },
  computed: {
    menuLabel() {
      return this.menuOpen ? 'Close navigation' : 'Open navigation'
    },
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth
      this.menuOpen =
        this.windowWidth > this.mdBreakpoint ? false : this.menuOpen
    },
    clickMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
  mounted() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
  },
  beforeDestroyed() {
    window.removeEventListener('resize', this.updateWindowSize)
  },
}
</script>

<style scoped>
.site-nav-layout {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
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
  height: 4rem;
  align-items: center;
}

.site-nav-inner-items {
  position: relative;
  display: none;
  width: 100%;
  order: 3;
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
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem;
}

.nav-link:hover {
  color: var(--color-primary);
}

.site-nav .color-mode {
  display: none;
  margin-right: 0;
}

.nav-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-text-primary);
  background-color: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
}

.nav-menu-btn.close {
  position: absolute;
  z-index: 50;
  top: 0;
  right: 0;
  margin: 0.9rem 1.5rem;
}

.nav-menu-btn:hover {
  color: var(--text-secondary);
}

.site-nav .nav-menu {
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.nav-menu-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  opacity: 0.9;
}

.nav-menu-layout {
  position: absolute;
  z-index: 2;
  bottom: 100px;
  left: 0;
  display: flex;
  width: 75%;
  height: 75%;
  flex-direction: column;
  justify-content: space-between;
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
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0;
  }

  .site-nav-links {
    position: relative;
    flex-direction: row;
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
