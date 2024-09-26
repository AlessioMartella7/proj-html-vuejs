<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import store, { quickLinks } from './data/store.js';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
  },
  data() {
    return {
      AppHeader,
      AppMain,
      AppFooter,
      Sidebar,
      store
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter :quickLinks="store.quickLinks" :trainings="store.trainings" />
  <Sidebar />
</template>

<style lang="scss"></style>
