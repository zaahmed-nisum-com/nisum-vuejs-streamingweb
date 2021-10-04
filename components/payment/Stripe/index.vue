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
            :pk="keys.NUXT_ENV_STRIPE_KEY"
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
import keys from '../../../configurations/keys'

export default {
  components: {
    StripeElementCard,
  },
  data() {
    return {
      keys,
    }
  },
  props: ['isOpen'],
  methods: {
    tokenCreated(token) {
      console.log(token)
    },
    handleClick() {
      this.$parent.handleStripePanel(!this.isOpen)
    },
    handleClose() {
      this.$parent.handleCloseStripePanel(this.isOpen)
    },
  },
}
</script>

<style></style>
