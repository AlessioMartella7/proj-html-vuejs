<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="../assets/sidebar-assets/loader-gobike.png" alt="logo">
        </div>
        <div class="sidebar-body">
            <h1><strong>Contact Information</strong></h1>
            <div class="icon-container">
                <font-awesome-icon :icon="['fas', 'phone']" class="icon" />

            </div>
            <div class="icon-container">
                <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
            </div>
            <div class="icon-container">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope, faLocationDot)

export default {
    name: 'Sidebar',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.sidebar {
    width: 400px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.sidebar-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
}

.sidebar-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

h1 {
    padding-top: 130px;
}

.icon-container {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
}

.icon {
    color: #000;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}
</style>