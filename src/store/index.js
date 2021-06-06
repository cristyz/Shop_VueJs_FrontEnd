import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      carProducts: []
    }
  },
  mutations: {
    addProductCar(state, payload) {
      state.carProducts.push(payload)
    },
    removeProductCar(state, payload) {
      
      state.carProducts = state.carProducts.filter((e) => e.id !== payload.id)
    }
  }
})

export default store