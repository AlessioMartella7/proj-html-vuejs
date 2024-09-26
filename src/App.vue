<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import Packs from './components/Packs.vue';
import MouseFollow from './components/MouseFollow.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    Packs,
    MouseFollow
  },
  data() {
    return {
      AppHeader,
      AppMain,
      AppFooter,
      Sidebar,
      Packs,
      MouseFollow
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
  <MouseFollow />
</template>

<style lang="scss"></style>
