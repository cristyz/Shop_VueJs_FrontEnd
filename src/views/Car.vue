<template>
  <div id="container">
    <div
      v-if="$store.state.carProducts.length == 0"
      style="text-align: center"
      class="mt-4"
    >
      <h1>Você ainda não adicionou nenhum produto ao carrinho</h1>
      <h3>Volte a pagina inicial e faça suas compras!</h3>
      <router-link to="/">
        <p class="btn btn-primary">Voltar</p>
      </router-link>
    </div>

    <!-- Modal -->
    <div class="totalModal" :class="{ showModal: modalVisible }">
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 90%;
          align-items: center;
        "
      >
        <h1>Total Price</h1>
        <button @click="showModal" class="btn" style="font-size: 25px">
          &#10006;
        </button>
      </div>
      <p style="font-size: 50px">R${{ totalPrice.toFixed(2) }}</p>
      <div>
        <button class="btn btn-primary text-white px-4 fs-2 me-4">
          Finish
        </button>
        <button @click="showModal" class="btn btn-outline-danger">
          Cancel
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="border cardProduct"
      v-for="product in $store.state.carProducts"
      :key="product"
    >
      <img :src="product.url" />
      <div class="description">
        <h1>{{ product.name }}</h1>
        <h5>R${{ product.price.toFixed(2) }}</h5>
      </div>
      <p style="width: 200px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis velit,
        sapiente eius culpa sunt vel.
      </p>
      <button class="btn btn-outline-danger" @click="removeProductCar(product)">
        Remove
      </button>
    </div>
    <button
      v-if="$store.state.carProducts.length > 0"
      class="btn btn-warning text-white mb-4"
      style="padding: 10px 50px; font-size: 20px"
      @click="showModal"
    >
      Buy
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    removeProductCar(products) {
      this.$store.commit("removeProductCar", products);
      localStorage.setItem('productsCar', JSON.stringify(this.$store.state.carProducts))
    },
    showModal() {
      this.modalVisible = !this.modalVisible;
    },
  },
  computed: {
    totalPrice() {
      let countPrice = 0;
      this.$store.state.carProducts.forEach((e) => {
        countPrice += e.price;
      });
      return countPrice;
    },
  },
  
};
</script>

<style scoped>
.totalModal {
  position: fixed;
  background: #fff;
  z-index: -1;
  opacity: 0;
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  transition: 0.4s all;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #c1c1c1;
  border-radius: 5px;
}
.showModal {
  z-index: 100;
  opacity: 1;
}

#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.cardProduct {
  width: 80%;
  margin: 20px 0;
  padding: 20px;
  display: flex;
  position: relative;
}
.description {
  margin: 0 40px;
  width: 250px;
}
img {
  width: 300px;
  object-fit: cover;
}
.btn-outline-danger {
  width: 100px;
  height: 50px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
@media (max-width: 1000px) {
  .cardProduct {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .btn-outline-danger {
    position: relative;
    right: 0;
    bottom: 0;
  }
  img {
    width: 100%;
  }
}
</style>>
