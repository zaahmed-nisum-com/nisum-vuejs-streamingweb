<template>
  <div>
    <div
      v-if="this.error.isOpen"
      class="border rounded"
      style="position: absolute; padding: 2px; bottom: 20px; left: 15px"
    >
      <div>
        <p>{{ this.error.message }}</p>
      </div>
    </div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return JSON.parse(JSON.stringify(this.$store.state.common.error))
    },
  },
}
</script>

<style></style>
