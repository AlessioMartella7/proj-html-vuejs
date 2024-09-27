<template>
    <div class="carosello">
        <div class="carosello-content">
            <div class="carosello-header">
                <h1>Our Professional Cycling Trainings</h1>
                <span>Learn from the mountain biking expert.</span>
            </div>
            <div class="carosello-wrapper">
                <div class="carosello-container">
                    <transition-group name="slide" tag="div" class="image-container">
                        <div class="carosello-item" v-for="(image, index) in visibleImages" :key="index">
                            <img :src="image" :alt="'Image ' + (index + 1)">
                            <div class="text" v-text="visibleText[index]"></div>
                        </div>
                    </transition-group>
                </div>
            </div>
            <div class="carosello-controls">
                <button class="carosello-arrow left" @click="prev">
                    &lt;
                </button>
                <button class="carosello-arrow right" @click="next">
                    &gt;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { trainings } from '../data/store';
import trainingBox1 from '../assets/img_trainings/training-box-1.jpg';
import trainingBox2 from '../assets/img_trainings/training-box-2.jpg';
import trainingBox3 from '../assets/img_trainings/training-box-3.jpg';
import trainingBox4 from '../assets/img_trainings/training-box-4.jpg';
import trainingBox5 from '../assets/img_trainings/training-box-5.jpg';
import { capitalize } from 'vue';

export default {
    name: 'Carosello',
    data() {
        return {
            images: [
                trainingBox1,
                trainingBox2,
                trainingBox3,
                trainingBox4,
                trainingBox5
            ],
            currentIndex: 0,
            autoplayInterval: null,
            trainings
        };
    },
    computed: {
        visibleImages() {
            // Restituisce un array di 4 immagini visibili
            let visible = [];
            for (let i = 0; i < 4; i++) {
                visible.push(this.images[(this.currentIndex + i) % this.images.length]);
            }
            return visible;
        },
        visibleText() {
            let visible = [];
            for (let i = 0; i < 4; i++) {
                let text = this.trainings[(this.currentIndex + i) % this.trainings.length];
                const firstLetter = text[0];
                const capFirstLetter = firstLetter.toUpperCase();
                const restText = text.slice(1);
                text = capFirstLetter + restText;
                visible.push(text);
            }
            return visible;
        }
    },
    mounted() {
        this.startAutoplay();
    },
    beforeUnmount() {
        this.stopAutoplay();
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.next();
            }, 6000); // Cambia immagine ogni 6 secondi
        },
        stopAutoplay() {
            clearInterval(this.autoplayInterval);
        }
    }
}
</script>

<style scoped>
.carosello {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.carosello-content {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carosello-header {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
}

.carosello-header h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.carosello-header span {
    font-size: 1.2rem;
}

.carosello-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 30px 0;
}

.carosello-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.image-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carosello-item {
    width: 25%;
    flex-shrink: 0;
    padding: 0 10px;
    box-sizing: border-box;
    position: relative;
}

.carosello-item img {
    width: 85%;
    height: auto;
    object-fit: cover;
    border: 5px solid #000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    filter: invert(0.2);
}

.carosello-item img:hover {
    transform: scale(1.05);
}

.carosello-item .text {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    top: 60px;
    left: 50%;
    translate: -50% 0;
}

.carosello-controls {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.carosello-arrow {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
    margin: 0 10px;
}

.carosello-arrow:hover {
    background-color: #f0f0f0;
}

.carousel {
    position: relative;
    overflow: hidden;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

/* Animazione di scorrimento */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

/* New sliding animation */
.image-container {
    transition: transform 0.5s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease-in-out;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>