import axios from 'axios'

export const state = () => ({
  storeItems: [],
  cart: [],
})

export const mutations = {
  SET_STORE_ITEMS(state, data) {
    state.storeItems = data
  },
  ADD_TO_CART(state, item) {
    state.cart.push(item)
  },
  REMOVE_FROM_CART(state, id) {
    const i = state.cart.map((item) => item.id).indexOf(id)
    state.cart.splice(i, 1)
  },
}

export const actions = {
  getAllStoreItems({ commit }) {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      commit('SET_STORE_ITEMS', response.data)
    })
  },
}
