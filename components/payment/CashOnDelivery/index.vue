<template>
  <div
    class="modal fade"
    :class="isOpen && 'show'"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    :style="[isOpen ? { display: 'block' } : { display: 'none' }]"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <font-awesome-icon
            @click="handleClose"
            class="text-dark"
            :icon="['fas', 'times-circle']"
          />
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Phone no"
              aria-label="Phone no"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <textarea
              type="text"
              class="form-control"
              placeholder="Address"
              aria-label="address"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="handleClose"
          >
            Close
          </button>
          <button @click="handleClick" type="button" class="btn btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen'],
  methods: {
    handleClick() {
      this.$parent.handleCODPanel(this.isOpen)
    },
    //close panel
    handleClose() {
      this.$parent.handleCloseCODPanel(this.isOpen)
    },
  },
}
</script>

<style></style>
