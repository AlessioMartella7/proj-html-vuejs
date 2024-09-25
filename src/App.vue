<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar
  },
  data() {
    return {
      AppHeader,
      AppMain,
      AppFooter,
      Sidebar
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <Sidebar />
</template>

<style lang="scss"></style>
