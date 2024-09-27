<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {events} from '../data/event';

export default {
  data() {
    return {
      events,
      viewMode:'box',
    }
  },

  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
    setView(view){
      this.viewMode = view;
    }
  }

}
</script>

<template>
<div class="container">

  <!-- bottoni per stabilire tipo di visualizzazione -->
  <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-primary me-2" @click="setView('box')">#</button>
      <button class="btn btn-secondary" @click="setView('list')">=</button>
  </div>


  <div class="row ">
    <div v-for="event in events" :class="viewMode === 'box' ? 'col-4' : 'col-12'">
      <div :class="viewMode === 'list' ? 'd-flex align-items-center border secondary-subtle' : 'card h-100'">

          <img :src="getImagePath(event.img)" class="card-img-top" :class="viewMode === 'list' ? 'img-list-view p-2' : ''":alt="event.race">
          <div class="card-body" :class="viewMode === 'list' ? 'd-flex flex-column justify-content-between ms-3' : 'pb-0'">

            <h5 class="card-title fw-bold">{{ event.race }}</h5>

            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon :icon="['far', 'clock']" class="me-2" />
              <span>{{ event.date }}</span>
            </div>

            <div class="d-flex align-items-center mb-2">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="me-2" />
              <span>{{ event.location }}</span>
            </div>
              <span>{{ event.type }}</span>
            
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>

.img-list-view {
  width: 600px;
  height: 150px;
  object-fit: cover;
}

.d-flex .card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



</style>
