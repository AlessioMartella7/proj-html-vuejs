<script>

import {events} from '../data/event'
export default {
  data() {
    return {

    }
  },

  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
  }

}
</script>

<template>
<div class="container">
  <div class="row">
    <div v-for="(event, index) in events" class="col-4">
          <div class="card" style="width: 18rem;">
      <img :src="getImagePath(event.img)" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A third item</li>
          </ul>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
