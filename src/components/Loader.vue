<script>
export default {
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        window.addEventListener('load', this.handlePageLoad)
    },
    methods: {
        handlePageLoad() {
            setTimeout(() => {
                this.isLoading = false
            }, 1000)  // Increased delay to 1000ms (1 second)
        }
    },
    beforeUnmount() {
        window.removeEventListener('load', this.handlePageLoad)
    }
}
</script>

<template>
    <transition name="fade">
        <div v-if="isLoading" class="loader">
            <div class="circle rounding-border">
            </div>
            <img class="loader-logo" src="../assets/sidebar-assets/loader-gobike.png" alt="loader.png">
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.loader {
    background-color: white;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    .loader-logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
    }

    .circle {
        width: 130px;
        height: 130px;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border: solid 2px #a9a9a9;
        border-top-color: #3f3f3f;
        border-radius: 50%;
    }

    .rounding-border {
        transform: rotate(135deg);
        animation: spin 1.2s steps(2) .2s infinite;
        -webkit-animation: spin 0.4s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s; // Increased transition duration to 0.8s
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>