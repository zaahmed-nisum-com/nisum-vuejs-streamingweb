<template>
  <div class="form-group">
    <label :class="labelClass" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="value"
      :style="styles"
      class="form-control"
      @input="$emit('input', $event.target.value)"
      :class="className"
      :aria-describedby="describedby"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'key',
    'type',
    'value',
    'placeholder',
    'className',
    'id',
    'styles',
    'describedby',
    'labelClass',
  ],
  methods: {
    handleChange(e, key) {},
  },
}
</script>

<style></style>
