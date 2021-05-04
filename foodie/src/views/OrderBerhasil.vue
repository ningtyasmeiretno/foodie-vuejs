<template>
<div class="order-berhasil">

  <Navbar />
  <div class="container">
        <div class="row justify-content-center mt-5">
              <div class="col text-center">
                    <img src="../assets/img/order.png" width="60%"/>
                    <h2><strong>Pesananan Anda sedang diproses</strong><br>Ditunggu ya...</h2>
              </div>
        </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
name: "OrderBerhasil",
components: {
      Navbar,
}
}
</script>

<style>

</style>