<template>
  <div class="[ hero-container ] [ bg-secondary ]">
    <div class="hero">
      <header class="hero-header">
        <div class="hero-header-inner">
          <h1 class="[ headline ] [ text-primary ]">
            {{ header }}
          </h1>
          <p v-if="body" class="[ body ] [ text-primary ]">
            {{ body }}
          </p>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header() {
      return this.$store.state.pageHeader || ''
    },
    body() {
      return this.$store.state.pageSubheader || ''
    }
  }
}
</script>

<style scoped>
.hero-container {
  overflow: hidden;
}

.hero-header {
  position: relative;
  max-width: 1280px;
  padding: 0 1rem;
  margin: 1.5rem auto 0 auto;
}

.hero-header-inner {
  position: relative;
  text-align: center;
}

.headline {
  font-size: 2.25rem;
  line-height: 2.5rem;
  letter-spacing: -0.025em;
}

.body {
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 28rem;
  margin: 0.75rem auto 0 auto;
}

@media screen and (min-width: 640px) {
  .hero-header {
    padding: 0 1.5rem;
    margin-top: 3rem;
  }

  .headline {
    font-size: 3rem;
    line-height: none;
  }

  .body {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

@media screen and (min-width: 800px) {
  .hero-header {
    margin-top: 4rem;
  }

  .headline {
    font-size: 3.75rem;
    line-height: 1;
  }

  .body {
    font-size: 1.25rem;
    margin-top: 1.25rem;
    max-width: 42rem;
  }
}

@media screen and (min-width: 1024px) {
  .hero-header {
    margin-top: 8rem;
  }
}

@media screen and (min-width: 1280px) {
  .hero-header {
    margin-top: 7rem;
  }
}
</style>
