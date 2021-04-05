<template>
  <div
    class="min-h-screen-w-footer pt-16 transition-colors duration-500 ease-in-out"
  >
    <the-navigation></the-navigation>
    <div>
      <div class="relative">
        <div
          class="text-primary flex flex-col justify-center w-full mx-auto text-4xl text-center"
        >
          <h1 class="" v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occurred</h1>
          <nuxt-link class="no-external-link" to="/">Go to Home page</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'content',
}
</script>
