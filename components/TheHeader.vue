<template>
  <div class="bg-secondary overflow-hidden">
    <div class="hero">
      <header
        class="sm:mt-12 sm:px-6 md:mt-16 lg:mt-32 xl:mt-28 relative max-w-screen-xl px-4 mx-auto mt-10"
      >
        <div class="relative text-center">
          <h1
            class="text-primary sm:text-5xl sm:leading-none md:text-6xl text-4xl leading-10 tracking-tight"
          >
            {{ header }}
          </h1>
          <p
            v-if="body"
            class="text-primary sm:text-lg md:mt-5 md:text-xl md:max-w-2xl max-w-md mx-auto mt-3 text-base"
          >
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

<style></style>
