<script>
export default {
  components: {
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true
        // any options from Flickity can be used
      }      
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted: {
  }
}
</script>

<template>
  <div class="container-md">
    <Flickity :options="{ wrapAround: true }">
      <img v-for="i in 5" :src="`https://picsum.photos/id/${i}/200/200`" alt="">
    </Flickity>
  </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss';

// Remove scrollbar in Chrome, Safari and Opera
::-webkit-scrollbar {
  display: none;
}
// Remove scrollbar in IE and Edge, and in Firefox
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.row {
  overflow-x: auto;
}

.card {
  border-radius: 0;
  height: 400px;
  border: 10px solid black;
}

</style>