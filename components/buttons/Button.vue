<template>
  <div class="text-center" :style="styles">
    <button class="btn-all border rounded" @click="handleClick">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['title', 'handleCreateproduct', 'styles'],
  methods: {
    handleClick() {
      this.$emit('created')
      // this.$parent.handleClick()
    },
  },
}
</script>

<style scoped>
.btn-all {
  border: 0px;
  padding: 10px;
  width: fit-content;
  padding: 10px;
  box-shadow: 1px 1px 5px -2px grey;
}
</style>
