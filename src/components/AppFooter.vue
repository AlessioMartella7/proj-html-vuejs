<script>

export default {
  data() {
    return {

    }
  },

  props: {
    quickLinks: {
      type: Array,
      Required: true
    },

    trainings: {
      type: Array,
      Required: true
    },

    contactInfo: {
      type: Array,
      Required: true
    },

    socialIcons: {
      type: Array,
      Required: true
    }

  }
}
</script>

<template>
  <footer class="w-100 p-1">
    <div class="container ">
      <div class="row py-3 d-flex justify-content-between">
        <Transition name="slide-fade-up" appear>
          <div class="col-3">
            <!--# Contatti -->
            <div id="footer-contacts">
              <img src="../assets/logos/logo-footer-gobike.png" alt="footer_gobike_logo" class="img-fluid mb-3 w-75">

              <!-- Contacts comp -->
              <ul>
                <li class="list-unstyled mb-4" v-for="(item, index) in contactInfo" :key="index">
                  <font-awesome-icon :icon="item.icon" class="icon fs-4 me-4" />
                  <span>{{ item.info }}</span>
                </li>
              </ul>

              <!-- Social comp -->
              <div class="social d-flex">
                <div class=" social-icon col-3 p-1 m-1 fs-5 text-center" v-for="(item, index) in socialIcons"
                  :key="index">
                  <a><font-awesome-icon :icon="item.icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <!--# Form -->
        <div class="col-4 mt-3">
          <Transition name="slide-fade-up" appear>
            <div>
              <h3>Join our newsletter</h3>
              <p class="my-4"> Subscribe to receive useful information.</p>
            </div>
          </Transition>
          <form>
            <Transition name="slide-fade-in-slow" appear>
              <input type="email" class="mb-1 p-3 border border-none" id="exampleFormControlInput1"
                placeholder="Your email address">
            </Transition>
            <Transition name="slide-fade-up-slow" appear>
              <button type="button" class="btn btn-light">Subscribe <font-awesome-icon
                  :icon="['fas', 'arrow-right']" /></button>
            </Transition>
          </form>

        </div>

        <Transition name="slide-fade-up" appear>
          <!--# lista Trainings -->
          <div class="col-2 mt-3">
            <h3>Trainings</h3>
            <ul class="my-3">
              <li v-for="(item, i) in trainings" :key='i'><font-awesome-icon :icon="['fas', 'minus']" /> {{ item }}</li>
            </ul>
          </div>
        </Transition>

        <Transition name="slide-fade-up" appear>
          <!--# lista Quick Links -->
          <div class="col-2 mt-3">
            <h3>Quick links</h3>
            <ul class="my-3">
              <li v-for="(item, i) in quickLinks" :key='i'><font-awesome-icon :icon="['fas', 'minus']" /> {{ item.name
                }}
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
    <!--# Rights Reserved -->
    <div>
      <p class=" text-center my-4">© 2024 Gobike - All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;



footer {
  font-family: "Poppins", sans-serif;
  background-color: black;
  color: white;
}

ul {
  padding-left: 5px;
  line-height: 30px;
  list-style-type: none;
}

.social-icon {
  border: 1px solid gray;
  cursor: pointer;
  width: 70px;
  padding: 10px;

  &:nth-child(1):hover {
    color: #1877F2;
  }

  &:nth-child(2):hover {
    color: #E1306C;
  }

  &:nth-child(3):hover {
    color: #1DA1F2;
  }

  &:hover {
    transform: translateY(-5px);
  }
}

input,
button {
  width: 100%;
  height: 60px;
}

input {
  background-color: white;
}

/*** ANIMATIONS ***/

// Slide-fade-up

.slide-fade-up-enter {
  opacity: 0;
}

.slide-fade-up-enter-active {
  animation: slide-fade-up 0.7s ease-in-out forwards;
  transition: opacity 0.7s;
}


@keyframes slide-fade-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Slide-fade-up-slow

.slide-fade-up-slow-enter {
  opacity: 0;
}

.slide-fade-up-slow-enter-active {
  animation: slide-fade-up-slow 1.3s ease-in-out forwards;
  transition: opacity 1s;
}

@keyframes slide-fade-up-slow {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Slide-fade-in

.slide-fade-in-slow-enter {
  opacity: 0;
}

.slide-fade-in-slow-enter-active {
  animation: slide-fade-in-slow 1.3s ease-in-out forwards;
  transition: opacity 1s;
}

@keyframes slide-fade-in-slow {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
