<template>
  <div>
    <h2>User dashbboard</h2>
    <div class="d-flex flex-wrap flex-row">
      <div
        class="p-2 border rounded m-2 cursor-pointer"
        v-for="(item, index) of data.userDashboardOptions"
        v-bind:key="index + 1"
      >
        <div class="text-center">
          <Icon
            type="fas"
            :iconName="item.icon"
            className="text-center "
            styles="width: 30px; height: 30px"
          />
        </div>
        <h5>{{ item.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '../../../data/json'
export default {
  data() {
    return {
      data,
    }
  },
}
</script>

<style></style>
