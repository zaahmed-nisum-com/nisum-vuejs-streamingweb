<template>
  <div class="order-tracking-container">
    <div class="max-w-lg m-auto p-2">
      <Input
        label="Tracking Id"
        v-model="trackingId"
        id="trackingId"
        labelClass="text-white"
        type="text"
        placeholder="tracking Id"
      />
      <Button title="Register" @created="handleClick" />
    </div>
  </div>
</template>

<script>
import { data } from '../../data/json'
import Button from '../../components/buttons/Button.vue'
export default {
  layout: 'common',
  components: {
    Button,
  },
  data() {
    return {
      trackingOrder: {},
      trackingId: '',
    }
  },
  mounted() {
    console.log(data)
  },

  methods: {
    handleClick() {
      this.$store.getters('tacking/getOrderTracking', trackingId)
    },
  },
}
</script>

<style></style>
