<template>
  <div class="d-flex flex-row">
    <div
      v-for="(rating, index) of ratings"
      v-bind:key="rating"
      class="p-2 d-flex align-self-center"
    >
      <Icon
        style="font-size: 10px"
        type="fas"
        v-for="item of Array.from(Array(index + 1))"
        v-bind:key="item"
        className="align-self-center text-dark"
        iconName="star"
      />
      <span class="ml-1">{{ rating }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ratings'],
}
</script>

<style></style>
