<template>
  <div class="p-2 border rounded" :style="this.paymentOptionsPanelStyle"></div>
</template>

<script>
export default {
  props: ['paymentOptionsPanelStyle'],
  methods: {
    loog() {
      return null
    },
  },
  mounted() {
    this.loog()
  },
}
</script>

<style></style>
