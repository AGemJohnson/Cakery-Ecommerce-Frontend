<template>
    <div>
        <section class="contactImage">
        <div class="contactText">
            <p>Contact Us</p>
        </div> 
        </section>

<br/>

    <div class="contact-text">
        <h2>Reach out to us!</h2>
    </div>

    <div class="contact-container">
        <form action="action_page.php">
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter first name">
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter last name">

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email">

          <label for="description">Description</label>
          <textarea id="description" name="description" placeholder="Write message here." style="height:200px"></textarea>
 <!--     
          <button class="button" onclick = "add_to_cart('Oreo-cake', '55.00')">Send Message</button>
 --> 
        </form>
      </div>
    </div>

</template>
<style>
.contactImage{
  background-image: url("C:\Users\Arnell\OneDrive\Desktop\Cakery E-commerce Store - Capstone Project\stock16.jpg");
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.contactText{
    color: white;
    font-weight: bold;
    font-size: 70px;
    margin-top: 0;
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
.contact-text{
font-family: 'Playfair Display', serif;
  font-size: 30px;
  text-align: center;
  color: rgb(17, 17, 17);
  top: 20%;
  bottom: 20%;
  text-decoration: underline 2%;
  text-underline-position: below;
  text-underline-offset: 0.9rem;
}

/* Add a background color and some padding around the form */
.contact-container {
  border-radius: 5px;
  background-color: pink;
  padding: 20px;
  margin-top: 3%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 5%;
}

</style>


    