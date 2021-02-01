<template>
  <div>
    <ol
      class="grid grid-cols-1 gap-32 ml-0 list-none lg:gap-12 lg:grid-cols-projects"
    >
      <li
        clss="flex flex-col"
        v-for="speakingEngagement in speakingEngagements"
        :key="speakingEngagement.title"
      >
        <video-card :videoUrl="speakingEngagement.link" />
        <div
          class="flex flex-col w-full p-4 my-4 border-2 rounded max-w-screen md:max-w-screen-1/2 border-primary text-primary"
        >
          <h2 class="text-2xl text-initial">
            {{ speakingEngagement.title }}
          </h2>
          <div class="py-2 text-secondary">
            {{ speakingEngagement.event_name }}
          </div>
          <nuxt-content :document="speakingEngagement" />
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import VideoCard from '~/components/VideoCard'

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
  components: {
    VideoCard
  },
  mounted() {
    this.$store.dispatch('setPageHeader', 'Speaking')
    this.$store.dispatch('setPageSubheader', '')
    this.$store.dispatch('setPageHeaderPosition', 'center')
  }
}
</script>

<style></style>
