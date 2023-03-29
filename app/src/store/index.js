import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  getters: {
    getCart(state) {
      return state.cart;
      }
  },
  mutations: {
    addCartItem(state, item) {
      state.cart.push(item);
      },
    removeCartItem(state, item) {
      state.cart = state.cart.filter((e)=>e.id !== item.id )
      },
  },
  actions: {
  },
  modules: {
  }

})
