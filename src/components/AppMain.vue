<script>
import AppMainAboutUs from './AppMainAboutUs.vue'
import AppMainEvents from './AppMainEvents.vue';
import AppMainPacks from './AppMainPacks.vue'
import {event} from '../data/event'

export default {
  
  components:{
     AppMainAboutUs,
     AppMainEvents,
     AppMainPacks,
    },
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