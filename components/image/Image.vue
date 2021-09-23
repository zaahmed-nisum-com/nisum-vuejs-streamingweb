<template>
  <img :src="src" :data-src="url" :style="style" />
</template>

<script>
export default {
  props: ['url', 'src', 'style'],
}
</script>

<style></style>
