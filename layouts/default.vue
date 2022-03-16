<template>
  <div>
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

export default {
  components: { Header, Snackbar },
  computed: {
    snackbarStorage() {
      return this.$store.state.snackbarStorage
    },
  },
}
</script>

<style>
.snackbar-display-container {
  position: fixed;
  bottom: 5%;
  left: 5%;
  /* margin-left: -186px; */
}
</style>
