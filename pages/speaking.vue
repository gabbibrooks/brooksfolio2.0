<template>
  <div>
    <ol class="lg:grid-cols-3 grid grid-cols-1 gap-20 ml-0 list-none">
      <li
        clss="flex flex-col"
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <a
          :href="speakingEngagement.link"
          class="border-primary-muted hover:border-primary no-external-link md:flex-row max-w-screen md:max-w-full text-primary flex flex-col w-full h-full border-b-2 border-l-2 rounded-bl"
          rel="noreferrer"
          target="_blank"
        >
          <div class="p-4">
            <h2 class="text-initial text-2xl">
              {{ speakingEngagement.title }}
            </h2>
            <div class="text-secondary py-2">
              {{ speakingEngagement.event_name }}
            </div>
            <nuxt-content :document="speakingEngagement" />
          </div>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  layout: 'content',
  async asyncData({ $content }) {
    const speakingEngagements = await $content('speaking')
      .sortBy('date', 'desc')
      .fetch()

    return {
      speakingEngagements
    }
  },
  head() {
    return {
      title: 'Speaking - Zachary Brooks'
    }
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Speaking')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
