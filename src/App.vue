<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar.vue';
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Sidebar,
    AppMainAboutUs,
    AppMainEvents
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
  <AppMainAboutUs/>
  <AppMainEvents/>
  <AppFooter />
</template>

<style lang="scss"></style>
