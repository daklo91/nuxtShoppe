<template>
  <header>
    <NuxtLink to="/"><h1>NuxtShoppe</h1></NuxtLink>
    <NuxtLink class="cart" to="/checkoutPage"
      ><div class="cart_badge" :class="{ bopp: bopp }">{{ cart.length }}</div>
      <CartIcon
    /></NuxtLink>
  </header>
</template>

<script>
import CartIcon from '~/components/icons/CartIcon.vue'

export default {
  components: { CartIcon },
  data() {
    return {
      bopp: false,
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  watch: {
    cart() {
      this.bopp = true
      setTimeout(() => {
        this.bopp = false
      }, 100)
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
}

.cart {
  display: flex;
  align-items: center;
  color: white;
}

.cart:hover {
  margin-bottom: -1px;
  border-bottom: 1px solid black;
}

.cart_badge {
  background-color: black;
  width: 16px;
  height: 16px;
  padding: 9px 9px;
  text-align: center;
  border-radius: 100%;
  transition: 0.1s;
}

.bopp {
  transform: scale(1.1);
}

@media screen and (max-width: 500px) {
  header {
    padding-right: 5px;
  }
}
</style>
