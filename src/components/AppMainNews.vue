<script>
import { news } from '../data/news';

export default {
    data() {
        return {
            news,
        }
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },

        rotateCard(event) {
            const card = event.currentTarget;
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            const angleX = -(event.clientY - cardCenterY) / 10;
            const angleY = (event.clientX - cardCenterX) / 10;
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        },

        resetCard(event) {
            const card = event.currentTarget;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
    }
}

</script>

<template>

    <div class="container">

        <h3>Recent news & articles</h3>

        <p>Important information about bikes</p>
        <div class=" card-list row row-cols-4 justify-content-between my-4">
            <div class="col p-4" v-for="(item, i) in news">
                <div class="card p-4" @mousemove="rotateCard" @mouseleave="resetCard">
                    <figure>
                        <img :src="getImagePath(item.image)" alt="news.img" class="img-fluid">
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
    box-shadow: 0 0 5px 5px rgb(241, 241, 241);
    border: none;

    p,
    figcaption,
    button {
        font-size: 14px;
    }

    p {
        text-align: left;
    }

    h5,
    button {
        font-weight: bold
    }

    figcaption {
        font-weight: 500;
    }

}

.card>* {
    margin-bottom: 20px;
}

button {

    border: 1px solid transparent;
    border-radius: 5%;
    background: black;
    color: rgba(255, 255, 255, 0.9);
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    width: 100px;


}
</style>