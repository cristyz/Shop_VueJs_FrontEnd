<template>
  <main v-if="product != null" class="container my-4">
    <div class="p-5 rounded d-flex align-items-center flex-column">
      <h1>{{ product[0].name }}</h1>
      <img :src="product[0].url" />
      <h3 class="mt-3 mb-3">R${{ product[0].price }}</h3>
      <p class="lead my-2">
        <strong>This Product</strong> lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae molestiae architecto harum minima facilis!
      </p>
      <div>
        <button  @click="increment(product[0])" class="btn btn-lg btn-primary mx-3" role="button">
          Add {{ product[0].name }} to car
        </button>
        <button type="button" class="btn btn-sm btn-outline-danger">
          <router-link to="/">Go Back</router-link>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.product = this.$store.state.allProducts.filter(
      (e) => e.id == this.$route.params.id
    );
  },
  methods: {
    increment(products) {
      this.$store.commit("addProductCar", products);
      localStorage.setItem(
        "productsCar",
        JSON.stringify(this.$store.state.carProducts)
      );
    },
  },
};
</script>

<style scoped>
img {
  width: 60%;
}
.btn-outline-danger a{
    color: red;
    text-decoration: none;
    width: 100%;
    height: 100%;
}
.btn-outline-danger a:hover{
    color: white;
}
</style>>