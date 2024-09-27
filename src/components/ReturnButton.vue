<script>


export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="up-btn">
        <a href="./AppHeader.vue"><font-awesome-icon :icon="['fas', 'chevron-up']" /></a>
    </div>
</template>

<style lang="scss" scoped>
a {
    font-size: 30px;
    color: white;
    background-color: black;
    padding: 4px 8px;
    padding-top: 3px;
    text-decoration: none;

    position: fixed;
    bottom: 8px;
    right: 18px;
}
</style>