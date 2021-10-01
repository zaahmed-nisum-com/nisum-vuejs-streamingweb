<template>
  <div class="card content-event-card" style="width: 18rem">
    <div class="card-body">
      <img
        @click="handleImageClick(content.trailerUrl)"
        :data-src="content.picture"
        class="lazy"
        src="https://picsum.photos/200"
        style="height: 100%; width: 100%"
      />
      <h5 class="card-title m-0 p-1">{{ content.title }}</h5>
      <div class="d-flex flex-row flex-wrap">
        <p
          class="d-flex m-1 p-1 border rounded"
          v-for="(actor, index) of content.actors"
          v-bind:key="index + 1"
        >
          {{ actor }}
        </p>
      </div>
      <div class="d-flex flex-row flex-wrap">
        <p
          class="d-flex m-1 p-1 border rounded"
          v-for="(director, index) of content.directors"
          v-bind:key="index + 1"
        >
          {{ director }}
        </p>
      </div>
      <div class="d-flex flex-row flex-wrap">
        <p
          class="d-flex m-1 p-1 border rounded"
          v-for="(category, index) of content.category"
          v-bind:key="index + 1"
        >
          {{ category }}
        </p>
      </div>
      <p class="card-text m-0 p-1">{{ content.intro }}</p>
      <p
        style="width: fit-content"
        class="d-flex m-1 p-1 border rounded text-white"
        :class="[content.isAdult ? 'bg-danger' : 'bg-success']"
      >
        {{ content.isAdult ? 'Adult' : 'non-Adult' }}
      </p>
      <div class="d-flex flex-wrap">
        <p class="m-0 cursor-pointer" @click="handleWatchMovie">Watch</p>
        <NuxtLink to="/merchandise"
          ><p class="m-0 ml-2 cursor-pointer">merchandise</p></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '../../utilities/helpers'
export default {
  props: ['content'],
  computed: {
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', helpers.imageLazyLoading)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', helpers.imageLazyLoading)
  },
  methods: {
    handleImageClick(url) {
      this.$parent.handleImageClick(url)
    },
    handleWatchMovie() {
      if (!this.auth.isLogin) {
        this.$router.push({ path: 'watch' })
      } else {
        this.$router.push({ path: 'login' })
      }
    },
  },
}
</script>

<style scoped>
.content-event-card {
  transition: 0.3s;
}
.content-event-card:hover {
  margin: 10px;
}
</style>
