<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';
<<<<<<< HEAD
import AppTrainers from './components/AppTrainers.vue';

=======
import Packs from './components/Packs.vue';
import MouseFollow from './components/MouseFollow.vue';
>>>>>>> main

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    AppMainAboutUs,
    AppMainEvents,
<<<<<<< HEAD
    AppTrainers
=======
    Packs,
    MouseFollow
>>>>>>> main
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
<<<<<<< HEAD
  <AppMainAboutUs/>
  <AppMainEvents/>
  <AppTrainers />
=======
  <AppMainAboutUs />
  <AppMainEvents />
>>>>>>> main
  <AppFooter />
  <Packs />
  <MouseFollow />
</template>

<style lang="scss">
@import './styles/general.scss';
</style>