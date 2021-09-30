<template>
  <div
    class="modal fade"
    :class="isOpen && 'show'"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    aria-modal="true"
    role="dialog"
    :style="[isOpen ? { display: 'block' } : { display: 'none' }]"
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
          <stripe-element-card
            ref="elementRef"
            pk="pk_test_51I2Ld6FOGza3SEPu4AqpMnsf89hGHePPcRb2S43OsaUKw8BizAeeTKhv7VV9MlmI6UxJcMjJm1eaIKe3MhLlbZ1O008QX074mG"
            @token="tokenCreated"
          />
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
import { StripeElementCard } from '@vue-stripe/vue-stripe'

export default {
  components: {
    StripeElementCard,
  },
  props: ['isOpen'],
  methods: {
    tokenCreated(token) {
      console.log(token)
      // handle the token
      // send it to your server
    },
    handleClick() {
      this.$parent.handleStripePanel(!this.isOpen)
    },
    //close panel
    handleClose() {
      this.$parent.handleCloseStripePanel(this.isOpen)
    },
  },
}
</script>

<style></style>
