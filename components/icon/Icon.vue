<template>
  <div>
    <font-awesome-icon
      v-if="type === 'fas'"
      :class="className"
      :icon="['fas', iconName]"
    />
    <font-awesome-icon
      v-if="type === 'fab'"
      :class="className"
      :icon="['fab', iconName]"
    />
  </div>
</template>

<script>
export default {
  props: ['iconName', 'className', 'type'],
}
</script>

<style></style>
