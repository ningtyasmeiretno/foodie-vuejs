<template>
<div>
  <b-navbar toggleable="lg" type="light" style="background-color:#679186;">
    <div class="container">

    <b-navbar-brand href="#">Foodie</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/content">Food Menu</router-link>
        </li>
      </b-navbar-nav> 

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <li class="nav-item">
          <router-link class="nav-link" to="/Cart">
          Cart
          <b-icon-cart4></b-icon-cart4>
          <span class="badge ml-2" style="background-color: #d5f2ff;"><strong>{{ updateCart ? updateCart.length :jumlah_orders.length }}</strong></span>
          </router-link>
        </li>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
  <!-- <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #dddddd;">
  <div class="container">
        <div class="container-fluid">
    <a class="navbar-brand" href="#">myProject</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/content">Content</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/Cart">
          Cart
          <b-icon-cart4></b-icon-cart4>
          <span class="badge ml-2" style="background-color: #84a9ac;">{{ updateCart ? updateCart.length :jumlah_orders.length }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav> -->
</template>

<script>
import axios from 'axios'
export default {
      name: 'Navbar',

data(){
  return {
    jumlah_orders:[]
  }
},
props:['updateCart'],

methods:{
  setJumlah(data){
    this.jumlah_orders = data
  }
},
mounted(){
  axios
  .get('http://localhost:3000/carts')
  .then((response) => this.setJumlah(response.data))
  .catch((error) => console.log(error))
}
}
</script>

<style>

</style>