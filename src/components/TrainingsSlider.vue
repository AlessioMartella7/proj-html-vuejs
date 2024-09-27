<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <flickity ref="flickity" :options="flickityOptions">
  <div class="carousel-cell">Primo elemento del carosello</div>
  <div class="carousel-cell">2</div>
  <div class="carousel-cell">3</div>
  <div class="carousel-cell">4</div>
  <div class="carousel-cell">5</div>
</flickity>
 
<!-- if you don't want to use the buttons Flickity provides -->
<button @click="previous()">Custom Previous Button</button>
<button @click="next()">Custom Next Button</button>
</template>
