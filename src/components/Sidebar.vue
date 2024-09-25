<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="../assets/sidebar-assets/loader-gobike.png" alt="logo">
        </div>
        <div class="sidebar-body">
            <h1><strong>Contact Information</strong></h1>
            <div v-for="(item, index) in reorderedContactInfo" :key="index" class="icon-container">
                <font-awesome-icon :icon="item.icon" class="icon" />
                <span>{{ item.info }}</span>
            </div>
            <div class="social-icons">
                <a v-for="(item, index) in socialIcons" :key="index" :href="item.url" target="_blank">
                    <font-awesome-icon :icon="item.icon" class="icon" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { contactInfo, socialIcons } from '../data/contactInfo'

export default {
    name: 'Sidebar',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            contactInfo,
            socialIcons
        }
    },
    computed: {
        reorderedContactInfo() {
            return [
                this.contactInfo[1], // Telefono
                this.contactInfo[2], // Email
                this.contactInfo[0]  // Posizione
            ]
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
}

.icon {
    color: #fff;
    background-color: #000;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
}
</style>