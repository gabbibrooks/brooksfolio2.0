<template>
  <div class="video-card [ bg-secondary ]">
    <div class="content">
      <div class="video">
        <lite-youtube
          :videoid="speakingEngagement.videoId"
          :playlabel="playLabel"
          :params="params"
        />
      </div>
      <div class="[ body ] [ text-primary ]">
        <div class="tags">
          <span
            v-for="(tag, i) in speakingEngagement.tags"
            :key="i"
            class="tag [ bg-primary ]"
            >{{ tag }}</span
          >
        </div>
        <h2 class="[ title ] [ color-primary ]">
          {{ speakingEngagement.title }}
        </h2>
        <nuxt-content :document="speakingEngagement" />
      </div>
      <div class="event">
        <div class="[ info ] [ text-secondary ]">
          <div>{{ date }}</div>
          <div>{{ speakingEngagement.event_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/utils/date'

export default {
  props: {
    speakingEngagement: Object,
  },
  computed: {
    playLabel() {
      return `Play: ${this.speakingEngagement.title}`
    },
    params() {
      let start = this.speakingEngagement.start || 0
      return `start=${start}&modestbranding=2&rel=0&enablejsapi=1`
    },
    date() {
      return formatDate(this.speakingEngagement.date)
    },
  },
}
</script>

<style scoped>
.video-card {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 0.25rem;
  box-shadow: 0 0 4rem -2rem rgba(0, 0, 0, 0.4);
}

.video-card .content {
  width: 100%;
}

.video-card .content .video {
  width: 100%;
  height: 100%;
}

.video-card .content .body {
  flex: 1 1 0%;
  padding: 1rem;
}

.video-card .body .title {
  font-size: 1.35rem;
  font-weight: 500;
}

.video-card .body .tags {
  margin-bottom: 0.25rem;
}

.video-card .body .tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.video-card .content .event {
  display: flex;
  align-items: center;
}

.video-card .content .event .info {
  padding: 0.75rem;
}

@media all and (min-width: 1024px) {
  .video-card {
    flex-direction: row;
  }

  .video-card .content {
    display: flex;
  }

  .video-card .content .video {
    width: 475px;
  }
}
</style>
