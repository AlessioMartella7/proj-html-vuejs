<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>

</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap";

header {
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 50px;
  font-family: sans-serif;
  display: flex;
  align-items: center;

  img {
    max-height: 100%;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;

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

// Stile per mantenere l'header sotto la sidebar quando è aperta
.sidebar {
  z-index: 2;
}
</style>