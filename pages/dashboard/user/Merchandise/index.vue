<template>
  <div class="container-fluid m-2">
    <Button title="Create Merchandies" @created="handleCreateMerchandise" />
    <div class="merchandise-main-container">
      <div v-if="this.merchandise.length > 0" class="d-flex flex-row">
        <div v-for="(itm, ind) of this.merchandise" v-bind:key="ind + 1">
          <p class="m-0">{{ itm.title | nameConcate(itm.user) }}</p>
        </div>
      </div>
      <Button title="Create Product" @created="handleCreateproduct" />
    </div>
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
    merchandise() {
      return JSON.parse(
        JSON.stringify(this.$store.state.merchandise.merchandise)
      )
    },
  },
  mounted() {
    this.handleGetMerchandise()
    this.handleGetProductsByMerchandiseid()
  },
  methods: {
    handleCreateproduct() {
      this.$router.push('/dashboard/user/merchandise/Forms/create')
    },
    handleCreateMerchandise() {
      merchandiseMiddleware.createMerchandise({
        user: '615d5ed0703dd5af0e29825a',
        title: 'Testing',
      })
    },
    handleGetMerchandise() {
      merchandiseMiddleware.getMerchandiseByUserId(
        {
          user: '615d5ed0703dd5af0e29825a',
        },
        this.$router
      )
    },
    handleGetProductsByMerchandiseid() {
      merchandiseMiddleware.getProductByUserAndMerchandiseId(
        {
          user: '615d5ed0703dd5af0e29825a',
          merchandiseId: '615ee4b2da27c690d60eb845',
        },
        this.$router
      )
    },
  },
}
</script>

<style></style>
