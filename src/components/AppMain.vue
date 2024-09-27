<script>

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
  <AppMainNews />
  <AppMainAboutUs />
  <AppMainEvents />
  <AppMainPacks />
</template>

<style lang="scss" scoped></style>