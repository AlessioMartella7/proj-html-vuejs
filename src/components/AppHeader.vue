<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
<header class="d-flex justify-content-between align-items-center ">
<img src="../assets/img-header/logo-gobike.png" alt="">
<ul class="d-flex align-items-center">
  <li class="ms-3"><a href="">Home</a></li>
  <li class="ms-3"><a href="">About Us</a></li>
  <li class="ms-3"><a href="">Training</a></li>
  <li class="ms-3"><a href="">Packages</a></li>
  <li class="ms-3"><a href="">Blog</a></li>
  <li class="ms-3"><a href="">Contact</a></li>
</ul>

<button class="btn btn-dark h-50 rounded">
Upcoming events
</button>

</header>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";


header{
  height:100px;
  background-color: white;
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
  display: block;
}

header ul{
  list-style-type: none;
}

ul a{
  text-decoration: none;
  color: black;
}


</style>