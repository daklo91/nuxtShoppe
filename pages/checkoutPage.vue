<template>
  <div>
    <NuxtLink class="back_icon_container" to="/"
      ><BackIcon class="back_icon" />Back to Products</NuxtLink
    >
    <div class="container">
      <div>
        <span class="items_left_text"
          >You have {{ cart.length }} item{{
            cart.length === 1 ? null : 's'
          }}
          in your cart</span
        >
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            <div class="image_container">
              <img :src="item.image" />
            </div>
            <div class="detail_container">
              <span class="title">{{ item.title }}</span>
              <div>
                <span class="price">Price: ${{ item.price }}</span>
                <SecondaryButton @click.native="removeFromCart(item.uid)">
                  Remove from cart
                </SecondaryButton>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <PrimaryButton @click.native="openModal"
          >Continue to Checkout</PrimaryButton
        >
        <NuxtLink class="continue_shopping" to="/"
          >Or continue shopping</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import BackIcon from '~/components/icons/BackIcon.vue'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import SecondaryButton from '~/components/ui/SecondaryButton.vue'

export default {
  components: { BackIcon, PrimaryButton, SecondaryButton },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  methods: {
    removeFromCart(uid) {
      this.$store.commit('REMOVE_FROM_CART', uid)
    },
    openModal() {
      this.$store.commit('TOGGLE_MODAL', true)
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 375px;
  min-height: 85vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.back_icon_container {
  display: flex;
  align-items: center;
}

.back_icon {
  margin-right: 10px;
}

.items_left_text {
  display: block;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  margin-bottom: 20px;
  text-align: left;
}

.image_container {
  border: 0.5px solid rgba(217, 217, 217, 0.96);
  border-radius: 8px;
  min-width: 150px;
  padding: 10px;
  margin: auto;
  margin-right: 30px;
}

.detail_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}

img {
  display: block;
  margin: auto;
  height: 130px;
  width: 100%;
  object-fit: contain;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
}

.price {
  display: block;
  margin-bottom: 10px;
  display: block;
}

.continue_shopping {
  font-weight: 500;
  margin-top: 20px;
  display: block;
}

a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 400px) {
  li {
    margin-bottom: 50px;
  }
}
</style>
