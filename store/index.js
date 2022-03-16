import axios from 'axios'

export const state = () => ({
  storeItems: [],
  cart: [],
  snackbarStorage: [],
})

export const mutations = {
  SET_STORE_ITEMS(state, data) {
    state.storeItems = data
  },
  ADD_TO_CART(state, item) {
    state.cart.push(item)
    state.snackbarStorage.push(item)
  },
  REMOVE_FROM_CART(state, uid) {
    const object = state.cart.find((el) => el.uid === uid)
    object.status = 'removed'
    state.snackbarStorage.push(object)
    const i = state.cart.map((item) => item.uid).indexOf(uid)
    state.cart.splice(i, 1)
  },
  REMOVE_FROM_STORAGE(state, uid) {
    const arr = state.snackbarStorage.filter((el) => el.uid !== uid)
    state.snackbarStorage = arr
  },
  UNDO_REMOVE(state, uid) {
    const snackbarItem = state.snackbarStorage.find((el) => el.uid === uid)
    state.cart.push(snackbarItem)
    const arr = state.snackbarStorage.filter((el) => el.uid !== uid)
    state.snackbarStorage = arr
  },
  UNDO_CART(state, uid) {
    const arr = state.cart.filter((el) => el.uid !== uid)
    state.cart = arr
    const arr2 = state.snackbarStorage.filter((el) => el.uid !== uid)
    state.snackbarStorage = arr2
  },
}

export const actions = {
  getAllStoreItems({ commit }) {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      commit('SET_STORE_ITEMS', response.data)
    })
  },
  addItem({ commit }, item) {
    const uid = 'id' + Math.random().toString(16).slice(2)
    item.uid = uid
    item.status = 'added'
    commit('ADD_TO_CART', item)
  },
}
