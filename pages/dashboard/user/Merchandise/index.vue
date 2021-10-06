<template>
  <div class="container-fluid m-2">
    <Button title="Create Merchandies" />
  </div>
</template>

<script>
import Button from '../../../../components/buttons/Button.vue'
import { merchandiseMiddleware } from '../../../../middleware/merchandise'
export default {
  components: {
    Button,
  },
  computed: {
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
  },
  mounted() {
    console.log(this.auth)
  },
  methods: {
    handleClick() {
      merchandiseMiddleware.createMerchandise({
        user: '615d5ed0703dd5af0e29825a',
        title: 'Testing',
      })
    },
  },
}
</script>

<style></style>
