<script>
import { news } from '../data/news';

export default {
    data() {
        return {
            news,
        }
    }
}
</script>

<template>

    <div class="container">

        <h3>Recent news & articles</h3>

        <p>Important information about bikes</p>
        <div class=" card-list row">
            <div class="col" v-for="(item, i) in news">
                <div class="card p-4">
                    <figure>
                        <img :src="item.image" alt="news.img">
                        <figcaption>
                            {{ item.figCaption }}
                        </figcaption>
                    </figure>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.content }}</p>
                    <button class="align-self-center">More</button>
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

.card {
    box-shadow: 0 0 5px black;

    p,
    figcaption,
    button {
        font-size: 14px;
    }

    h5,
    button,
    figcaption {
        font-weight: bold
    }
}

button {

    border: 1px solid transparent;
    border-radius: 5px;
    background: black;
    color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    width: 100px;


}
</style>