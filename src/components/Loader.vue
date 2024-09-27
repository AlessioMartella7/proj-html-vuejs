<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="loader">
        <div class="circle border-c">
        </div>
        <img class="loader-logo" src="../assets/sidebar-assets/loader-gobike.png" alt="loader.png">
    </div>

</template>

<style lang="scss" scoped>
.loader {
    background-color: lightblue;
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
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        border: solid 5px #a9a9a9;
        border-top-color: #3f3f3f;
        border-radius: 50%;
    }

    .border {
        width: 100%;
        transform: rotate(135deg);
        animation: spin 1.3s steps(2) .2s infinite;
        -webkit-animation: spin 1.3s linear infinite;
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
</style>