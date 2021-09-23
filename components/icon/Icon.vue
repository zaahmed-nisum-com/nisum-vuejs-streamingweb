<template>
  <font-awesome-icon :class="className" :icon="['fas', iconName]" />
</template>

<script>
export default {
  props: ['iconName', 'className'],
}
</script>

<style></style>
