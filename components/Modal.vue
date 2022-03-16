<template>
  <div class="backdrop" @click="closeModal">
    <div class="information-box">
      <div class="modal-text">You purchased the items!</div>
      <PrimaryButton class="close-button" @click.native="closeModal"
        >Close</PrimaryButton
      >
    </div>
  </div>
</template>

<script>
import PrimaryButton from '~/components/ui/PrimaryButton.vue'

export default {
  components: { PrimaryButton },
  methods: {
    closeModal() {
      this.$store.commit('TOGGLE_MODAL', false)
    },
  },
}
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.438);
}

.information-box {
  min-width: 200px;
  margin-bottom: 300px;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-text {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
}
</style>
