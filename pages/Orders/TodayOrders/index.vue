<template>
  <div class="p-2">
    <p class="text-2xl">Today Orders</p>
    <p v-if="this.todayOrders.length <= 0">No order Today</p>
    <div v-if="this.todayOrders.length > 0">
      <div
        v-for="(item, index) in this.todayOrders"
        v-bind:key="index + 1"
        class="m-2 border rounded"
      >
        <p class="p-2">OrderId : {{ item._id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'common',
  data() {
    return {
      todayOrders: [],
    }
  },
  mounted() {
    this.getTodayAllOrder()
  },
  watch: {
    // todayOrders() {},
  },
  methods: {
    async getTodayAllOrder() {
      console.log('getTodayAllOrder')
      try {
        const response = await fetch('https://streaming-app-server.herokuapp.com/order/today/all', {
          method: 'GET',
        })
        const res = await response.json()
        this.todayOrders = res.data[0].orders
      } catch (error) {}
    },
  },
}
</script>

<style></style>
