<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import store from './data/store';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar

  },
  data() {
    return {
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
