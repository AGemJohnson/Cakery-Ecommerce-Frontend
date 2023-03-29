<template>
  <div>
    <div class="cartHeader">
      <h1>Your Cart</h1>
    </div>
    <p v-if="cart_list.length == 0">Your cart is empty!</p>
    <div class="card-group">
        <div v-for="cake in cart_list" v-bind:key="cake.id">
          <div class="card m-2 p-2 mx-auto" >
              <img class="card-img-top" v-bind:src="require('../assets/cake/' + cake.image)" style="width: 250px; height: 300px;">
              <div class="card-body">
                <h5 class="card-title">{{ cake.name }}</h5>
                <p class="card-text">{{ cake.description }} ${{ cake.price }} </p>
                <a href="#" class="btn btn-primary" @click = "removeItemFromCart(cake)"><i class="fa fa-trash"></i></a>
              </div>
            </div>
        
        </div>
      </div>
    <div class="totalPrice">
      <h3 class="totalText">Total: {{ total }}</h3>
    </div>
    
    <router-link class="btn btn-proceed" to="/checkout">Proceed to Checkout</router-link>
    

  </div>
</template>
<script>
export default {
  name: 'AboutView',
  components: {

  },
  data() {
    return {
    }
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

