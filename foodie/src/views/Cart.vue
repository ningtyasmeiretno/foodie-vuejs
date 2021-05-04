<template>
  <div class="cart">
    <Navbar :updateCart="carts" />
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
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>My <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Nama Product</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <img
                      :src="'../assets/img/' + cart.products.gambar"
                      class="img-fluid shadow"
                      width="175"
                      height="44"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.nama }}</strong>
                  </td>
                  <td>{{ cart.jumlah_order }}</td>
                  <td>{{ cart.keterangan ? cart.keterangan : "-" }}</td>
                  <td>Rp {{ cart.products.harga }}</td>
                  <td>Rp {{ cart.products.harga * cart.jumlah_order }}</td>
                  <td class="text-center text-danger">
                    <b-icon-trash @click="hapusCart(cart.id)"></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td align="right" colspan="6">Total Bayar</td>
                  <td>
                    <strong>Rp {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
              <h4>Pesanan diantar ke...</h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama:</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.nama"
              />
            </div>
            <div class="from-group">
              <label for="noMeja">Nomor Meja:</label>
              <textarea
                class="form-control"
                v-model="pesan.noMeja"
              ></textarea>
            </div>
            <br /><br />
            <button
              type="submit"
              class="btn btn-primary float-right"
              @click="checkout"
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
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
      pesan:{}
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    hapusCart(id) {
      axios
        .delete("http://localhost:3000/carts/" + id)
        .then(() => {
          this.$toast.error("Berhasil Menghapus Kerangjang", {
            type: "error",
            position: "top-right",
            duration: "4000",
            dismissible: "true",
          });
          axios
            .get("http://localhost:3000/carts")
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout(){
          if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.carts = this.carts;
        axios
          .post("http://localhost:3000/orders", this.pesan)
          .then(() => {

                this.carts.map(function(item){
                      return axios
                      .delete("http://localhost:3000/carts/"+item.id)
                      .catch((error) => console.log(error));
                })
            
            this.$router.push({path: "/order-berhasil"})
            this.$toast.success("Pesanan Berhasil Diproses!", {
              type: "info",
              position: "top-right",
              duration: "4000",
              dismissible: "true",
            });
          })
          .catch((err) => console.log(err));
      }else{
            this.$toast.error("Nama dan No Meja Harus Diisi", {
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
      .get("http://localhost:3000/carts")
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.carts.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_order;
      }, 0);
    },
  },
};
</script>

<style>
</style>