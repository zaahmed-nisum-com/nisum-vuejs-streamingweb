<template>
  <div class="subscription-options-container">
    <div class="p-3 border rounded">
      <div>
        <h2 class="text-center">{{ subscriptionPlan.title }}</h2>
        <p class="m-0">{{ subscriptionPlan.details }}</p>
      </div>
      <div class="">
        <h3 class="m-0 text-center">{{ subscriptionPlan.price }}</h3>
        <div
          class="d-flex flex-row m-2"
          v-for="(permissions, index) of Array('Read', 'Write', 'Download')"
          v-bind:key="index + 1"
        >
          <div class="border rounded p-1 pl-2 pr-2 mr-2">
            <Icon
              type="fas"
              v-if="
                isInclude(subscriptionPlan.permissions, permissions) === true
              "
              className="text-success"
              iconName="check"
            />
            <Icon
              type="fas"
              v-if="
                isInclude(subscriptionPlan.permissions, permissions) === false
              "
              className="text-danger"
              iconName="times"
            />
          </div>
          <p class="align-self-center m-0">{{ permissions }}</p>
        </div>
        <div>
          <p>
            T&C : Treams and conditions Treams and conditions Treams and
            conditions Treams and conditions
          </p>
        </div>
        <Button title="Buy" />
        <SelectPaymentOptions
          v-if="isPaymentOptionsPanelOpen"
          :paymentOptionsPanelStyle="paymentOptionsPanelStyle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../buttons/Button.vue'
export default {
  data: () => {
    return {
      isPaymentOptionsPanelOpen: false,
      paymentOptionsPanelStyle: `width: 200px;
              position: absolute;
              background-color: red;
              height: 200px;
              margin:-235px 0px;
        `,
    }
  },
  components: { Button },
  props: ['subscriptionPlan'],
  methods: {
    isInclude(array, value) {
      return array.includes(value)
    },
    togglePaymentOptionspanel(value) {
      this.isPaymentOptionsPanelOpen = !value
    },
    handleMouseEnter() {},
  },
}
</script>

<style></style>
