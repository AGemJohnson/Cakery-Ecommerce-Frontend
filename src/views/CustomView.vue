<template>
    <div>
        <section class="customImage">
        <div class="customText">
            <p>Custom Order</p>
        </div> 
        </section>
        <br/>
        
        <div class="customOrderText">
        <h4>Order Form</h4>
        </div>

        <div class="container-custom">
            <form action="mailto:gemjohnson95@gmail.com?subject=Heavenly Cravings Custom Cake Order" method="get" enctype="text/plain">
                <br>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" required placeholder="Enter full name">

                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" required placeholder="example@live.com">

                <label for="Desired date">Desired Date</label>
                <input type="text" id="desired date" v-model="desireddate" placeholder="mm/dd">

                <label for="Occasion">Occasion</label>
                <input type="text" id="occasion" v-model="occasion" placeholder="birthday, dedication, wedding, etc">

                <div>Cake Flavor: {{ flavor }}</div>

                <select v-model="flavor">
                <option disabled value="">Please select one</option>
                <option>Chocolate</option>
                <option>Red Velvet</option>
                <option>Pound</option>
                <option>Vanilla Funfetti</option>
                <option>Plain Vanilla</option>
                <option>Carrot Cake</option>
                </select>

                <div>Cake Size: {{ size }}</div>

                <select v-model="size">
                <option disabled value="">Please select one (round cake)</option>
                <option>6"</option>
                <option>8"</option>
                <option>10"</option>
                <option>12"</option>
                </select>

                <div>Frosting: {{ frosting }}</div>

                <select v-model="frosting">
                <option disabled value="">Please select one</option>
                <option>Marshmallow</option>
                <option>Creamcheese</option>
                <option>Buttercream</option>
                <option>Plain</option>
                </select>

                <div>Filling: {{ filling }}</div>

                <select v-model="filling">
                <option disabled value="">Please select one</option>
                <option>Chocolate fudge</option>
                <option>Creamcheese</option>
                <option>Cookies n' cream buttercream</option>
                <option>Vanilla buttercream</option>
                <option>None</option>
                </select>

                <label for="description">Description</label>
                <textarea id="description" name="description" placeholder="Please describe further if needed." style="height:200px"></textarea>
                

                <button onclick="location.href='mailto:gemjohnson95@gmail.com?subject=Heavenly Cravings Custom Cake Order';">Submit</button>




            </form>
        </div>

        
    </div>

</template>
<style>
.customImage{
  background-image: url("C:\Users\Arnell\OneDrive\Desktop\Cakery E-commerce Store - Capstone Project\stock16.jpg");
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.customText{
    color: white;
    font-weight: bold;
    font-size: 70px;
    margin-top: 0;
}
.customOrderText h4{
  font-family: 'Playfair Display', cursive;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: rgb(17, 17, 17);
  text-decoration: underline 2%;
  text-underline-position: below;
  text-underline-offset: 0.9rem;
}
.container-custom{
    font-weight: bold;
    font-family: "Playfair Display", cursive;
    font-size: 17px;
    background-image: url(C:\Users\Arnell\OneDrive\Desktop\cakery\cakery_app\src\assets\cake\funfetti.jpg);
  border-radius: 4px;
  background-color: pink;
  padding: 20px;
  margin-top: 3%;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 5%;
}
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical;/* Allow the user to vertically resize the textarea (not horizontally) */
  
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

</style>
<script>
export default {
  name: 'CustomView',
  components: {

  },
  data() {
    return {
        name:'',
        email: '',
    }
  },
  methods: {
    submitForm(){
        
    }
  },
  computed: {
   
  },

  mounted() {
  }
}

</script>