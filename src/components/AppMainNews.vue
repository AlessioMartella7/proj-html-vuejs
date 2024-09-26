<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>

    <div class="container">

        <h3>Recent news & articles</h3>

        <p>Important information about bikes</p>
        <div class=" card-list row">
            <div class="col">
                <div class="card">
                    <figure>
                        <img>
                        <figcaption>

                        </figcaption>
                    </figure>
                    <button>News</button>
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

button {
    background: black;
    color: rgba(255, 255, 255, 0.9);
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

}
</style>