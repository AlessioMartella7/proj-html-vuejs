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

    }
  },

}
</script>

<template>
  <AppMainAboutUs />
  <AppMainEvents />
  <AppMainPacks />
  <AppMainNews />
</template>

<style lang="scss" scoped></style>