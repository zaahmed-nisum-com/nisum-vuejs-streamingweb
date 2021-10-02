<template>
  <div>
    <div class="video-player-container ml-4 mr-4 mt-4" style="height: 400px">
      <YoutubePlayer :videoUrl="videoUrl" />
    </div>
    <div
      class="
        content-containter
        d-flex
        flex-row flex-wrap
        justify-content-center
        m-1
      "
    >
      <div v-for="(item, index) of browse" v-bind:key="index + 1" class="m-2">
        <ContentEventCard :content="item" />
      </div>
    </div>
  </div>
</template>

<script>
import YoutubePlayer from '../components/youtubeplayer/YoutubePlayer.vue'
import { data } from '../data/json'

export default {
  layout: 'common',
  data() {
    return {
      browse: data.browser,
      videoUrl: '',
    }
  },
  mounted() {
    this.videoUrl = data.browser[0].trailerUrl
  },
  components: {
    YoutubePlayer,
  },
  computed: {},
  methods: {
    handlePlayTariler(url) {
      this.videoUrl = url
    },
    handleImageClick(url) {
      this.handlePlayTariler(url)
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
