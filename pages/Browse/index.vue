<template>
  <div>
    <h2>Browse</h2>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div class="m-2" v-for="(item, index) of contents" v-bind:key="index + 1">
        <ContentEventCard :content="item" />
      </div>
    </div>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import { data } from '../../data/json'
export default {
  layout: 'common',
  data: () => {
    return {
      contents: data.browser,
    }
  },
}
</script>

<style scoped></style>
