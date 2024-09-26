<!-- <template>
    <div class="sidebar">
        <div class="sidebar-header">
            <img src="../assets/sidebar-assets/loader-gobike.png" alt="logo">
        </div>
        <div class="sidebar-body">
            <h1>Contact Information</h1>
            <div v-for="(item, index) in reorderedContactInfo" :key="index" class="icon-container">
                <font-awesome-icon :icon="item.icon" class="icon contact-icon" />
                <span class="contact-info">{{ item.info }}</span>
            </div>
            <div class="social-icons">
                <a v-for="(item, index) in socialIcons" :key="index" :href="item.url" target="_blank">
                    <font-awesome-icon :icon="item.icon" :class="['icon', 'social-icon', `social-icon-${index}`]" />
                </a>
            </div>
            <div class="sidebar-footer">
                <span class="footer-text">© 2022 Gobike</span>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { contactInfo, socialIcons } from '../data/store'

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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    display: none; //DA CANCELLARE FINITI I PACKS
}

.sidebar {
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;

    &-header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    &-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        flex-grow: 1;
    }
}

h1 {
    padding: 20px 0 15px 0;
    font-weight: 700;
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
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 28px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
}

.contact-icon {
    color: #fff;
    background-color: #000;
    padding: 20px;
    margin-bottom: 20px;
}

.social-icons {
    padding-top: 30px;
}

.social-icon {
    color: #000;
    padding: 10px;

    &-0:hover {
        color: #1877F2;
    }

    &-1:hover {
        color: #E1306C;
    }

    &-2:hover {
        color: #1DA1F2;
    }
}

.contact-info {
    font-size: 18px;
    font-weight: 300;
}

.footer-text {
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    margin-top: auto;
}

@media screen and (max-width: 768px) {
    .sidebar {
        width: 100%;
        max-width: none;
    }
}

@media screen and (max-width: 480px) {
    .sidebar {
        &-header {
            padding: 15px;
        }

        &-body {
            padding: 10px;
        }
    }

    h1 {
        padding: 10px 0;
        font-size: 24px;
    }

    .icon {
        font-size: 24px;
    }

    .contact-info {
        font-size: 16px;
    }

    .footer-text {
        font-size: 14px;
    }
}

@media screen and (min-width: 1200px) {
    .sidebar {
        max-width: 500px;
    }

    h1 {
        font-size: 32px;
    }

    .icon {
        font-size: 32px;
    }

    .contact-info {
        font-size: 20px;
    }
}
<<<<<<< HEAD
</style> -->
=======
</style>
>>>>>>> main
