<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';
import Packs from './components/Packs.vue';
import MouseFollow from './components/MouseFollow.vue';

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
    }
  }
}
</script>

<template>
  <AppHeader />
  <Sidebar />
  <AppMain />
  <AppMainAboutUs />
  <AppMainEvents />
  <AppTrainers />
  <AppFooter />
  <Packs />
  <MouseFollow />
</template>

<style lang="scss">
@import './styles/general.scss';
</style>