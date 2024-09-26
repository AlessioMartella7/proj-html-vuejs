<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {events} from '../data/event';

export default {
  data() {
    return {
      events,
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
  <div class="row ">
    <div v-for="event in events" class="col-4 my-3">
          <div class="card" style="width: 25rem;">
      <img :src="getImagePath(event.img)" class="card-img-top" :alt=event.race>
        <div class="card-body pb-0">
          <h5 class="card-title fw-bold ">{{ event.race }}</h5>
        </div>
        <font-awesome-icon :icon="['far', 'clock']" />
        <font-awesome-icon :icon="['fas', 'location-dot']" />
          <ul class="list-group list-group-flush border-0">
            <li class="list-group-item border-0 fs-6">{{ event.date }}</li>
            <li class="list-group-item border-0">{{ event.location }}</li>
            <li class="list-group-item">{{ event.type }}</li>
          </ul>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>
