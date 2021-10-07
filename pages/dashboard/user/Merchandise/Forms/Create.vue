<template>
  <div class="container-fluid">
    <h2>Create product</h2>
    <Input
      labelClass="text-dark"
      label="Title"
      :value="title"
      id="Title"
      v-model="title"
      type="text"
      placeholder="Title"
    />
    <Input
      labelClass="text-dark"
      label="Price"
      :value="price"
      id="price"
      v-model="price"
      type="number"
      placeholder="price"
    />
    <div class="d-flex flex-column">
      <Input
        labelClass="text-dark"
        label="Color"
        :value="color"
        id="color"
        v-model="color"
        type="text"
        placeholder="color"
      />
      <Button title="Add color" />
      <div></div>
    </div>
    <div class="d-flex flex-column">
      <Input
        labelClass="text-dark"
        label="Size"
        :value="size"
        id="size"
        v-model="size"
        type="text"
        placeholder="size"
      />
      <Button title="Add color" />
      <div></div>
    </div>
    <Button title="Create" />
  </div>
</template>

<script>
import Button from '../../../../../components/buttons/Button.vue'
export default {
  components: {
    Button,
  },
  data: {
    title: '',
    price: '',
    colors: [],
    sizes: [],
    size: '',
    color: '',
  },
}
</script>

<style></style>
