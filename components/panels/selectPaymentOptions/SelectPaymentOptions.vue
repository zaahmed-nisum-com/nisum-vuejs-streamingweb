<template>
  <div class="p-2 border rounded" :style="this.paymentOptionsPanelStyle"></div>
</template>

<script>
export default {
  props: ['paymentOptionsPanelStyle'],
  methods: {
    loog() {
      return null
      //   console.log(paymentOptionsPanelStyle)
    },
  },
  mounted() {
    console.log(this.paymentOptionsPanelStyle)
    console.log(typeof this.paymentOptionsPanelStyle)
    this.loog()
  },
}
</script>

<style></style>
