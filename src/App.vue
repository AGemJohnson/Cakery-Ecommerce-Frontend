<template>
  <header>
    <div id="app">
      <nav>
        <a href="#" class="logo"> <i class="fas fa-cake"></i> Heavenly Cravings </a>

        <router-link to="/">Home</router-link> |
        <router-link to="/product">Products</router-link> | 
        <router-link to="/custom">Custom Order</router-link> | 
        <router-link to="/gallery">Gallery</router-link> | 
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/about" class="cartIcome"><i class="fa-solid fa-cart-shopping"></i></router-link>

      </nav>
      <router-view/>
    </div>
  </header>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgb(228, 55, 112);
  position: auto;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: pink;
}
.fa-cart-shopping{
  float: right;
}
.logo{
  float: left;
  font-family: 'Great Vibes', cursive;
  font-size: 23px;
  text-decoration: none;
  justify-content: flex-start;
}
</style>

<script>

</script>