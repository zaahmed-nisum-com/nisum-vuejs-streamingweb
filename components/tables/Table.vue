<template>
  <table class="table table-striped">
    <thead>
      <tr class="text-center">
        <th
          scope="col"
          v-for="(header, index) of headers"
          v-bind:key="index + 1"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['headers', 'list'],
}
</script>

<style scoped></style>
