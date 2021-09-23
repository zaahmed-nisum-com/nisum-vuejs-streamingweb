<template>
  <div>
    <h2>Subscription Plan</h2>
    <div class="d-flex flex-row justify-content-center">
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
export default {
  layout: 'common',
  data: () => {
    return {
      subscriptionPlan: JSON.parse(JSON.stringify(data.subscriptionPlans)),
    }
  },
}
</script>

<style></style>
