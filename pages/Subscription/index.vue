<template>
  <div>
    <h2>Subscription Plan</h2>
    <div class="d-flex flex-wrap m-4 flex-row justify-content-center">
      <div
        class="m-2"
        v-for="(item, index) of subscriptionPlan"
        v-bind:key="index + 1"
      >
        <SubscriptionPanel :subscriptionPlan="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../../data/json'
import { subscriptionMiddleware } from '../../middleware/subscription'
import store from '../../store'
export default {
  layout: 'common',
  computed: {
    subscriptionPlan() {
      return JSON.parse(JSON.stringify(store().state.subscription.subscription))
    },
  },
  mounted() {
    this.handleFetchSubscription()
  },

  methods: {
    handleFetchSubscription() {
      subscriptionMiddleware.getSubscriptionPlans()
    },
  },
}
</script>

<style></style>
