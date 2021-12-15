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
          v-for="color of product.colors"
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
          v-for="size of product.sizes"
          v-bind:key="size"
          @click="handleSelectSize(size)"
          class="p-3 m-2 border cursor-pointer"
          :class="[size === item.size && 'selected-item']"
        >
          <p class="m-0">{{ size }}</p>
        </div>
      </div>
      <div style="float: left">
        <Button title="Add to cart" @created="handleClick" />
      </div>
    </div>
    <div class="flex-column">
      <div class="rating">
        <h3>Rating</h3>
        <Rating :ratings="product.ratings" />
      </div>
      <div class="description">
        <h3>Description</h3>
        <p class="m-0">
          {{ product.description }}
        </p>
      </div>
      <div class="question-answers">
        <h3>Questins - Answers</h3>
        <div
          v-for="qa of product.questions_answers"
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
        <div v-for="review of product.reviews" v-bind:key="review" class="p-2">
          <div>{{ review.user }}</div>
          <div>{{ review.review }}</div>
          <div class="border-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../../components/buttons/Button.vue'
import { merchandiseMiddleware } from '../../../middleware/merchandise'
import store from '../../../store'

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
    cart() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout.cart))
    },
  },
  data: () => {
    return {
      item: { color: '', size: '', id: '' },
    }
  },

  mounted() {
    this.item.id = this.$route.query.id
    this.getProduct()
  },
  updated(){
    console.log(this.cart)
  },
  methods: {
    getProduct() {
      merchandiseMiddleware.getSingleProductById({ id: this.item.id })
    },
    handleClick() {
      console.log(this.auth.isLogin)
      if (!this.auth.isLogin) {
        this.$router.replace('/login')
      } else {
        store().commit('cart_checkout/addToCart', {
          ...this.item,
          product: this.product,
          itemId: this.item.color + this.item.size + this.item.id,
        })
      }
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
