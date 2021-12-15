<template>
  <div class="d-flex flex-row border rounded" style="width: fit-content">
    <div class="p-2 s" style="cursor: pointer" @click="handleAdd">+</div>
    <div class="p-1 pl-2 pr-2 align-self-center border rounded">
      {{ counter }}
    </div>
    <div class="p-2 s" style="cursor: pointer" @click="handleSub">-</div>
  </div>
</template>

<script>
export default {
  props: ['counter'],
  mounted() {
  },
  methods: {
    handleAdd() {
      this.$emit('handleAddProduct')
    },
    handleSub() {
      this.counter > 0 && this.$emit('handleSubProduct')
    },
  },
}
</script>

<style></style>
