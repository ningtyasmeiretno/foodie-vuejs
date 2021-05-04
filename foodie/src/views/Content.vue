<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>List <strong>Menu</strong></h2>
        </div>
      </div>
      <!-- Seach -->
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" @keyup="searchProduct"/>
          </div>
        </div>
      </div>

      <!-- untuk menampilkan produk -->
      <!-- <div class="row mb-4">
        <div class="col md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div> -->
      <div class="row mb-3">
        <div
          class="col-md-3 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Content",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search:'',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchProduct(){
      axios
      .get("http://localhost:3000/products?q=" + this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
