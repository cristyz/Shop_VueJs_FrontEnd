<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
    <router-link to="/">
      <img src="./assets/logo.png" />
    </router-link>
    <router-link to="Car">{{$store.state.carProducts.length}} <i class="fas fa-shopping-cart"></i> </router-link>
  </nav>


  <router-view />
  </div>
</template>



<style scoped>
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
a{
  margin: 0 30px;
  color: white;
  text-decoration: none;
}
</style>