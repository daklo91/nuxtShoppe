<template>
  <div>
    <NuxtLink class="back_icon_container" to="/"
      ><BackIcon class="back_icon" />Back to Products</NuxtLink
    >
    <div class="container">
      <div class="image_container">
        <img :src="item.image" />
      </div>
      <h1>{{ item.title }}</h1>
      <PrimaryButton @click.native="addToCart()"
        >Buy for ${{ item.price }}</PrimaryButton
      >
      <h2>Product Details</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import BackIcon from '~/components/BackIcon.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'

export default {
  components: { BackIcon, PrimaryButton },
  async asyncData({ params, $axios }) {
    const item = await $axios.$get(
      `https://fakestoreapi.com/products/${params.itemPage}`
    )
    return { item }
  },
  methods: {
    addToCart() {
      const copy = Object.assign({}, this.item)
      this.$store.dispatch('addItem', copy)
    },
  },
}
</script>

<style scoped>
.back_icon_container {
  display: flex;
  align-items: center;
}

.back_icon {
  margin-right: 10px;
}

.container {
  margin: auto;
  padding: 0 30px;
  width: 375px;
}

.image_container {
  border: 0.5px solid rgba(217, 217, 217, 0.96);
  border-radius: 8px;
  width: 290px;
  padding: 20px;
  margin: auto;
}

img {
  display: block;
  margin: auto;
  height: 290px;
  width: 100%;
  object-fit: contain;
}

h1 {
  text-align: center;
  font-size: 24px;
}

h2 {
  text-align: center;
  font-size: 20px;
}

p {
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
}

a:hover {
  text-decoration: underline;
}
</style>
