<template>
    <div class="container">
    </div>
  </template>
  <script>
  //const PayPalButton = paypal.Buttons.driver('vue', window.Vue)

  
  export default {
    name: 'CheckoutView',
    components: {
      //'paypal-buttons': PayPalButton,
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
      /*
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
      }*/
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