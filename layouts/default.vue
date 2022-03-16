<template>
  <div>
    <Modal v-if="show" />
    <Header />
    <Nuxt />
    <div class="snackbar-display-container">
      <Snackbar v-for="item in snackbarStorage" :key="item.uid" :item="item" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/HeaderComponent.vue'
import Snackbar from '~/components/Snackbar.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: { Header, Snackbar, Modal },
  computed: {
    snackbarStorage() {
      return this.$store.state.snackbarStorage
    },
    show() {
      console.log(this.$store.state.showModal)
      return this.$store.state.showModal
    },
  },
}
</script>

<style>
.snackbar-display-container {
  position: fixed;
  bottom: 5%;
  left: 5%;
}
</style>
