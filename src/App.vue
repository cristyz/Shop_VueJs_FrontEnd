<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <router-link to="/">
        <img src="./assets/logo.png" />
      </router-link>
      <router-link to="/Car"
        >{{ $store.state.carProducts.length }}
        <i class="fas fa-shopping-cart"></i>
      </router-link>
      <div>
        <button
          @click="logout"
          class="btn btn-danger"
          v-if="$store.state.userSingIn"
        >
          Logout
        </button>
        <router-link to="/Login">
          <i class="fas fa-user"></i>
        </router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userSingIn: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8484/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then(() => {
        this.$store.commit("verifyYUser", true);
      })
      .catch((err) => console.log(err));

    // Pegar todos os itens adicionados anteriomente (Estão salvos no localStore)
    localStorage.getItem("productsCar") != null
      ? (this.$store.state.carProducts = JSON.parse(
          localStorage.getItem("productsCar")
        ))
      : null;
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.state.userSingIn = false;
    },
  },
};
</script>




<style scoped>
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
a {
  margin: 0 30px;
  color: white;
  text-decoration: none;
}
.userAccount {
  position: relative;
}
.userAccount::after {
  content: "Logout";
  position: absolute;
  left: -80px;
}
</style>