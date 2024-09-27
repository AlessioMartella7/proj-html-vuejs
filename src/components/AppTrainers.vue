<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons' 
import { socialIcons } from '../data/store'


export default {
  components: {
    FontAwesomeIcon,
    faFacebookF, faInstagram, faXTwitter,
    socialIcons

  },
  data() {
    return {
      trainers: [
        { name: "Michael Lee", role: "Biker", image:"../../public/img_bikers/biker1.jpg"  },
        { name: "Robert Lee", role: "Biker", image:"../../public/img_bikers/biker4.jpg"  },
        { name: "John Doe", role: "Biker", image:"../../public/img_bikers/biker3.jpg" },
        { name: "Emily Brown", role: "Biker", image:"../../public/img_bikers/biker2.jpg" }
      ],
      socialIcons: {
        facebook: faFacebookF,
        instagram: faInstagram,
        twitter: faXTwitter
      }
    };
  }
}
</script>

<template>
<section>
  <h3 class="text-center"><b>Our Expert Trainers</b></h3>
  <p class="text-center text-secondary">Learn to ride a bike from the experts.</p>

  <!-- Card section -->
  <div class="container">
    <div class="row mt-5">
      <div class="col" v-for="(trainer, index) in trainers" :key="index">
        <div class="card" style="width: 18rem;">
          <div class="image-container">
            <img class="card-img-top" :src="trainer.image" alt="Trainer image">
            <div class="card-text">
              <h5>{{ trainer.name }}</h5>
              <small>{{ trainer.role }}</small>
              <div class="social-icons m-2">
                <FontAwesomeIcon :icon="socialIcons.facebook" />
                <FontAwesomeIcon :icon="socialIcons.instagram" />
                <FontAwesomeIcon :icon="socialIcons.twitter" />
              </div>
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
  object-fit: cover; 
}


.card:hover .card-img-top {
  filter: brightness(50%); 
  transform: scale(1.1); 
}

.image-container {
  position: relative; 
  width: 100%; 
  height: 350px; 
  overflow: hidden; 
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


.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px; 
}

.social-icons .fa {
  font-size: 0.8rem;
  color: white; 
}
</style>