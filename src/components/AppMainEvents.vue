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
    },
    getStartDate(startDate) {
      const start = new Date(startDate);
      return start.getDate();
    },
    
    getEndDate(endDate) {
      const end = new Date(endDate);
      return end.getDate();
    },
    
    getMonthShort(date) {
      const eventDate = new Date(date);
      return eventDate.toLocaleString('en-US', { month: 'short' });
    }
  }

}
</script>

<template>
<div class="container">

  <div class="text-center">
   <h3 class="text-center fw-bold">Don't Miss Our Events!</h3>
   <p>Get the amazing cycling experience.</p>
  </div>
  
  <div class="d-flex justify-content-between align-items-center pt">
    <div>
        <p class="fs-4 mb-0">Events</p>
    </div>
      <div :class="viewMode === 'list' ? 'mb-3' : ''">
          <!-- bottoni per stabilire tipo di visualizzazione -->
          <button class="btn-box btn btn-white me-2" @click="setView('box')":class="{ 'active': viewMode === 'box' }"><font-awesome-icon :icon="['fas', 'grip']" /></button>
          <button class="btn-list btn btn-black" @click="setView('list')" :class="{ 'active': viewMode === 'list' }"><font-awesome-icon :icon="['far', 'square-minus']" /></button>
          
      </div>
  </div>

  <div class="row ">
    <div v-for="event in events" :class="viewMode === 'box' ? 'col-4 gy-4' : 'col-12'">
      <div :class="viewMode === 'list' ? 'd-flex align-items-center border secondary-subtle' : 'card h-100 '">

          <img :src="getImagePath(event.img)" class="card-img-top" :class="viewMode === 'list' ? 'img-list-view p-2' : ''":alt="event.race">
            
          <div class="card-body" :class="viewMode === 'list' ? 'd-flex justify-content-start ms-3' : 'pb-3'">

            <div v-if="viewMode === 'list'" class="date-info text-center me-3 d-flex align-items-center">
                <div class="lh-1">
                  <div class="d-flex align-items-center">
                      <span class="wider-date fw-bold me-2">{{ getStartDate(event.startDate)}}</span>
                      <span>-</span>
                      <span class="wider-date fw-bold ms-2">{{ getEndDate(event.endDate) }}</span>
                  </div>
                    
                    <div>
                      <span>{{ getMonthShort(event.startDate) }}</span>
                      <span class="ms-5">{{ getMonthShort(event.endDate) }}</span> 
                    </div>
                </div>
            </div>
            
            <div>
                <h5 class="card-title fw-bold">{{ event.race }}</h5>

                <div class="d-flex align-items-center mb-2 text-secondary">
                  <font-awesome-icon :icon="['far', 'clock']" class="me-2" />
                  <span>{{ event.startDate}} - {{ event.endDate }}</span>
                </div>

                <div class="d-flex align-items-center mb-2 text-secondary">
                  <font-awesome-icon :icon="['fas', 'location-dot']" class="me-2" />
                  <span>{{ event.location }}</span>
                </div>
                  <span class="race-type rounded-1">{{ event.type }}</span>
            </div>  
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
.wider-date {
  font-size: 3.5rem;
}

.race-type {
  background-color: #f5f5f5 ;
  padding: 4px 6px;
}


.btn-box,
.btn-list {
  filter: invert(0); 
}

.btn-box.active,
.btn-list.active {
  filter: invert(1);
}
</style>
