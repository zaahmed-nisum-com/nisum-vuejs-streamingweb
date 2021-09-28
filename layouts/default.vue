<template>
  <div>
    <div
      v-if="error.isOpen"
      class="border rounded p-3"
      style="position: absolute; bottom: 20px; left: 15px"
    >
      <div>
        <p class="m-0">{{ error.message }}</p>
      </div>
    </div>
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
  updated() {
    console.log('update')
    if (this.error.isOpen) {
      setTimeout(() => {
        this.$store.commit('common/errorMessage', {
          message: '',
          isOpen: false,
        })
      }, 5000)
    }
  },
}
</script>

<style></style>
