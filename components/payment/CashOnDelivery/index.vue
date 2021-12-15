<template>
  <div
    class="modal fade"
    :class="isOpen && 'show'"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    :style="[isOpen ? { display: 'block' } : { display: 'none' }]"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <font-awesome-icon
            @click="handleClose"
            class="text-dark"
            :icon="['fas', 'times-circle']"
          />
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              v-model="fullName"
              class="form-control"
              placeholder="Full Name"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="email"
              v-model="email"
              class="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              v-model="phoneNo"
              class="form-control"
              placeholder="Phone no"
              aria-label="Phone no"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              v-model="pinLocationUrl"
              class="form-control"
              placeholder="Phone no"
              aria-label="Phone no"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <textarea
              type="text"
              v-model="address"
              class="form-control"
              placeholder="Address"
              aria-label="address"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="handleClose"
          >
            Close
          </button>
          <button @click="handleClick" type="button" class="btn btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../store'
export default {
  props: ['isOpen'],
  data() {
    return {
      fullName: '',
      email: '',
      phoneNo: '',
      address: '',
      pinLocationUrl: '',
    }
  },
  computed: {
    cart() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout.cart))
    },
  },
  methods: {
    handleClick() {
      const data = {
        fullName: this.fullName,
        email: this.email,
        phoneNo: this.phoneNo,
        address: this.address,
        pinLocationUrl: this.pinLocationUrl,
        orderCart:{...this.cart},
        router: this.$router
      }
      store().commit('cart_checkout/placeOrder', data)
      // this.$parent.handleCODPanel(this.isOpen)
    },
    //close panel
    handleClose() {
      this.$parent.handleCloseCODPanel(this.isOpen)
    },
  },
}
</script>

<style></style>
