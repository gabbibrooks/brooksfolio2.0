<template>
  <header
    class="pt-16 pb-24 overflow-hidden transition-colors duration-500 lg:pt-16 lg:pb-32 bg-secondary content-hero"
  >
    <div
      class="relative max-w-6xl px-4 mx-auto md:pb-4 sm:px-6 lg:px-8"
      :class="textAlignment"
    >
      <h1
        class="mt-4 text-3xl font-extrabold leading-10 sm:text-4xl sm:leading-none md:text-5xl text-primary lg:mt-12"
      >
        {{ header }}
      </h1>
      <h2
        v-if="subHeader"
        class="mt-4 text-lg font-extrabold text-gray-600 sm:leading-none md:text-xl "
      >
        {{ subHeader }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    header() {
      return this.$store.state.pageHeader || ''
    },
    subHeader() {
      return this.$store.state.pageSubheader || ''
    },
    textAlignment() {
      return `text-${this.$store.state.pageHeaderPosition}`
    }
  }
}
</script>

<style></style>
