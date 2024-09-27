<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';
import Packs from './components/Packs.vue';
import MouseFollow from './components/MouseFollow.vue';
import ReturnButton from './components/ReturnButton.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    AppMainAboutUs,
    AppMainEvents,
    Packs,
    MouseFollow
  },

  data() {
    return {
      showSidebar: true,
      showAppMain: true,
      quickLinks,
      trainings,
      contactInfo,
      socialIcons
    }
  },

}

</script>

<template>
  <AppHeader />
  <Sidebar />
  <AppMain />
  <AppMainAboutUs />
  <AppMainEvents />
  <AppFooter />
  <Packs />
  <MouseFollow />
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./styles/general.scss" as *;

body::-webkit-scrollbar-track {

  background-color: white;
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: white;
}

body::-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>
