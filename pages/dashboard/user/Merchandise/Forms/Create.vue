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
      <div class="d-flex flex-row">
        <Input
          labelClass="text-dark"
          label="Color"
          :value="color"
          id="color"
          v-model="color"
          type="text"
          placeholder="color"
        />
        <Button
          title="Add color"
          styles="margin: 25px 5px"
          @created="handleAddColor"
        />
      </div>
      <div class="d-flex flex-row">
        <div
          class="border rounded m-1"
          v-for="(itm, ind) of this.colors"
          v-bind:key="ind + 1"
        >
          <p class="m-2">{{ itm }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
        <Input
          labelClass="text-dark"
          label="Size"
          :value="size"
          id="size"
          v-model="size"
          type="text"
          placeholder="size"
        />
        <Button
          title="Add size"
          @created="handleAddSize"
          styles="margin: 25px 5px"
        />
      </div>
      <div class="d-flex flex-row">
        <div
          class="border rounded m-1"
          v-for="(itm, ind) of this.sizes"
          v-bind:key="ind + 1"
        >
          <p class="m-2">{{ itm }}</p>
        </div>
      </div>
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
  data() {
    return {
      title: '',
      price: '',
      colors: [],
      sizes: [],
      size: '',
      color: '',
    }
  },
  methods: {
    handleAddColor() {
      if (!this.colors.includes(this.color)) {
        this.colors.push(this.color)
        this.color = ''
      }
    },
    handleAddSize() {
      if (!this.sizes.includes(this.size)) {
        this.sizes.push(this.size)
        this.size = ''
      }
    },
  },
}
</script>

<style></style>
