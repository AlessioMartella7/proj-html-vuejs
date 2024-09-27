<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// import Sidebar from './components/Sidebar.vue';

import MouseFollow from './components/MouseFollow.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    // Sidebar,

  },
  data() {
    return {
      showSidebar: true,
      showAppMain: true
    }
  },

}

</script>

<template>
  <AppHeader />
  <!-- <Sidebar /> -->
  <Sidebar v-if="showSidebar" />
  <AppMain v-if="showAppMain" />
  <AppFooter />
  <MouseFollow />
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./styles/general.scss" as *;
</style>
