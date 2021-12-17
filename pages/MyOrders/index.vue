<template>
  <div class="container-myorder">
    <h2 class="text-3xl">My Orders</h2>
    <div
      class="p-2"
      v-for="(item, index) of this.myOrders"
      v-bind:key="index + 1"
    >
      <div class="border-bottom  border-black" v-if="index > 0" />
      <p>Order id: {{ item.id }}</p>
      <div
        class="p-2 d-flex"
        v-for="(item_, index_) of Object.keys(item.orderItem)"
        v-bind:key="index_ + 1"
      >
        <div>
          <img :src="item.orderItem[item_].product.picture" />
        </div>
        <div class="p-2">
          <p class="p-0 m-1">
            Title: {{ item.orderItem[item_].product.title }}
          </p>
          <p class="p-0 m-1">
            Description: {{ item.orderItem[item_].product.description }}
          </p>
          <p class="p-0 m-1">Color: {{ item_.split('-')[0] }}</p>
          <p class="p-0 m-1">Size: {{ item_.split('-')[1] }}</p>
          <p class="p-0 m-1">Date: {{ new Date(item.createdDate) }}</p>
        </div>
      </div>

      <div
        class="border-bottom"
        v-if="
          index > 0 &&
          new Date(item.createdDate).getDate() !==
            new Date(myOrders[index - 1]).getDate()
        "
      />
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  layout: 'common',
  computed: {
    myOrders() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout.orders))
    },
  },
}
</script>

<style></style>
