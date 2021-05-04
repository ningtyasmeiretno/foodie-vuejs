<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>Grab your foods from<br /><strong>your Gadget</strong></h2>
              <h5>Tersedia berbagai menu makanan lezat :)</h5>
              <br /><br /><br />
              <router-link to="/content" class="btn btn-lg btn-primary">
                <b-icon-shop-window></b-icon-shop-window>&nbsp;Order Here
              </router-link >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/hero-illustration.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/img/hero-illustration.png" width="100%" />
        </div>
        <div class="col-md-6 mb-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>Grab your foods from<br /><strong>your Gadget</strong></h2>
              <h5>Tersedia berbagai menu makanan lezat :)</h5>
              <br /><br /><br />
              <button class="btn btn-lg btn-primary">
                <b-icon-shop-window></b-icon-shop-window>&nbsp;Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>