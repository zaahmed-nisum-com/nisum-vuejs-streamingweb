<template>
  <div>
    <portal-target
      v-if="this.error.isOpen"
      class="border rounded p-3"
      style="position: absolute; bottom: 20px; left: 15px"
    >
      <div>
        <p class="m-0">{{ this.error.message }}</p>
      </div>
    </portal-target>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return JSON.parse(JSON.stringify(this.$store.state.common.error))
    },
  },
  mounted() {},
}
</script>

<style></style>
