<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
// import Packs from './components/Packs.vue';
import MouseFollow from './components/MouseFollow.vue';
import Carosello from './components/Carosello.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    // Packs,
    MouseFollow,
    Carosello
  },
  data() {
    return {
      AppHeader,
      AppMain,
      AppFooter,
      Sidebar,
      // Packs,
      MouseFollow,
      Carosello,
      showSidebar: false // Nascondi temporaneamente la sidebar
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <Sidebar v-if="showSidebar" />
  <!-- <Packs /> -->
  <MouseFollow />
  <Carosello />
</template>

<style lang="scss"></style>
