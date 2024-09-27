<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <!-- left side -->
            <div class="col-7 position-relative">
                <div class="image-container">
                    <img id="bikers" src="../assets/img_aboutus/bike-player.png" alt="player-img">
                    <img id="gear" class="rotate" src="../assets/img_aboutus/bike-circle.png" alt="gear">
                </div>
            </div>

            <!-- right side -->
            <div class="col-5 d-flex flex-column justify-content-center align-items-start">
                <div class="top-text">
                    <h3 class="fw-bold">Do you want to be a professional cyclist?</h3>
                    <p class="mb-1">We offer 6 courses of varying difficulty and beautiful scenery that cyclists of all
                        levels can enjoy. You will learn cycling from professionals
                        with our competent and experienced staff. You will have a lot of fun in our amazing spaces.
                    </p>
                </div>
                <div class="divider">
                    <img src="../assets/img_aboutus/divider.jpg" alt="divider-img">
                </div>

                <div class="main-content">
                    <!-- professional team -->
                    <div class="team d-flex align-items-center">
                        <img class="img-fluid" src="../assets/img_icons/f1-helmet-svgrepo-com.svg" alt="race-helmet">
                        <div class="text ms-3 pt-4">
                            <h4 class="fw-bold">Professional Team</h4>
                            <p>We make you professional by adding your sincerity as well as professionalism.</p>
                        </div>
                    </div>

                    <!-- professional trainings -->
                    <div class="trainings d-flex align-items-center">
                        <img class="img-fluid" src="../assets/img_icons/helmet-svgrepo-com.svg" alt="helmet">
                        <div class="text ms-3">
                            <h4 class="fw-bold">Professional trainings</h4>
                            <p>We always ride with the best equipment, respecting nature and having fun.</p>
                        </div>
                    </div>

                    <!-- button -->
                    <button type="button"
                        class="btn btn-dark btn-lg px-5 pt-3 pb-3 rounded-0 text-white fs-6 my-4 fw-bold">Get to know us
                        &RightArrow;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-content img {
    height: 80px;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
}

#bikers {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
}

#gear {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 100%;
    height: auto;
}

.rotate {
    animation: rotation 15s infinite linear;
}

@keyframes rotation {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(359deg);
    }
}

@media screen and (max-width: 1200px) {
    #gear {
        width: 90%;
    }
}

@media screen and (max-width: 992px) {
    #gear {
        width: 80%;
    }
}

@media screen and (max-width: 768px) {
    #gear {
        width: 70%;
    }
}

@media screen and (max-width: 576px) {
    #gear {
        width: 60%;
    }
}
</style>
