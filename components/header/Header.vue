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
        v-if="auth.isLogin"
        class="d-flex justify-content-end align-middle pr-3 align-self-center"
        :class="[common.isMobileView ? 'hide' : 'show']"
      >
        <ul class="d-inline-flex text-light m-0 p-0">
          <li v-if="auth.isLogin" class="d-block pr-2">Dashboard</li>
          <li
            v-if="auth.isLogin"
            class="d-block pr-2 cursor-pointer"
            @click="handleLogout"
          >
            Logout
          </li>
        </ul>
      </div>
      <div
        v-if="!auth.isLogin"
        class="d-flex justify-content-end align-middle pr-3 align-self-center"
      >
        <ul class="d-inline-flex text-light m-0 p-0">
          <NuxtLink to="/login"
            ><li class="d-block pr-2 a-">Login</li></NuxtLink
          >
          <NuxtLink to="/signup"
            ><li class="d-block a-">Registration</li></NuxtLink
          >
        </ul>
      </div>
      <div class="d-flex justify-content-end align-self-center">
        <div v-if="auth.isLogin" class="user-profile-icon mr-2">
          <Icon
            type="fas"
            className="w-100 h-100 text-light"
            iconName="user-circle"
          />
        </div>
        <!-- <NavBarDropDown /> -->
        <div v-if="auth.isLogin" class="user-cart-icon">
          <div class="mini-cart-counter">
            <p class="m-0">{{ Object.keys(cartCounter).length }}</p>
          </div>
          <NuxtLink to="/checkout">
            <Icon
              type="fas"
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
import theme from '../../configurations/theme'
import NavBarDropDown from '../navbardropdown/NavBarDropDown.vue'
import store from '../../store'
export default {
  components: {
    NavBarDropDown,
  },
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
    cartCounter() {
      return JSON.parse(JSON.stringify(this.$store.state.cart_checkout.cart))
    },
  },
  watch: {
    windowHeight(newHeight, oldHeight) {},
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
    console.log(this.cartCounter, 'cartCounter')
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  updated() {
    console.log(this.cartCounter, 'cartCounter')
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
    handleLogout() {
      store().commit('auth/logout', { router: this.$router })
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
