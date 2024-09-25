<script>
export default {
  data() {
    return {
      imagesList: [
        {
          image: 'event1.jpg',
          title: 'Questo è il titolo della card',
          text: 'Breve testo descrittivo della card inserita nello slider',
        },
        {
          image: 'event2.jpg',
          title: 'Questo è un altro titolo della card',
          text: 'Altro breve testo descrittivo della card inserita nello slider',
        },
        {
          image: 'event3.jpg',
          title: 'Questo è un altro titolo ancora',
          text: 'Breve testo descrittivo',
        },
      ],
      activeIndex: 0,
      autoplay: null,
    };
  },
  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href
    },
    incrementIndex: function () {
      if (this.activeIndex >= this.imagesList.length - 1) this.activeIndex = 0;
      else this.activeIndex++;
    },
    decrementIndex: function () {
      if (this.activeIndex <= 0) this.activeIndex = this.imagesList.length - 1;
      else this.activeIndex--; 
    },
    leafThroughSli: function () {
      this.autoplay = setInterval(this.incrementIndex, 3000);
    },
    stopLeafThroughSli: function () {
      clearInterval(this.autoplay);
    }
  },
  created () {
    this.leafThroughSli();
  },
}
</script>

<template>
  <div id="slider" class="d-flex">
    
    <!-- contenitore per immagine in evidenza, testo e bottoni -->
    <div class="stage-pic flex-shrink-0">
      <img :src="getImagePath(`../assets/img-jumbotron/${imagesList[activeIndex].image}`)" alt="" class="img-fluid">
      <div class="buttons-container">
        <!-- bottone scorri a sinistra -->
        <button id="btn-left" class="btn" @click="decrementIndex()">
          <font-awesome-icon :icon="['fa-solid', 'fa-chevron-left']" />
        </button>
        <!-- bottone scorri a destra -->
        <button id="btn-right" class="btn" @click="incrementIndex()">
          <font-awesome-icon :icon="['fa-solid', 'fa-chevron-right']" />
        </button>                
      </div>
      <div class="text-box">
        <h1>
          {{ imagesList[activeIndex].title }}
        </h1>
        <p>
          {{ imagesList[activeIndex].text }}
        </p>
        <button class="btn">Learn more</button>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
/* Css reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Generics */
body {
  font-family: Arial, Helvetica, sans-serif;
}

.img-fluid {
  max-width: 100%;
}

/* header {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  width: 100%; 
  color: white;
  font-weight: 600;
  font-size: 12px;
} */

/* footer {
  padding: 30px;
  color: white;
} */

/* nav {
  line-height: 30px;
  background-color: aquamarine;
  max-width: 1100px;
  margin: 0 auto;
} */

/* nav > div{
  padding: var(--nav-pd)
} */

/* span {
  margin: 0 5px;
} */

/* img {
  width: 100%;
} */

/* ul {
  list-style-type: none;
  
  a {
      text-decoration: none;
      color: white;
      margin-right: 5px;
  }

  li:last-child a {
      margin-right: 0;
  }

  
  
} */

/* Utilities */
#slider {
  height: calc(100vh - 125px);
}

.stage-pic {
  position: relative;
  background-color: #eee;
  height: 100%;
  
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
  }
}

.flex-row-center {
  display: flex;
  justify-content: center;
  align-items: center;
    /* gap: var(--space); */
}

.img-seat {
  height: calc(100% / 3);
  overflow-y: hidden;
  background-color: #444;
  border: 3px solid black;

  /* img {
    translate: 0 -10%;
  } */
}

.staged {
  border-color: #27c9ff;
}

.btn {
  margin-top: 20px;
  border: 0;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px 30px;
}

#btn-left,
#btn-right {
  padding: 15px 18px;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  z-index: 1;
  translate: 0 -50%;
}

#btn-left {
  left: 20px;
}

#btn-right {
  right: 20px;
}

.text-box {
  width: 40%;
  height: 220px;
  padding: 10px 15px;
  color: #fff;
  position: absolute;
  left: 20%;
  top: 50%;
  translate: 0 -50%;
}
</style>