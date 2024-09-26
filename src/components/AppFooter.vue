<script>
import { contactInfo } from '../data/store.js'
import { socialIcons } from '../data/store.js';


export default {
  data() {
    return {
      contactInfo,
      socialIcons,
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
    }
  }
}
</script>

<template>
  <p>Footer</p>
  <footer class="w-100 p-1">
    <div class="container ">
      <div class="row p-3">
        <div class="col-3">
          <!--# Contatti -->
          <div id="footer-contacts">
            <img src="../assets/logos/logo-footer-gobike.png" alt="footer_gobike_logo" class="img-fluid mb-3 w-75">

            <!-- Contacts comp -->
            <ul class="m2">
              <li class="list-unstyled mb-4" v-for="(item, index) in contactInfo" :key="index">
                <font-awesome-icon :icon="item.icon" class="icon fs-4 me-4" />
                <span>{{ item.info }}</span>
              </li>
            </ul>

            <!-- Social comp -->
            <div class="social d-flex justify-content-around row">
              <div class="social-icon col-3 p-1 text-center" v-for="(item, index) in socialIcons" :key="index">
                <a><font-awesome-icon :icon="item.icon" /></a>
              </div>
            </div>

          </div>
        </div>
        <!--# Form -->
        <div class="col-4 mt-3">
          <h3>Join our newsletter</h3>
          <p class="my-3"> Subscribe to receive useful information.</p>
          <form>
            <input type="email" class="mb-1 p-3 border border-none" id="exampleFormControlInput1"
              placeholder="Your email address">
            <button type="button" class="btn btn-light">Subscribe <font-awesome-icon
                :icon="['fas', 'arrow-right']" /></button>
          </form>

        </div>
        <!--# lista Trainings -->
        <!--# lista Quick Links -->

      </div>
    </div>
    <!--# Rights Reserved -->
    <div>
      <p class="text-center my-4">© 2024 Gobike - All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

footer {
  background-color: black;
  color: white;
}

ul {
  padding: 0;
}

.social-icon {
  border: 1px solid gray;
  cursor: pointer;

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
</style>