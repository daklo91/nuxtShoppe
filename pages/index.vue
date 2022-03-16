<template>
  <div class="container">
    <AdvertiseCategory :category="'men\'s clothing'" :store-items="storeItems"
      >Men's clothing</AdvertiseCategory
    >
    <AdvertiseCategory :category="'women\'s clothing'" :store-items="storeItems"
      >Women's clothing</AdvertiseCategory
    >
    <AdvertiseCategory :category="'jewelery'" :store-items="storeItems"
      >Jewelery</AdvertiseCategory
    >
    <AdvertiseCategory :category="'electronics'" :store-items="storeItems"
      >Electronics</AdvertiseCategory
    >
  </div>
</template>

<script>
import AdvertiseCategory from '~/components/AdvertiseCategory.vue'

export default {
  name: 'IndexPage',
  components: { AdvertiseCategory },
  computed: {
    storeItems() {
      return this.$store.state.storeItems
    },
  },
  created() {
    this.$store.dispatch('getAllStoreItems')
  },
}
</script>

<style>
/* Global Styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  max-width: 800px;
  margin: auto;
}
</style>
