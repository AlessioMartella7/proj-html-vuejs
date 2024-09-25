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
  <footer class="w-100">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <!-- Contatti -->
          <div id="footer-contacts">
            <img src="../assets/logos/logo-footer-gobike.png" alt="footer_gobike_logo" class="img-fluid">

            <!-- Contacts comp -->
            <ul class="m2">
              <li class="list-unstyled mb-4" v-for="(item, index) in contactInfo" :key="index">
                <font-awesome-icon :icon="item.icon" class="icon fs-4 me-4" />
                <span>{{ item.info }}</span>
              </li>
            </ul>
            <!-- Social comp -->
            <div class="social d-flex justify-content-around row">
              <div class="social-icon col-3 p-2 text-center" v-for="(item, index) in socialIcons" :key="index">
                <a><font-awesome-icon :icon="item.icon" /></a>

              </div>

            </div>
          </div>
        </div>
        <!-- Form -->
        <!-- lista Trainings -->
        <!-- lista Quick Links -->

      </div>
    </div>
    <!-- Rights Reserved -->
    <div>
      <p class="text-center my-4">2024 Gobike - All rights reserved.</p>
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
}
</style>