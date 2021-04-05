<template>
  <div
    v-if="surround[0] || surround[1]"
    class="prev-next-navigation"
    :data-links="surround[0] && surround[1] ? 2 : 1"
  >
    <nuxt-link
      v-if="surround[0]"
      :to="surround[0].path"
      class="[ content-link prev ] [ color-primary ]"
      :data-full-width="surround[1] === null"
    >
      <strong class="content-link-text"
        ><arrow-left class="[ arrow left ]" /> Prev</strong
      >
      <p class="content-link-title">{{ surround[0].title }}</p>
    </nuxt-link>
    <nuxt-link
      v-if="surround[1]"
      :to="surround[1].path"
      class="[ content-link next ] [ color-primary ]"
      :data-full-width="surround[0] === null"
    >
      <strong class="content-link-text"
        >Next <arrow-right class="[ arrow right ]"
      /></strong>
      <p class="content-link-title">{{ surround[1].title }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/images/icons/arrow_left.svg?inline'
import ArrowRight from '@/assets/images/icons/arrow_right.svg?inline'

export default {
  props: {
    surround: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    layoutClasses() {
      if (this.surround[0] && this.surround[1]) {
        return 'grid-cols-2'
      }

      return 'grid-cols-1'
    },
    prevClasses() {
      if (this.surround[1]) {
        return 'rounded-l-xl'
      }

      return 'rounded-xl'
    },
  },
  components: {
    ArrowRight,
    ArrowLeft,
  },
}
</script>

<style scoped>
.prev-next-navigation {
  display: grid;
  border: 2px solid var(--color-primary);
  margin: 4rem 0;
  border-radius: 1rem;
  grid-template-rows: auto auto;
}

.prev-next-navigation[data-links='1'] {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.prev-next-navigation[data-links='2'] .content-link.prev {
  border: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.prev-next-navigation[data-links='2'] .content-link.next {
  border: none;
  border-bottom-left-radius: 0.75rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.content-link {
  display: grid;
  border: none;
  grid-template-rows: auto 1fr;
  text-decoration: none;
}

.content-link.prev {
  border-bottom-left-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
}

.content-link.prev[data-full-width='true'] {
  border-radius: 0.75rem;
}

.content-link.next {
  border-left: 2px solid var(--color-primary);
  border-bottom-right-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  text-align: right;
}

.content-link.next[data-full-width='true'] {
  border-left: none;
  border-radius: 0.75rem;
}

.content-link-text,
.content-link-title {
  padding: 1rem 3rem;
}

.content-link-text {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid;
}

.content-link.next .content-link-text {
  justify-content: flex-end;
}

.arrow {
  width: 1.5rem;
  height: 1.5rem;
}

.arrow.left {
  margin-right: 0.5rem;
}

.arrow.right {
  margin-left: 0.5rem;
}

@media screen and (min-width: 640px) {
  .prev-next-navigation[data-links='1'] {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .prev-next-navigation[data-links='2'] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .prev-next-navigation[data-links='2'] .content-link.prev {
    border-bottom-left-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0;
  }

  .prev-next-navigation[data-links='2'] .content-link.next {
    border-left: 2px solid var(--color-primary);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0.75rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0.75rem;
  }
}
</style>
