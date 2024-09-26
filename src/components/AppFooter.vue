<script>
import { contactInfo } from '../data/contactInfo';
import { socialIcons } from '../data/contactInfo';

export default {
  data() {
    return {
      contactInfo,
      socialIcons,

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
            <img src="../assets/logos/logo-footer-gobike.png" alt="footer_gobike_logo" class="img-fluid mb-3">

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
</style>