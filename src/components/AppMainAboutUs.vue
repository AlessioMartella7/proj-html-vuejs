<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
<div class="container">
    <div class="row">

        <!-- left side -->
        <div class="col-8">
            <img id="bikers" src=".././assets/img_aboutus/bike-player.png" alt="player-img">
                <img id="gear" class="rotate" src="../assets/img_aboutus/bike-circle.png" alt="gear">
        </div>

        <!-- right side -->
        <div class="col-4 d-flex flex-column justify-content-center align-items-start">
            <div class=" top-text">
                <h3>Do you want to be a professional cyclist?</h3>
                <p>We offer 6 courses of varying difficulty and beautiful scenary that cyclist of all levels can enjoy it. You will learn cycling from professionals
                    with our component and experienced staff. You will have a lot of fun with our amazing spaces.
                </p>
             </div>
             <div class="divider">
                <img src=".././assets/img_aboutus/divider.jpg" alt="divider-img">
             </div>


             <div class="main-content">

                <!-- professional team -->
                <div class="team d-flex align-items-center">
                    <img class="img-fluid" src="../assets/img_icons/f1-helmet-svgrepo-com.svg" alt="race-helmet">
                    <div class="text">
                        <h4 class="fw-bold">Professional Team</h4>
                        <p>We make you professional by adding your sincerity as well as professionalism.</p>
                    </div>
                </div>

                <!-- professional trainings -->
                <div class="trainings d-flex align-items-center">
                    <img class="img-fluid" src="../assets/img_icons/helmet-svgrepo-com.svg" alt="helmet">
                    <div class="text">
                        <h4 class="fw-bold">Professional trainings</h4>
                        <p>We always ride with the best equipment, respecting nature and fun.</p>
                    </div>
                </div>

                <!-- button -->
                <button type="button" class="btn btn-dark btn-lg px-5 pt-3 pb-3 rounded-0 text-white fs-6">Get to know us &RightArrow;</button>
             </div>

        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
[class*="col"]{border: 1px dashed red;} //col higlight

.main-content img {
    height: 80px;
}
#bikers{
    position: relative;
    z-index: 1;
}

#gear {
    position: absolute;
    top: 10%;
    left: 16%;
}

.rotate{
    animation: rotation 15s infinite linear;}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
    }

</style>