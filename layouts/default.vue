<template>
  <div>
    <Header />
    <Nuxt />
    <Snackbar v-for="item in snackbarStorage" :key="item.uid" :item="item" />
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
