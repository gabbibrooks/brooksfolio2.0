<template>
  <div class="[ layout ] [ transition-colors-500 ]">
    <the-navigation></the-navigation>
    <the-header></the-header>
    <div>
      <div class="main-content-outer">
        <main id="content" class="main-content">
          <div class="content-inner">
            <nuxt keep-alive />
          </div>
        </main>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheNavigation
  }
}
</script>
<style scoped>
.main-content-outer {
  position: relative;
}

.main-content-outer .main-content {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 5rem;
}

@media screen and (min-width: 1024px) {
  .main-content-outer .main-content {
    padding-top: 3rem;
    padding-bottom: 7rem;
  }
}
</style>
