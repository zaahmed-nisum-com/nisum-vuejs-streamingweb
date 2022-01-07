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
