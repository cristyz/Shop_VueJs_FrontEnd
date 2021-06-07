<template>
  <main role="main" class="pt-4">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 v-if="$store.state.userSingIn">Welcome {{name}} in</h1>

        <h1 class="jumbotron-heading">My Shop</h1>
        <p class="lead text-muted">FullStack in VueJs</p>
        <p>
          <a href="#" class="btn btn-warning my-2 text-white"
            >Promotions <i class="far fa-star"></i
          ></a>
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="i in products" :key="i">
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                alt="Thumbnail [100%x225]"
                style="height: 225px; width: 100%; display: block"
                :src="i.url"
                data-holder-rendered="true"
              />
              <div class="card-body">
                <p class="card-text">
                  {{ i.name }}
                </p>
                <p class="card-text">R${{ i.price.toFixed(2) }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <router-link :to="{ path: `/productview/${i.id}` }">
                        > View
                      </router-link>
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-danger"
                      @click="increment(i)"
                    >
                      Add
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      name: null
    };
  },

  mounted() {
    fetch("http://192.168.1.8:8484/")
      .then((e) => e.json())
      .then((e) => (this.products = e))
      .then((e) => {
        this.$store.commit("addAllProducts", e);
      });

    

    // Verificar Token de usuario
      axios
        .get("http://localhost:8484/user", {
          headers: { token: localStorage.getItem("token") },
        })
        .then((e) => {
          this.$store.commit("verifyYUser", true);
          this.name = e.data.user.name
        })
        .catch(err => console.log(err))
    
    
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

  // directives: {
  //   money(el) {
  //     console.log(el.innerText);
  //   },
  // },
};
</script>

<style>
.btn-group a {
  /* color: transparent !important; */
  color: black;
  text-decoration: none;
}
</style>