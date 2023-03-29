<template>
  
    <div class="container">
      <br/>
      <div class="cartHeader" style="font-family: 'Playfair Display', cursive; font-weight: bold;">
        <h1>Cart Review</h1>
      </div>
      <p v-if="cart_list.length == 0">Your cart is empty!</p>
      <!--<div class="card-group">-->
          <div v-for="cake in cart_list" v-bind:key="cake.id">
            <!--<div class="card m-2 p-2 mx-auto" >
                <img class="card-img-top" v-bind:src="require('../assets/cake/' + cake.image)" style="width: 100px; height: 80px;">-->
                <!--<div class="card-body">-->
                  <!--<h5 class="card-title">{{ cake.name }}</h5>
                  <p class="card-text">{{ cake.description }} ${{ cake.price }} </p>
                  <a href="#" class="btn btn-primary" @click = "removeItemFromCart(cake)"><i class="fa fa-trash"></i></a>-->
                <!--</div>-->
              <!--</div>-->
              <div class="row" style="background-color: pink; align-items: center; margin: 1.5rem;">
                <div class="col-md-3">
                    <img v-bind:src="require('../assets/cake/' + cake.image)" style="width: 100px; height: 80px;">
                </div>
                <div class="col-md-3">
                    <h5 class="card-title">{{ cake.name }}</h5>
                </div>
                <div class="col-md-3">
                    <p class="card-text">{{ cake.description }} ${{ cake.price }} </p>
                </div>
                <div class="col-md-3">
                    <a href="#" class="btn btn-primary" @click = "removeItemFromCart(cake)"><i class="fa fa-trash"></i></a>
                </div>
            </div>

          </div>
        <!--</div>-->
        <div class="itemsCart">
            <p cart_list.length>Items: {{ cart_list.length }}</p>
        </div>
      <div class="totalPrice">
        <h3 class="totalText">Total: ${{ total }}.00</h3>
      </div>
      
      <!--<router-link class="btn btn-proceed" to="/checkout">Proceed to Checkout</router-link>-->
      <div v-if="!paid" id="paypal-button-container"></div>
      <div v-else id="confirmation">Order complete!</div>
  
    </div>
  </template>
  <script>

  
  export default {
    name: 'CheckoutView',
    components: {

    },
    data() {
      return {
      };
    },

    methods: {
      removeItemFromCart(item) {
        this.$store.commit("removeCartItem", item);
      }
    },
    computed: {
    
      cart_list() {
        return this.$store.getters.getCart;
      },
      total(){
        var amount=0;
        var cakes = this.$store.getters.getCart;
        for(var i = 0; i<cakes.length; i++){
          amount += parseFloat(cakes[i].price);
        }
        return amount;
      }
    },
    mounted() {
    }
  }
  
  </script>
  <style>
  .btn-proceed{
    font-size: 16px;
    font-weight: bold;
    padding: 0.5rem;
    color: white;
    background-color: pink;
  }
  .btn-primary{
    background-color: pink;
    border-color: pink;
    font-weight: bold;
  }
  .card-title{
    font-weight: bold;
  }
  </style>