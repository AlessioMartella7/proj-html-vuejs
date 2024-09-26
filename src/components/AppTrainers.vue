<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



export default {
    components:{
    FontAwesomeIcon,
    
    },
  data() {
    return {
      
    }
  }
}
</script>

<template>
<section>
<h3 class="text-center"> <b>Our Expert Trainers</b></h3>
<p class="text-center text-secondary">Learn to ride a bike from the experts.</p>
<!--Card section-->
 <!-- Card section -->
 <div class="container">
      <div class="row mt-5">
        <!-- Card 1 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker3.jpg" alt="Card image cap">
              <div class="card-text">
                <h5>John Doe</h5>
                <small>Biker</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker2.jpg" alt="Card image cap">
              <div class="card-text">
                <h5>John Doe</h5>
                <small>Biker</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker1.jpg" alt="Card image cap">
              <div class="card-text">
                <h5>John Doe</h5>
                <small>Biker</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker4.jpg" alt="Card image cap">
              <div class="card-text">
                <h5>John Doe</h5>
                <small>Biker</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";

section {
  background-color: #FBFBFB;
}

.card {
  position: relative;
  overflow: hidden; 
}

.card-img-top {
  width: 100%;
  height: auto;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
}

.card:hover .card-img-top {
  filter: brightness(50%); 
  transform: scale(1.1); 
}

.image-container {
  position: relative; 
}

.card-text {
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px 10px 10px; 
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33%;
  transition: height 0.4s ease-in-out;
}

.card:hover .card-text {
  height: calc(33% + 5px); 
}

small{
    font-size: 0.9em; 
  display: block; 
  margin-top: 5px; 
  color: #B3B3B3;
}
</style>