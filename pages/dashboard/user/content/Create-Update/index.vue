<template>
  <div class="">
    <div class="p-2 border rounded">
      <Input
        labelClass="text-dark"
        label="Title"
        :value="title"
        id="title"
        v-model="title"
        type="text"
        placeholder="title"
      />
      <Input
        labelClass="text-dark"
        label="Description"
        :value="title"
        id="description"
        v-model="title"
        type="text"
        placeholder="description"
      />
      <Input
        labelClass="text-dark"
        label="Actors"
        :value="title"
        id="actors"
        v-model="actors"
        type="text"
        placeholder="actors e.g john,andrew,juliana"
      />
      <Input
        labelClass="text-dark"
        label="Directors"
        :value="directors"
        id="directors"
        v-model="actors"
        type="text"
        placeholder="directors e.g john,andrew,juliana"
      />
      <label>Permissions</label>
      <div class="d-flex flex-row mb-2">
        <div
          @click="handleSelectPermissions(item)"
          class="border rounded p-2 m-1 cursor-pointer"
          v-for="(item, index) of Array('Read', 'Write', 'Download')"
          :style="[
            permissions.includes(item)
              ? { 'background-color': 'grey', color: 'white' }
              : '',
          ]"
          v-bind:key="index + 1"
        >
          {{ item }}
        </div>
      </div>
      <label>Category</label>
      <div class="d-flex flex-row mb-2">
        <div
          @click="handleSelectCategory(item)"
          class="border rounded p-2 m-1 cursor-pointer"
          v-for="(item, index) of Array(
            'category-1',
            'category-2',
            'category-3'
          )"
          :style="[
            category === item
              ? { 'background-color': 'grey', color: 'white' }
              : '',
          ]"
          v-bind:key="index + 1"
        >
          {{ item }}
        </div>
      </div>
      <SwitchInput label="isAdult" />
      <Button title="Create" />
    </div>
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
      description: '',
      actors: '',
      directors: '',
      permissions: [],
      category: '',
    }
  },
  methods: {
    handleSelectPermissions(value) {
      if (this.permissions.includes(value)) {
        this.permissions.splice(this.permissions.indexOf(value), 1)
      } else {
        this.permissions.push(value)
      }
    },
    handleSelectCategory(value) {
      this.category = value
    },
  },
}
</script>

<style scoped></style>
