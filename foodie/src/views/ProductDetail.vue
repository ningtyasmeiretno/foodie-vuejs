<template>
  <div class="product-detail">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/Content" class="text-dark"
                  >Food Menu</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/img/' + product.gambar"
            class="img-fluid shadow" width="700" height="170"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <h4>
            Harga <strong>Rp {{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_order">Jumlah Order</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_order"
              />
            </div>
            <div class="from-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                class="form-control"
                v-model="pesan.keterangan"
              ></textarea>
            </div>
            <br /><br />
            <button
              type="submit"
              class="btn btn-primary float-right"
              @click="pemesanan"
            >
              <b-icon-cart4></b-icon-cart4>Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "ProductDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_order) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/carts", this.pesan)
          .then(() => {
            this.$router.push({path: "/Cart"})
            this.$toast.success("Pesanan Berhasil Masuk Keranjang!", {
              type: "info",
              position: "top-right",
              duration: "4000",
              dismissible: "true",
            });
          })
          .catch((err) => console.log(err));
      }else{
            this.$toast.error("Jumlah Pesanan Harus Diisi", {
              type: "error",
              position: "top-right",
              duration: "4000",
              dismissible: "true",
            });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>