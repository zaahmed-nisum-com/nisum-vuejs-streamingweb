<template>
  <div
    class="drawer-main border-right bg-white p-2"
    :class="[this.common.isDrawerOpen ? 'show' : 'show']"
  >
    <div v-for="(item, index) of data" v-bind:key="index + 1">
      <div class="p-3 border rounded">
        <p class="m-0">{{ item.title }}</p>
      </div>
      <div class="line-seperater border-bottom m-2" />
    </div>
    <div class="logout-drawer-container">
      <div class="p-3 border rounded">
        <p @click="handleLogout" class="m-0">Logout</p>
      </div>
      <div class="line-seperater border-bottom m-2" />
    </div>
  </div>
</template>

<script>
import constants from '../../configurations/constants'
import store from '../../store'
export default {
  data: () => {
    return {
      data: constants.drawer,
    }
  },
  computed: {
    common() {
      return JSON.parse(JSON.stringify(this.$store.state.common))
    },
  },
  methods: {
    handleLogout() {
      store().commit('auth/logout', { router: this.$router })
    },
  },
}
</script>

<style scoped>
.drawer-main {
  width: 300px;
  position: absolute;
  z-index: 1000;
  height: 100vh;
  margin: 57px 0px;
}
.logout-drawer-container {
}
</style>
