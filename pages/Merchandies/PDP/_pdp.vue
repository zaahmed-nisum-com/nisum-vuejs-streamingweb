<template>
  <div class="d-flex flex-wrap container-fluid p-2">
    <div class="product-image text-center">
      <div>
        <img
          data-src="https://picsum.photos/200"
          src="https://picsum.photos/200"
        />
      </div>
    </div>
    <div class="product-details">
      <div class="d-flex flex-row">
        <div
          v-for="color of data.marchandies[0].colors"
          v-bind:key="color"
          @click="handleSelectColor(color)"
          class="p-2 m-2 border width-30 height-30 cursor-pointer"
          :class="'bg-' + color"
        >
          <font-awesome-icon
            v-if="color === item.color"
            class="align-self-center text-light"
            :icon="['fas', 'check']"
          />
        </div>
      </div>
      <div class="d-flex flex-row">
        <div
          v-for="size of data.marchandies[0].sizes"
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
        <div class="d-flex flex-row">
          <div
            v-for="(rating, index) of data.marchandies[0].ratings"
            v-bind:key="rating"
            class="p-2 d-flex align-self-center"
          >
            <font-awesome-icon
              v-for="item of Array.from(Array(index + 1))"
              v-bind:key="item"
              class="align-self-center text-dark"
              :icon="['fas', 'star']"
            />
            <span class="ml-1">{{ rating }}</span>
          </div>
        </div>
      </div>
      <div class="description">
        <h3>Description</h3>
        <p class="m-0">
          {{ data.marchandies[0].description }}
        </p>
      </div>
      <div class="question-answers">
        <h3>Questins - Answers</h3>
        <div
          v-for="qa of data.marchandies[0].questions_answers"
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
          v-for="review of data.marchandies[0].reviews"
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
export default {
  components: { Button },
  layout: 'common',
  data: () => {
    return {
      item: { color: '', size: '', id: '' },
      data: JSON.parse(JSON.stringify(data)),
    }
  },

  mounted() {
    console.log(this.data.marchandies)
  },
  methods: {
    handleClick() {},
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
