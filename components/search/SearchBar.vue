<template>
  <div class="ml-2 mr-2 search-bar-main d-flex bg-white" style="width: 250px">
    <input class="search-bar-input" />
    <div class="search-icon-main align-self-center">
      <Icon
        style="font-size: 20px; color: black"
        type="fas"
        className="text-dark  pl-1 pr-1 cursor-pointer"
        iconName="search"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-bar-main {
  padding: 0px 0px;
  border-radius: 50px;
}
.search-bar-input {
  border-radius: 50px;
  border: 0px;
  margin: 0px;
  padding: 0px 5px;
  height: 100%;
  width: 90%;
}
.search-bar-input:focus {
  outline: none;
}
.icon-small {
  font-size: 25px;
}
</style>
