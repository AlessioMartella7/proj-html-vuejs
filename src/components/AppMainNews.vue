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
        },
    }
}

</script>

<template>

    <section id="news">
        <div class="container">

            <Transition name="slide-fade-up" appear>
                <h3>Recent news & articles</h3>
            </Transition>
            <Transition name="slide-fade-up-slow" appear>
                <p>Important information about bikes</p>
            </Transition>

            <div class=" card-list row row-cols-4 justify-content-between">
                <TransitionGroup name="slide-fade-in" appear>
                    <div class="col p-4" v-for="(item, i) in news" :key="i">
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
                </TransitionGroup>
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;


* {
    text-align: center;
}

#news {
    margin: 50px 0;
    background-color: #FBFBFB;
    padding-top: 60px;
}

h3,
h5,
button {
    font-weight: bold
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

// Transitions 

// slide-fade-in

.slide-fade-in-enter {
    opacity: 0;
}

.slide-fade-in-enter-active {
    animation: slide-fade-in 0.6s ease-in-out forwards;
    transition: opacity 1s;
}

@keyframes slide-fade-in {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

// slide-fade-up

.slide-fade-up-enter {
    opacity: 0;
}

.slide-fade-up-enter-active {
    animation: slide-fade-up 0.6s ease-in-out forwards;
    transition: opacity 1s;
}


@keyframes slide-fade-up {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

// Slide-fade-up-slow

.slide-fade-up-slow-enter {
    opacity: 0;
}

.slide-fade-up-slow-enter-active {
    animation: slide-fade-up-slow 1.2s ease-in-out forwards;
    transition: opacity 1.5s;
}

@keyframes slide-fade-up-slow {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>