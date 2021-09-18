<template>
  <div class="p-2 border bg-dark d-flex">
    <div class="d-flex justify-content-start flex-grow-1">
      <nav class="navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
    <SearchBar />
    <div class="d-flex justify-content-end align-middle pr-3 align-self-center">
      <ul class="d-inline-flex text-light m-0">
        <li class="d-block pr-2">Dashboard</li>
        <li class="d-block pr-2">Login</li>
        <li class="d-block">Registration</li>
      </ul>
    </div>
    <div class="d-flex justify-content-end align-self-center">
      <div class="user-profile">
        <font-awesome-icon
          class="w-100 h-100 text-light"
          :icon="['fas', 'user-circle']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.user-profile {
  height: 30px;
  width: 30px;
  border: 0.5px solid;
  border-radius: 50%;
}
</style>
