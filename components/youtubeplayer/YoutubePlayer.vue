<template>
  <div class="youtube-player">
    <youtube
      player-width="100%"
      player-height="100%"
      style="width:100% width:100%"
      :video-id="myFunction(videoUrl)"
      ref="youtube"
      @playing="playing"
    />
  </div>
</template>

<script>
import { getIdFromUrl } from 'vue-youtube'
export default {
  props: ['videoUrl'],
  methods: {
    myFunction(url) {
      window.scrollTo(0, 0)
      return getIdFromUrl(url)
    },
  },
}
</script>

<style scoped>
.youtube-player {
  height: 100%;
  width: 100%;
}
.youtube-player > div {
  height: 100%;
  width: 100%;
}
</style>
