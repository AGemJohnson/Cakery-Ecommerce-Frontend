<template>
  
  <div>
    <section class="homeImage">
      <div class="homeText">
        <h1>Welcome to Heavenly Cravings</h1>
      </div>
    </section>
    <section class="featured">
      <div class="featuredText" >
        <h4>Featured Products</h4>
      </div>
      <div class="product">
      <div class="card-group">
        <div v-for="cake in cakes" v-bind:key="cake.id">
          <div v-if = "cake.feature">
          <div class="card m-2 p-2">
              <img class="card-img-top" v-bind:src="require('../assets/cake/' + cake.image)" style="width: 250px; height: 250px;">
              <div class="card-body">
                <h5 class="card-title">{{ cake.name }}</h5>
                <p class="card-text">{{ cake.description }} ${{ cake.price }}</p>
                <button class="btn btn-primary" @click = "addToCart(cake)">Add to Cart</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  <br/>
  <br/>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img class="img-home" v-bind:src="require('../assets/cake/funfetti.jpg')" style="width:105%;">
        </div>
        <div class="col-md-6" style="background-color: pink; padding: 1rem; font-size: 50px; font-weight: bold;">
          <div class="colText" style="margin-top: 32%; font-family: 'Playfair Display', cursive;">
          <p>Indulge in one of our delicious cakes today!</p>
          </div>
          <a href="/product" class="productBtn">Shop Now</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6" style="padding: 1rem; background-color: pink; width:50%">
          <div class="col2Text" style="font-size: 50px; font-weight: bold; margin-top: 40%; font-family: 'Playfair Display', cursive; width:100%;">
          <p>Browse our beautiful creations!</p>
          </div>
          <a href="/gallery" class="productBtn">Browse Gallery</a>
        </div>
        <div class="col-md-6" style="">
          <img class="img-home" v-bind:src="require('../assets/cake/pound.jpg')" style="width:102.5%;">
        </div>
      </div>
    </div>
    
  </div>

</template>
<style>

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kalam:wght@300;400&family=Playfair+Display:ital@1&family=Poppins:ital,wght@1,300;1,400;1,500;1,600&display=swap" rel="stylesheet');

.homeImage{
  background-image: url("C:\Users\Arnell\OneDrive\Desktop\Cakery E-commerce Store - Capstone Project\stock16.jpg");
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  margin-bottom: 3%;
}
.homeText h1{
  color: white;
  font-family: 'Great Vibes', cursive;
  font-size: 85px;
  font-weight: bold;
  

  
}
.product{
  margin-left: 8%;
  margin-top: 4%;
}
.featuredText h4{
  font-family: 'Playfair Display', cursive;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: rgb(17, 17, 17);
  text-decoration: underline 2%;
  text-underline-position: below;
  text-underline-offset: 0.9rem;
}
.productBtn{
  padding: 0.5rem;
  background-color: rgb(241, 71, 99);
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  
}
.btn-primary{
  background-color: pink;
  font-weight: bold;
  border: none;
}
.container .row .col{
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  float: right;
  padding: 7rem;
  background-color: pink;
}
.h1{
  font-size: 200px;
}

</style>
<script>
import axios from "axios";
export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      cakes: [],
      cart: []
    }
  },
  methods: {
    addToCart(cake){
      this.$store.commit("addCartItem", cake);
    },
    getProducts(){
        var url = "http://localhost:5000/api/cakery";
        axios.get(url)
        .then((response) => {
          this.cakes = response.data; 
        }, (error) => {
          console.log(error);
        });


    }
  },
  mounted() {
    this.getProducts();
  }
}

</script>
