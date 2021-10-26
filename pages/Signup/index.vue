<template>
  <div class="container-fluid">
    <div
      class="signup-main-container mt-4 p-4 rounded"
      style="width: fit-content; background-color: #0083d0"
    >
      <Input
        label="First Name"
        labelClass="text-white"
        id="firstname"
        v-model="firstName"
        type="text"
        describedby="first name"
        placeholder="Enter First Name"
      />
      <Input
        label="Last Name"
        labelClass="text-white"
        id="lastname"
        v-model="lastName"
        type="text"
        describedby="last name"
        placeholder="Enter Last Name"
      />
      <Input
        label="Email"
        labelClass="text-white"
        v-model="email"
        id="email"
        type="email"
        placeholder="email"
      />
      <Input
        label="Password"
        v-model="password"
        id="password"
        labelClass="text-white"
        type="password"
        placeholder="password"
      />
      <div class="form-group form-check">
        <input id="exampleCheck1" type="checkbox" class="form-check-input" />
        <label class="form-check-label text-white" for="exampleCheck1"
          >Check me out</label
        >
      </div>
      <Button title="Register" @created="handleClick" />
      <NuxtLink to="/login"
        ><p class="m-0 text-white mt-2 cursor-pointer">
          Already has a account
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  },
  components: {
    Button,
  },
  methods: {
    handleClick() {
      authMiddleware.signUp({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style scoped>
.signup-main-container {
  width: 400px;
  margin: 0 auto;
}
</style>
