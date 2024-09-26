<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon,
    Sidebar
  },
  data() {
    return {
      menuItems: [
        { text: 'Home', link: '#' },
        { text: 'About Us', link: '#' },
        {
          text: 'Training', link: '#',
          hoverMenu: [
            { text: 'Riding Lessons', link: '#' },
            { text: 'Safe Driving', link: '#' },
            { text: 'Mountain Bike', link: '#' },
            { text: 'Trail Drive', link: '#' },
            { text: 'Pedaling', link: '#' },
            { text: 'All Trainings', link: '#' }
          ],
        },
        { text: 'Packages', link: '#' },
        { text: 'Blog', link: '#' },
        { text: 'Contact', link: '#' }
      ],
      isSidebarDisplayed: false,
      sidebarAnimation: '',
      iconAnimation: ''
    }
  },
  methods: {
    sidebarToggle() {
      if (!this.isSidebarDisplayed) {
        this.isSidebarDisplayed = true
        this.sidebarAnimation = 'slide-in'
        this.iconAnimation = 'rotate-icon-open'
        document.addEventListener('click', this.handleOutsideClick)
      } else {
        this.sidebarAnimation = 'slide-out'
        this.iconAnimation = 'rotate-icon-close'
        setTimeout(() => {
          this.isSidebarDisplayed = false
        }, 300) // Match this with the animation duration
        document.removeEventListener('click', this.handleOutsideClick)
      }
    },
    handleOutsideClick(event) {
      if (!event.target.closest('.sidebar') && !event.target.closest('a[href="#"]')) {
        this.sidebarToggle()
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }
}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center bg-white">
    <img class="d-block" src="../assets/img-header/logo-gobike.png" alt="">
    <ul class="d-flex align-items-center">
      <li class="ms-3" v-for="(item, index) in menuItems" :key="index">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
    <div class="d-flex align-items-center justify-content-between gap-5">
      <a href="#" @click.prevent="sidebarToggle" class="text-dark">
        <font-awesome-icon class="fs-3" :icon="['fas', 'bars']" :class="iconAnimation" />
      </a>
      <button class="btn btn-dark rounded">
        <img src="../assets/img_icons/f1-helmet-svgrepo-com.svg" class="helmet">Upcoming Events <font-awesome-icon
          :icon="['fas', 'arrow-right']" />
      </button>
    </div>
    <Sidebar :isVisible="isSidebarDisplayed" :class="sidebarAnimation" />
  </header>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";

header {
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 50px;
  font-family: sans-serif;

  img {
    max-height: 100%;
  }

  ul {
    list-style-type: none;

    a {
      text-decoration: none;
      color: black;
    }

    li {
      position: relative;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        background-color: black;
        transition: width 0.3s;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}

button {
  height: 80px;
}

.helmet {
  filter: invert(1) brightness(2);
}

.slide-in {
  animation: slideIn 0.3s ease-out forwards;
}

.slide-out {
  animation: slideOut 0.3s ease-in forwards;
}

.rotate-icon-open {
  animation: rotateIconOpen 0.3s ease-out forwards;
}

.rotate-icon-close {
  animation: rotateIconClose 0.3s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes rotateIconOpen {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(90deg);
  }
}

@keyframes rotateIconClose {
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(0deg);
  }
}
</style>