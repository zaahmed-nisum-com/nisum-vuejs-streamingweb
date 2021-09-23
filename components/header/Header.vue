<template>
  <div>
    <Drawer v-if="auth.isLogin && common.isDrawerOpen" />
    <div class="p-2 border d-flex" style="background-color: #0083d0">
      <div class="d-flex justify-content-start flex-grow-1">
        <nav class="navbar-dark bg-dark" v-if="auth.isLogin">
          <button
            :class="[common.isMobileView ? 'show' : 'hide']"
            class="navbar-toggler"
            @click="toggleDrawer()"
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
      <div
        class="d-flex justify-content-end align-middle pr-3 align-self-center"
        :class="[common.isMobileView ? 'hide' : 'show']"
      >
        <ul class="d-inline-flex text-light m-0 p-0">
          <li v-if="auth.isLogin" class="d-block pr-2">Dashboard</li>
          <li class="d-block pr-2">Login</li>
          <li class="d-block">Registration</li>
        </ul>
      </div>
      <div class="d-flex justify-content-end align-self-center">
        <div v-if="auth.isLogin" class="user-profile-icon mr-2">
          <Icon className="w-100 h-100 text-light" iconName="user-circle" />
        </div>
        <div v-if="auth.isLogin" class="user-cart-icon">
          <div class="mini-cart-counter">
            <p class="m-0">2</p>
          </div>
          <NuxtLink to="/checkout">
            <Icon
              className="w-100 h-100 text-light cursor-pointer"
              iconName="shopping-cart"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.windowWidth,
    }
  },
  computed: {
    common() {
      return JSON.parse(JSON.stringify(this.$store.state.common))
    },
    auth() {
      return JSON.parse(JSON.stringify(this.$store.state.auth))
    },
  },

  watch: {
    windowHeight(newHeight, oldHeight) {
      console.log(`it changed to ${newHeight} from ${oldHeight}`)
    },
    windowWidth(newWidth, oldWidth) {
      if (newWidth <= 768) {
        this.$store.commit('common/toggleMobileView', true)
      }
      if (newWidth > 768) {
        this.$store.commit('common/toggleMobileView', false)
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    console.log(this.auth)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
    toggleDrawer() {
      this.$store.commit('common/toggleDrawer')
    },
  },
}
</script>

<style>
.user-profile-icon {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.user-cart-icon {
  height: 30px;
  width: 30px;
}
.mini-cart-counter {
  position: absolute;
  z-index: 10000;
  color: white;
  background-color: red;
  padding: 0px 5px;
  border-radius: 50px;
  margin: -6px 1px;
}
</style>
