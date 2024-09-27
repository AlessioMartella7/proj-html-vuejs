<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// import Sidebar from './components/Sidebar.vue';
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';

import MouseFollow from './components/MouseFollow.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    // Sidebar,
    AppMainAboutUs,
    AppMainEvents,

  },
  data() {
    return {
      showSidebar: true,
      showAppMain: false
    }
  },


}

</script>

<template>
  <AppHeader />
  <!-- <Sidebar /> -->
  <AppMain />
  <AppMainAboutUs />
  <AppMainEvents />
  <Sidebar v-if="showSidebar" />
  <AppMain v-if="showAppMain" />
  >>>>>>> main
  <AppFooter />
  <MouseFollow />
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./styles/general.scss" as *;
</style>
