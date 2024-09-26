<script>
import AppMainAboutUs from './components/AppMainAboutUs.vue';
import AppMainEvents from './components/AppMainEvents.vue';
import AppMainPacks from './components/AppMainPacks.vue';

export default {
  components:
     AppMainAboutUs,
     AppMainEvents,
     AppMainPacks,
  data() {
    return {

    }
  }
}
</script>

<template>
  <AppMainAboutUs/>
  <AppMainEvents/>
  <AppMainPacks/>

</template>

<style scoped></style>