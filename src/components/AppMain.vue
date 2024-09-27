<script>

import AppMainAboutUs from './AppMainAboutUs.vue';
import AppMainEvents from './AppMainEvents.vue';
import AppMainPacks from './AppMainPacks.vue';
import AppMainNews from './AppMainNews.vue';

export default {
  components: {
    AppMainAboutUs,
    AppMainEvents,
    AppMainPacks,
    AppMainNews
  },


  data() {
    return {
      mainText: 'Main'
    }
  },

}
</script>

<template>
  <p>Main</p>
</template>

<style scoped></style>