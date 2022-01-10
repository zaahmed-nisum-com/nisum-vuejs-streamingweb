<template>
  <div class="p-3">
    <div class="flex justify-center">
      <div class="bg-green flex px-2">
        <div class="self-center p-1">
          <Icon type="fas" className="w-20 text-light" iconName="filter" />
        </div>
      </div>
      <div>
        <input
          v-model="searchQuery"
          placeholder="Search by title, price"
          class="border border-opacity-25 focus:outline-none p-1 w-56 h-9"
        />
      </div>
      <div class="bg-green flex px-2">
        <div class="self-center p-1" v-on:click="handleSearch">
          <Icon type="fas" className="w-20  text-light" iconName="search" />
        </div>
      </div>
    </div>
    <div class="flex flex-row flex-wrap m-2">
      <div
        v-for="(item, index) of searchList"
        v-bind:key="index + 1"
        class="p-2 border border-opacity-50 m-2 rounded"
      >
        <div>
          <p class="text-xl">{{ item.title }}</p>
        </div>
        <img :src="item.picture" class="" />
        <div>
          <div class="d-flex flex-row">
            <div
              v-for="color of item.varients.colors"
              v-bind:key="color"
              class="p-2 m-2 border width-30 height-30 cursor-pointer"
              :class="'bg-' + color"
            />
          </div>
        </div>
        <div>
          <div class="d-flex flex-row">
            <div
              v-for="size of item.varients.sizes"
              v-bind:key="size"
              class="p-3 m-2 border cursor-pointer"
            >
              <p class="m-0">{{ size }}</p>
            </div>
          </div>
        </div>
        <div>
          <p>Price: {{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../../components/input/Input.vue'
import { searchMiddleware } from '../../middleware/search'
export default {
  components: { Input },
  data: () => {
    return {
      searchQuery: '',
    }
  },
  computed: {
    searchList() {
      return JSON.parse(JSON.stringify(this.$store.state.search.searchList))
    },
  },
  methods: {
    handleSearch() {
      searchMiddleware.searchProduct(this.searchQuery)
    },
  },
}
</script>

<style></style>
