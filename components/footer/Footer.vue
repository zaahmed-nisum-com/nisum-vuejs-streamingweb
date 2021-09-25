<template>
  <div
    class="footer d-flex flex-column pl-2 pr-2 pt-2 border"
    style="background-color: #0083d0"
  >
    <div class="d-flex flex-row">
      <div class="d-flex flex-column w-50">
        <h6 class="text-white">Social media</h6>
        <div class="d-flex flex-row">
          <Icon
            iconName="facebook-square"
            style="margin: 2px; font-size: 20px; color: white"
            type="fab"
          />
          <Icon
            iconName="facebook-square"
            style="margin: 2px; font-size: 20px; color: white"
            type="fab"
          />
          <Icon
            iconName="facebook-square"
            style="margin: 2px; font-size: 20px; color: white"
            type="fab"
          />
          <Icon
            iconName="facebook-square"
            style="margin: 2px; font-size: 20px; color: white"
            type="fab"
          />
        </div>
      </div>
      <div class="d-flex flex-column w-50">
        <a
          class="m-0 text-white mb-1 a- cursor-pointer"
          href="tel:03022XXXXXXX"
        >
          Contact Us : 03022XXXXXXX
        </a>
        <a
          class="m-0 text-white mb-1 a- cursor-pointer a- cursor-pointer"
          href="mailto:zain.support@gmail.com"
        >
          zain.support@gmail.com
        </a>
        <p class="m-0 text-white mb-1 a- cursor-pointer">About us</p>
        <p class="m-0 text-white mb-1 a- cursor-pointer">Terms & Conditions</p>
      </div>
      <div class="d-flex w-50 flex-column">
        <Input
          labelClass="text-white"
          id="email"
          type="email"
          placeholder="Email"
        />
        <Button title="Subscribe" />
      </div>
    </div>
    <p class="mt-2 mb-0 text-center text-white border-top">
      &#169; Copyrights to zain ahmed
    </p>
  </div>
</template>

<script>
import Button from '../buttons/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<style>
/* .footer {
  position: sticky;
  bottom: 0;
  left: 0;
} */
</style>
