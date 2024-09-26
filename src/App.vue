<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import quickLinks, { trainings, contactInfo, socialIcons } from './data/store.js';



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      quickLinks,
      trainings,
      contactInfo,
      socialIcons
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter :quickLinks="quickLinks" :trainings="trainings" :contactInfo="contactInfo" :socialIcons="socialIcons" />

</template>

<style lang="scss"></style>
