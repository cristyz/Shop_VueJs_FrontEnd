import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      carProducts: [],
      allProducts: []
    }
  },
  mutations: {
    addProductCar(state, payload) {
      state.carProducts.push(payload)
      console.log(state.carProducts);
    },
    removeProductCar(state, payload) {
      state.carProducts = state.carProducts.filter((e) => e.id !== payload.id)
    },
    addAllProducts(state, payload) {
      state.allProducts = payload
    }
  }
})

export default store