<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4" >
        <div class="col mt-3 mb-3">
          <h2>Top <strong>Menu</strong></h2>
        </div>
        <div class="col">
          <router-link to="/content" class="btn float-right mt-4" style="background-color:#a0937d;"><b-icon-eye></b-icon-eye>Lihat Semua Menu</router-link>
        </div>
      </div>

      <!-- untuk menampilkan produk -->
    <div class="row mb-3" >
      <div class="col md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product"/>
      </div>
    </div>

      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data(){
    return{
      products:[]
    };
  },
  methods:{
    setProduct(data){
    this.products = data;
    },
  },
  mounted(){
  axios
  .get('http://localhost:3000/best_products')
  .then((response) => this.setProduct(response.data))
  .catch((error) => console.log(error))
  }, 
};
</script>
