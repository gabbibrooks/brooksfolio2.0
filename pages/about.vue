<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div class="lg:pr-8">
        <div>
          <div class="relative lg:mt-12">
            <cld-image
              class="flex object-cover w-full overflow-hidden rounded lg:h-64 lg:w-64"
              :public-id="src"
              crop="scale"
              fetchFormat="auto"
              quality="80"
              loading="lazy"
            >
              <cld-placeholder type="blur" />
            </cld-image>
          </div>
        </div>
      </div>
      <article class="col-span-3 mt-12 prose prose-lg lg:mt-0 lg:prose-xl">
        <nuxt-content :document="aboutpage" />
      </article>
    </div>
    <div
      class="grid grid-cols-1 mt-12 space-y-8 lg:mt-12 lg:grid-cols-2 lg:space-y-0"
    >
      <div>
        <h2 class="inline-flex items-center text-4xl text-primary">
          <fa class="w-8 h-8 mr-2" :icon="['fas', 'laptop-code']" size="xs" />
          Work History
        </h2>
        <div class="mt-4">
          <div class="space-y-8">
            <div
              class="flex"
              v-for="work in aboutpage.work_history"
              :key="work.company_name"
            >
              <div
                class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 bg-transparent border rounded-full border-inverse"
              ></div>
              <div class="flex flex-col ml-4 space-y-12">
                <div class="transition-all duration-100">
                  <small class="text-base text-secondary"
                    >{{ work.start_date }} - {{ work.end_date }}</small
                  >
                  <h3 class="text-2xl">
                    {{ work.position_title }}
                  </h3>
                  <a
                    target="_blank"
                    rel="noopener nofollow"
                    :href="work.company_url"
                    ><h4 class="text-xl text-initial">
                      {{ work.company_name }}
                    </h4></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="inline-flex items-center text-4xl text-primary">
          <fa
            class="w-8 h-8 mr-2"
            :icon="['fas', 'graduation-cap']"
            size="xs"
          />
          Education
        </h2>
        <div class="mt-4">
          <div
            class="flex"
            v-for="education in aboutpage.education"
            :key="education.subtitle"
          >
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 bg-transparent border rounded-full border-inverse"
            ></div>
            <div class="flex flex-col ml-4 space-y-12">
              <div class="transition-all duration-100">
                <small class="text-base text-secondary"
                  >{{ education.start_date }} - {{ education.end_date }}</small
                >
                <h3 class="text-2xl">
                  {{ education.title }}
                </h3>
                <h4 class="text-xl text-initial">
                  {{ education.subtitle }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCloudinaryId } from '~/utils/image'

export default {
  layout: 'content',
  async asyncData({ $content }) {
    const aboutpage = await $content('aboutpage').fetch()

    return {
      aboutpage
    }
  },
  head() {
    return {
      title: 'About - Zachary Brooks'
    }
  },
  computed: {
    src() {
      return getCloudinaryId(this.aboutpage.main_image)
    }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'About Me')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
