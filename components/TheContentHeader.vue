<template>
  <header class="[ content-header ] [ bg-secondary ]">
    <div
      class="[ content-header-inner content-inner ]"
      :data-position="textAlignment"
    >
      <h1 class=" [ headline ] [ text-primary ] ">
        {{ header }}
      </h1>
      <h2 v-if="subHeader" class="[ sub-headline ] [ text-secondary ]">
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
      return this.$store.state.pageHeaderPosition || 'center'
    }
  }
}
</script>

<style scoped>
.content-header {
  overflow: hidden;
  padding: 4rem 0 6rem 0;
}

.content-header-inner {
  text-align: center;
  position: relative;
}

.content-header-inner[data-position='left'] {
  text-align: left;
}

.content-header-inner[data-position='center'] {
  text-align: center;
}

.content-header-inner[data-position='right'] {
  text-align: right;
}

.headline {
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2rem;
  margin-top: 1rem;
}

.sub-headline {
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.75rem;
  margin-top: 1rem;
}

@media screen and (min-width: 640px) {
  .headline {
    font-size: 2.25rem;
    line-height: none;
  }

  .sub-headline {
    line-height: none;
  }
}

@media screen and (min-width: 800px) {
  .content-header-inner {
    padding-bottom: 1rem;
  }

  .headline {
    font-size: 3rem;
    line-height: 1;
  }

  .sub-headline {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media screen and (min-width: 1024px) {
  .content-header {
    padding-bottom: 8rem;
  }

  .headline {
    margin-top: 3rem;
  }
}
</style>
