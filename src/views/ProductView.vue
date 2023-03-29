<template>
  <div>
    <section class="productImage mb-5 ">
    <div class="productText">
        <p>Products</p>
    </div> 
    <br/>
    <br/>
    <br/>
    <div class="shop" style="margin-top: 2%; font-weight: bold;">
      <h3>Shop Our Delicious Cakes!</h3>
    </div>
    
    </section>

    <div class="product">
      <div class="card-group">
        <div v-for="cake in cakes" v-bind:key="cake.id">
          <div class="card m-2 p-2" >
              <img class="card-img-top" v-bind:src="require('../assets/cake/' + cake.image)" style="width: 250px; height: 300px;">
              <div class="card-body">
                <h5 class="card-title">{{ cake.name }}</h5>
                <p class="card-text">{{ cake.description }} ${{ cake.price }}</p>
                <button class="btn btn-primary" @click = "addToCart(cake)">Add to Cart</button>
              </div>
            </div>
        
        </div>
      </div>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProductView',
  components: {

  },
  data() {
    return {
      cakes: [],
      cart: [],
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
      },
   
  },
  mounted() {
    this.getProducts();
  },
};

</script>
<style>
.product{
  background-color: white;
}
.productImage{
  background-image: url("C:\Users\Arnell\OneDrive\Desktop\Cakery E-commerce Store - Capstone Project\stock16.jpg");
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.productText{
    color: white;
    font-weight: bold;
    font-size: 70px;
    margin-top: 0;
}
.shop h3{
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: rgb(17, 17, 17);
  top: 20%;
  bottom: 20%;
  text-decoration: underline 2%;
  text-underline-position: below;
  text-underline-offset: 0.9rem;
}
.product{
  margin-top: 10%;
}
.card-group{
  margin-left: 0.5%;
  
}
</style>
