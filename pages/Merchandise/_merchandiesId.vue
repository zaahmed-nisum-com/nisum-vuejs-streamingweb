<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div v-for="item of this.data.merchandise" v-bind:key="item.id">
        <div class="merchandise-item m-4 border rounded">
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
                class="p-2 m-2 border"
              >
                <p class="m-0">{{ size }}</p>
              </div>
            </div>
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
import { data } from '../../data/json'
import Button from '../../components/buttons/Button.vue'
import { merchandiseMiddleware } from '../../middleware/merchandise'

export default {
  layout: 'common',
  components: { Button },
  computed: {
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
    merchandise() {
      return JSON.parse(
        JSON.stringify(this.$store.state.merchandise.merchandise)
      )
    },
  },
  data: () => {
    return {
      data: JSON.parse(JSON.stringify(data)),
    }
  },
  mounted() {
    this.getMerchandies()
    console.log(this.merchandise)
  },
  methods: {
    getMerchandies() {
      merchandiseMiddleware.getAllMerchandiseById()
    },
    handleClick() {},
  },
}
</script>

<style scoped>
.merchandise-item {
  padding: 10px;
}
</style>
