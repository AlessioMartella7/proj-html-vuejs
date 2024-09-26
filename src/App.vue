<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import Packs from './components/Packs.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    Packs
  },
  data() {
    return {
      AppHeader,
      AppMain,
      AppFooter,
      Sidebar,
      Packs
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <Sidebar />
  <Packs />
</template>

<style lang="scss"></style>
