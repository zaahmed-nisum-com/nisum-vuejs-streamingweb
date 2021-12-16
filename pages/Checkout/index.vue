<template>
  <div class="container-fluid mt-2 mb-2">
    <h2>cart/checkout</h2>
    <div>
      <h4>Your Cart</h4>
    </div>
    <div>
      <!-- <div v-for="(cart, index) in data_" v-bind:key="index + 1">
        <div>
          <p>{{ cart }}</p>
        </div>
      </div> -->
      <p>{{ cart }}</p>
      {{ data_ }}
      <div
        v-for="(item, index) in this.data_"
        v-bind:key="index + item.itemId + 1"
      >
        <div>
          <p>{{ item.itemId }}</p>
          <div>
            <Img
              style="width: 100px; height: 100px"
              :url="item.product.picture"
              :src="item.product.picture"
            />
            <div class="p-2">
              <p class="m-0">
                Detials : <span>{{ item.product.description }}</span>
              </p>
              <p class="m-0">
                Price : <span>{{ item.product.price }}</span>
              </p>
              <p class="m-0">
                <span class=""> Size : {{ item.size }}</span>
                <span class="">color : {{ item.color }}</span>
              </p>
              <Merchandisecounter
                v-bind:counter="item.count"
                @handleSubProduct="handleSubProduct(item.itemId)"
                @handleAddProduct="handleAddProduct(item.itemId)"
              />
              <p
                class="m-0 cursor-pointer"
                @click="handleUpdateCart(item.itemId)"
              >
                <ins>Update</ins>
              </p>
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
          :client="credentials"
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
    <!-- {{ data_ }} -->
  </div>
</template>

<script>
import keys from '../../configurations/keys'
// import { data } from '../../data/json'
import PayPal from 'vue-paypal-checkout'
import store from '../../store'

export default {
  layout: 'common',
  components: {
    PayPal,
  },
  data() {
    return {
      data_: [],
      // data: JSON.parse(JSON.stringify(data)),
      isOpenCOD: false,
      isOpenStripe: false,
      credentials: {
        sandbox: keys.NUXT_ENV_PAYPAL_KEY,
        production: keys.NUXT_ENV_PAYPAL_KEY,
      },
      styles: {
        label: 'checkout',
        size: 'responsive',
        shape: 'pill',
        color: 'gold',
      },
    }
  },
  computed: {
    cart_checkout() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout))
    },
    cart() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout.cart))
    },
  },
  mounted() {
    this.data_ = this.cart
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
      this.isOpenStripe = !value
    },
    handleCloseStripePanel(value) {
      this.isOpenStripe = !value
    },
    handleAddProduct(id) {
      this.data_[id].count++
    },
    handleSubProduct(id) {
      this.data_[id].count--
    },
    handleUpdateCart(id) {
      // console.log(id)
      if (this.data_[id].count === 0) {
        delete this.data_[id]
      }
      store().commit('cart_checkout/updateCart', this.data_)
    },
  },
}
</script>

<style></style>
