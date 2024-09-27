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
      <div class="card h-100">
          <img :src="getImagePath(event.img)" class="card-img-top" :alt="event.race">
          <div class="card-body pb-0">
            <h5 class="card-title fw-bold">{{ event.race }}</h5>
            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon :icon="['far', 'clock']" class="me-2" /> <span>{{ event.date }}</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="me-2" /> <span>{{ event.location }}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>
