<template>
  <div class="container-fluid mt-2 mb-2">
    <h2>cart/checkout</h2>
    <div>
      <h4>Your Cart</h4>
    </div>
    <div>
      <div v-for="(item, index) of data.cart.items" v-bind:key="index + 1">
        <div>
          <p>{{ item.productId }}</p>
          <div v-for="(varient, index) of item.varients" v-bind:key="index + 1">
            <div class="d-flex">
              <Img
                style="width: 100px; height: 100px"
                :url="varient.picture"
                :src="varient.picture"
              />
              <div class="p-2">
                <p class="m-0">
                  Detials : <span>{{ varient.description }}</span>
                </p>
                <p class="m-0">
                  Price : <span>{{ varient.price }}</span>
                </p>
                <p class="m-0">
                  <span class=""> Size : {{ varient.details.size }}</span>
                  <span class="">color : {{ varient.details.color }}</span>
                </p>
                <Merchandisecounter />
                <p class="m-0 cursor-pointer"><ins>Update</ins></p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-bottom" />
      </div>
    </div>
    <div style="width: fit-content" class="flex-grow-1 text-center">
      <h3>Payment options</h3>
      <div>
        <PayPal
          amount="10.00"
          currency="USD"
          :clent="credentials"
          evn="sandbox"
          :button-style="styles"
        />
        <!-- <div class="border rounded cursor-pointer">
          <p class="m-0 p-2">Pay with Paypal</p>
        </div> -->
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
import keys from '../../configurations/keys'
import { data } from '../../data/json'
import PayPal from 'vue-paypal-checkout'
export default {
  layout: 'common',
  components: {
    PayPal,
  },
  data: () => {
    return {
      data: JSON.parse(JSON.stringify(data)),
      isOpenCOD: false,
      isOpenStripe: false,
      credentials: {
        sandbox: keys.NUXT_ENV_PAYPAL_KEY,
      },
      styles: {
        label: 'checkout',
        size: 'responsive',
        shape: 'pill',
        color: 'gold',
      },
    }
  },
  mounted() {},
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
      this.isOpenStripe = !value
    },
    handleCloseStripePanel(value) {
      this.isOpenStripe = !value
    },
  },
}
</script>

<style></style>
