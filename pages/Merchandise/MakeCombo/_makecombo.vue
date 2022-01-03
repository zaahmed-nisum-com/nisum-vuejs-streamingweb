<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div v-for="item of this.products" v-bind:key="item.id">
        <div v-if="item.isComboProduct" class="merchandise-item m-4 p-2 border rounded">
          <!-- <nuxt-link :to="{ path: 'merchandies/pdp/', query: { data: item } }"> -->
          <Img
            @click="
              $router.push({
                path: `/merchandise/pdp`,
                query: { id: item.id },
              })
            "
            url="https://picsum.photos/200"
            src="https://picsum.photos/200"
          />
          <!-- </nuxt-link> -->
          <div>
            <p class="m-0">
              Title: <span>{{ item.title }}</span>
            </p>
            <p class="m-0">
              Price: <span>{{ item.price }}</span>
            </p>
            <div class="d-flex flex-row">
              <div
                v-for="color of item.colors"
                v-bind:key="color"
                class="p-2 m-2 border"
                :class="'bg-' + color"
              ></div>
            </div>
            <div class="d-flex flex-row">
              <div
                v-for="size of item.sizes"
                v-bind:key="size"
                class="p-2 m-2 border rounded"
              >
                <p class="m-0">{{ size }}</p>
              </div>
            </div>
          </div>
          <div class="my-2">
            <p class="p-2 border border-opacity-25 w-fit rounded" v-if="item.isComboProduct">Combo Product</p>
          </div>
          <div>
            <Button title="View Details" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../../components/buttons/Button.vue'
import { merchandiseMiddleware } from '../../../middleware/merchandise'

export default {
  layout: 'common',
  components: { Button },
  computed: {
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
    products() {
      return JSON.parse(JSON.stringify(this.$store.state.merchandise.products))
    },
  },
  mounted() {
    this.getProductsByMerchandiseId()
  },
  methods: {
    getProductsByMerchandiseId() {
      merchandiseMiddleware.getAllProductByUserAndMerchandiseId()
    },
    handleClick() {},
  },
}
</script>

<style></style>
