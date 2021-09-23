<template>
  <div>
    <h2>watch</h2>
    <div class="watch-video-container">
      <div class="video-player-container" style="height: 400px">
        <YoutubePlayer :videoUrl="videoUrl" />
      </div>
      <div class="back-btn"></div>
    </div>
  </div>
</template>

<script>
import YoutubePlayer from '../../components/youtubeplayer/YoutubePlayer.vue'
export default {
  components: {
    YoutubePlayer,
  },
  data() {
    return {
      videoUrl: 'https://www.youtube.com/watch?v=djNIgVy6WzQ',
    }
  },
}
</script>

<style scoped></style>
