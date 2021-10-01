<template>
  <div class="d-flex flex-wrap container-fluid p-2">
    <div class="product-image text-center">
      <div>
        <Img url="https://picsum.photos/200" src="https://picsum.photos/200" />
      </div>
    </div>
    <div class="product-details">
      <div class="d-flex flex-row">
        <div
          v-for="color of data.merchandise[0].colors"
          v-bind:key="color"
          @click="handleSelectColor(color)"
          class="p-2 m-2 border width-30 height-30 cursor-pointer"
          :class="'bg-' + color"
        >
          <Icon
            style="font-size: 10px"
            type="fas"
            v-if="color === item.color"
            iconName="check"
            className="align-self-center text-light"
          />
        </div>
      </div>
      <div class="d-flex flex-row">
        <div
          v-for="size of data.merchandise[0].sizes"
          v-bind:key="size"
          @click="handleSelectSize(size)"
          class="p-3 m-2 border cursor-pointer"
          :class="[size === item.size && 'selected-item']"
        >
          <p class="m-0">{{ size }}</p>
        </div>
      </div>
      <div style="float: left">
        <Button title="Add to cart" />
      </div>
    </div>
    <div class="flex-column">
      <div class="rating">
        <h3>Rating</h3>
        <Rating :ratings="data.merchandise[0].ratings" />
      </div>
      <div class="description">
        <h3>Description</h3>
        <p class="m-0">
          {{ data.merchandise[0].description }}
        </p>
      </div>
      <div class="question-answers">
        <h3>Questins - Answers</h3>
        <div
          v-for="qa of data.merchandise[0].questions_answers"
          v-bind:key="qa"
          class="p-2"
        >
          <div>{{ qa.question }}</div>
          <div>{{ qa.answer }}</div>
          <div class="border-bottom" />
        </div>
      </div>
      <div class="reviews">
        <h3>Reviews</h3>
        <div
          v-for="review of data.merchandise[0].reviews"
          v-bind:key="review"
          class="p-2"
        >
          <div>{{ review.user }}</div>
          <div>{{ review.review }}</div>
          <div class="border-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../../../data/json'
import Button from '../../../components/buttons/Button.vue'
import { merchandiseMiddleware } from '../../../middleware/merchandise'

export default {
  components: { Button },
  layout: 'common',
  computed: {
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
    product() {
      return JSON.parse(JSON.stringify(this.$store.state.merchandise.product))
    },
  },
  data: () => {
    return {
      item: { color: '', size: '', id: '' },
      data: JSON.parse(JSON.stringify(data)),
    }
  },

  mounted() {
    this.getProduct()
    // console.log(this.$router.currentRoute)
    console.log(this.product)
  },
  methods: {
    getProduct() {
      merchandiseMiddleware.getProductById()
    },
    handleClick() {
      !this.auth.isLogin
        ? this.$router.replace('/login')
        : console.log(this.auth)
    },
    handleSelectColor(value) {
      this.item.color = value
    },
    handleSelectSize(value) {
      this.item.size = value
    },
  },
}
</script>

<style scoped>
.product-image {
  width: 50%;
}
.product-details {
  width: 50%;
}
.selected-item {
  background-color: grey;
  color: white;
}
</style>
