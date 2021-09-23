<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div v-for="item of this.data.marchandies" v-bind:key="item.id">
        <div class="merchandies-item m-4 border rounded">
          <NuxtLink to="merchandies/pdp/">
            <div>
              <img
                data-src="https://picsum.photos/200"
                src="https://picsum.photos/200"
              />
            </div>
          </NuxtLink>
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
            <!-- <Merchandiesecounter /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../../data/json'
import Button from '../../components/buttons/Button.vue'

export default {
  layout: 'common',
  components: { Button },
  data: () => {
    return {
      data: JSON.parse(JSON.stringify(data)),
    }
  },
  mounted() {
    console.log(this.data.marchandies)
  },
  methods: {
    handleClick() {},
  },
}
</script>

<style scoped>
.merchandies-item {
  padding: 10px;
}
</style>
