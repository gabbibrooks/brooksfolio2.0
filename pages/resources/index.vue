<template>
  <div class="main-content-container">
    <hero :header="resourcePage.header" :body="resourcePage.description" />
    <main id="content" class="[ main-content ] [ wrapper ]">
      <section v-if="resources.length > 0">
        <div class="resources">
          <div
            class="resource"
            v-for="resource in resources"
            :key="resource.link"
          >
            <div class="pattern-dots">
              <nuxt-link class="[ text-primary ]" :to="resource.link">
                <div class="card [ bg-secondary ]">
                  <div class="content">
                    <h2 class="title">{{ resource.title }}</h2>
                    <p class="body">{{ resource.description }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  async asyncData({ $content }) {
    const resources = await $content('resources').fetch()
    const resourcePage = await $content('resourcepage').fetch()

    return { resources, resourcePage }
  },
  head() {
    return {
      title: 'Resources - Gabrielle Brooks',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.resourcePage.description,
        },
      ],
    }
  },
  components: {
    Hero,
  },
}
</script>

<style scoped>
.resources {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(0, 1fr);
}

.resource {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  padding-left: 0;
}

.resource:hover .title {
  color: var(--color-primary);
}

.pattern-dots {
  background-image: radial-gradient(
    var(--color-text-primary) 1px,
    transparent 1px
  );
  background-size: calc(10 * 1px) calc(10 * 1px);
}

.resource .card {
  padding: 1rem;
  border-radius: 0.25rem;
  transform: translateX(1.5rem) translateY(-1.5rem);
}

.resource .card .title {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.resource .card .body {
  font-size: 0.875rem;
  line-height: 1.625;
}

@media all and (min-width: 800px) {
  .resources {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  .resource {
    padding: 2.5rem;
  }
}

@media all and (min-width: 1024px) {
  .resources {
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
  }
}
</style>
