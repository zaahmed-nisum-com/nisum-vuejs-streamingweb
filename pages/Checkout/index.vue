<template>
  <div class="container-fluid">
    <h2>cart/checkout</h2>
    <div>
      <h4>Your Cart</h4>
    </div>
    <div>
      <div v-for="(item, index) of data.cart.items" v-bind:key="index + 1">
        <div>
          <p>{{ item.productId }}</p>
          <div v-for="(varient, index) of item.varients" v-bind:key="index + 1">
            <img style="width: 30px; height: 30px" :src="varient.picture" />
          </div>
        </div>
        <div class="border-bottom" />
      </div>
    </div>
    <div style="width: fit-content" class="text-center float-right">
      <h3>Payment options</h3>
      <div>
        <div class="border rounded cursor-pointer">
          <p class="m-0 p-2">Pay with Paypal</p>
        </div>
        <h6>OR</h6>
        <div
          class="border rounded cursor-pointer"
          @click="handleStripePanel(isOpenStripe)"
        >
          <p class="m-0 p-2">Pay with Credit Card</p>
        </div>
        <h6>OR</h6>
        <div
          class="border rounded cursor-pointer"
          @click="handleCODPanel(isOpenCOD)"
        >
          <p class="m-0 p-2">Cash on delivery</p>
        </div>
        <CashOnDelivery :isOpen="isOpenCOD" />
        <Stripe :isOpen="isOpenStripe" />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../../data/json'
export default {
  data: () => {
    return {
      data: JSON.parse(JSON.stringify(data)),
      isOpenCOD: false,
      isOpenStripe: false,
    }
  },
  mounted() {
    console.log(data.cart)
  },
  methods: {
    handleCODPanel(value) {
      //place order
      this.isOpenCOD = !value
    },
    handleCloseCODPanel(value) {
      this.isOpenCOD = !value
    },

    handleStripePanel(value) {
      //place order
      this.isOpenCOD = !value
    },
    handleCloseStripePanel(value) {
      this.isOpenCOD = !value
    },
  },
}
</script>

<style></style>
