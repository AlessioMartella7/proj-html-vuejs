<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import MouseFollow from './components/MouseFollow.vue';
import ReturnButton from './components/ReturnButton.vue';
import Loader from './components/Loader.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    MouseFollow,
    ReturnButton,
    Loader
  },
  data() {
    return {
      showSidebar: false,
      showAppMain: true
    }
  },
  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  }
}
</script>

<template>

  <body>

    <AppHeader />
    <Sidebar v-if="showSidebar" />
    <AppMain v-if="showAppMain" />
    <AppFooter />
    <MouseFollow />
    <ReturnButton />
    <Loader />
  </body>
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
