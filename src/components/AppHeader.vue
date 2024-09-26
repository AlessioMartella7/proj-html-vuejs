
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'Header',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
          menuItems:[
      { text: 'Home', link: '#' },
        { text: 'About Us', link: '#' },
        { text: 'Training', link: '#' },
        { text: 'Packages', link: '#' },
        { text: 'Blog', link: '#' },
        { text: 'Contact', link: '#' }
       ],
       hoverMenu:[
        {text: 'Riding Lessons', link: '#'},
        {text: 'Safe Driving', link:'#'},
        {text:'Mountain Bike', link:'#'},
        {text:'Trail Drive', link: '#'},
        {text:'Pedaling', link:'#'},
        {text:'All Trainings', link:'#'}
      ]
        }
    },
   
}
</script>

<template>
<header class="d-flex justify-content-between align-items-center bg-white">
<img class="d-block" src="../assets/img-header/logo-gobike.png" alt="">
<ul class="d-flex align-items-center" >
  <li class="ms-3" v-for="(item, index) in menuItems" :key="index"> <!--Popolazione dinamica dell'header tramite array menuItems-->
    <a :href="item.link">{{ item.text }}</a>
  </li>
</ul>
 
<font-awesome-icon class="font-size-" :icon="['fas', 'bars']" />
<button class="btn btn-dark h-50 rounded">
 Upcoming Events <font-awesome-icon :icon="['fas', 'arrow-right']" />
</button>

</header>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";



header{
  height:100px;
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-family: sans-serif;
    z-index:2;
padding: 0 50px;

}
header img{
  max-height: 100%;
}

header ul{
  list-style-type: none;
}

ul a{
  text-decoration: none;
  color: black;
}

ul li{
  position:relative;
}
ul li::after{
   content: "";
   display: block;
   background-color: black;
   height: 2px;
   background-color: black;
   width: 0;
   transition: width 0.3s;
   left: 0;
   bottom: 0;
}
ul li:hover::after{
  width:100%;
}

</style>