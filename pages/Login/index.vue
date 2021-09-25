<template>
  <div class="container-fluid">
    <div
      class="login-main-container mt-4 p-4 rounded"
      style="width: fit-content; background-color: #0083d0"
    >
      <div>
        <Input
          labelClass="text-white"
          label="Email"
          key="email"
          id="email"
          v-model="email"
          type="email"
          placeholder="email"
        />
        <Input
          labelClass="text-white"
          label="Password"
          :value="password"
          id="password"
          v-model="password"
          type="password"
          placeholder="password"
        />
        <div class="form-group form-check">
          <input id="exampleCheck1" type="checkbox" class="form-check-input" />
          <label class="form-check-label text-white" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <Button title="Login" />
      </div>
      <NuxtLink to="/signup"
        ><p class="m-0 text-white mt-2 cursor-pointer">
          Create account
        </p></NuxtLink
      >
    </div>
  </div>
</template>

<script>
import Button from '../../components/buttons/Button.vue'
import { authMiddleware } from '../../middleware/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  components: {
    Button,
  },
  methods: {
    handleClick() {
      authMiddleware.login({ email: this.email, password: this.password })
    },
  },
}
</script>

<style scoped>
.login-main-container {
  width: 400px;
  margin: 0 auto;
}
</style>
