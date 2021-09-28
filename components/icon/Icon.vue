<template>
  <div>
    <font-awesome-icon
      v-if="type === 'fas'"
      :class="className"
      :style="styles"
      :icon="['fas', iconName]"
    />
    <font-awesome-icon
      v-if="type === 'fab'"
      :class="className"
      :style="styles"
      :icon="['fab', iconName]"
    />
  </div>
</template>

<script>
export default {
  props: ['iconName', 'className', 'type', 'styles'],
  mounted() {
    console.log(this.styles)
  },
}
</script>

<style></style>
