<template>
  <div class="card card-product">
  <img :src=" 'assets/img/' + product.gambar" class="card-img-top" width="700" height="170" alt="...">
  <div class="card-body" style="background-color:#d9dab0;">
    <h5 class="card-title"><strong>{{product.nama}}</strong>  </h5>
      <p class="card-text">Price Rp &nbsp;{{product.harga}}</p>
      <router-link :to ="'/content/' + product.id" class="btn btn-primary float-right" style="background-color:#2f4f4f
"><b-icon-cart></b-icon-cart>Order</router-link>
  </div>
</div>
</template> 

<script>
export default {
      name:'CardProduct',
      props: ['product']
}
</script>

<style>

</style>