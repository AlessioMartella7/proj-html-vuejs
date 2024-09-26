<script>
export default {
  name: 'MouseFollow',
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      const mouseFollow = this.$refs.mouseFollow;
      mouseFollow.style.left = `${event.clientX}px`;
      mouseFollow.style.top = `${event.clientY}px`;
    }
  }
}
</script>

<template>
  <p>Main</p>
  <div ref="mouseFollow" class="mouse-follow">
    <div class="mouse-point"></div>
  </div>
</template>

<style>
.mouse-follow {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid grey;
  background-color: transparent;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
}

.mouse-point {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: grey;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>