<template>
  <div style="height: 100vh">
    <div class="watch-screen-back-btn">
      <font-awesome-icon
        @click="handleBack"
        class="text-light"
        style="
          width: 50px;
          box-shadow: 1px 1px 6px 0px rgb(86 86 86);
          height: 50px;
          position: absolute;
          background-color: rgb(0, 131, 208);
          border-radius: 50px;
          padding: 5px;
          margin: 5px;
        "
        :icon="['fas', 'chevron-left']"
      />
    </div>
    <div class="watch-video-container">
      <div class="video-player-container" style="height: 100vh">
        <YoutubePlayer :videoUrl="videoUrl" />
      </div>
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
