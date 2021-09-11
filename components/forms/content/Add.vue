<template>
  <div class="container-fluid">
    <h2>Add content form</h2>
    <div class="add-content-main-container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            id="exampleInputEmail1"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            id="exampleInputPassword1"
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input id="exampleCheck1" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.add-content-main-container {
  width: 400px;
  margin: 0 auto;
}
</style>
