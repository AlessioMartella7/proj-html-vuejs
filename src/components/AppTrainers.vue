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
<h2 class="text-center"><b>Our Expert Trainers</b></h2>
<p class="text-center">Learn to ride a bike from the experts.</p>
<!--Card section-->
 <!-- Card section -->
 <div class="container">
      <div class="row mt-5">
        <!-- Card 1 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker1.jpg" alt="Card image cap">
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker4.jpg" alt="Card image cap">
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker3.jpg" alt="Card image cap">
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <div class="image-container">
              <img class="card-img-top" src="../assets/img_bikers/biker2.jpg" alt="Card image cap">
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";
section{
   background-color: #FBFBFB;
}

.card-img-top img{
    width: 100%;
    height: auto;
}
.card:hover .card-img-top {
  filter: brightness(50%);
}
.image-container {
  position: relative; 
}

.image-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33%; 
  background-color: black;
}


</style>