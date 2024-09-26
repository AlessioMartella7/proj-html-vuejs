<template>
    <div class="packs">
        <div class="content">
            <div class="icon-container">
                <font-awesome-icon :icon="faMedal" class="icon medal-icon" />
            </div>
            <h1>Special Packs</h1>
            <span class="subtitle">Select pricing plan to get more</span>
        </div>
        <div class="pack-cards">
            <div v-for="pack in packs" :key="pack.name" class="pack-card">
                <div class="pack-card-inner">
                    <div class="pack-card-front">
                        <div class="pack-content">
                            <div class="pack-icon">
                                <font-awesome-icon :icon="pack.icon" class="icon pack-icon" />
                            </div>
                            <h2>{{ pack.name }}</h2>
                            <p>{{ pack.subtitle }}</p>
                            <ul>
                                <li v-for="feature in pack.features" :key="feature.text"
                                    :class="{ 'included': feature.included }">
                                    {{ feature.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pack-card-back">
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <h2 class="dynamic-color">{{ pack.name }}</h2>
                        <p class="price dynamic-color">{{ pack.price }}</p>
                        <button class="send-request dynamic-color">Send Request!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { packs } from '../data/packs'

export default {
    name: 'Packs',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faMedal,
            packs
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

@keyframes rotateGlow {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.packs {
    background-color: #f0f0f0;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    max-width: 1400px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    .content {
        text-align: center;
        margin-bottom: 80px;

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
        }

        h1 {
            font-weight: 800;
            font-size: 48px;
            margin-bottom: 20px;
            color: #333;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
            font-size: 20px;
            color: #666;
            font-weight: 300;
        }
    }

    .pack-cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 60px;
    }
}

.icon {
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &.medal-icon {
        color: #fff;
        background-color: #000;
        padding: 30px;
        font-size: 48px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
}

.pack-card {
    width: 380px;
    height: 650px;
    perspective: 1000px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        background: linear-gradient(45deg, #000000, #333333, #666666, #999999, #cccccc, #ffffff, #cccccc, #999999, #666666, #333333, #000000); // Cambiato i colori per adattarli allo stile generale
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        animation: rotateGlow 20s linear infinite;
        border-radius: 15px;
    }

    &-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }

    &:hover .pack-card-inner {
        transform: rotateY(180deg);
    }

    &-front,
    &-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 15px;
        overflow: hidden;
    }

    &-front {
        background: linear-gradient(175deg, #000 50%, #fff 50%);
        color: white;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 40px;
    }

    &-back {
        background: #333; // Cambiato il colore di sfondo per adattarlo allo stile generale
        color: #fff; // Cambiato il colore del testo per adattarlo allo stile generale
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        position: relative;
        overflow: hidden;

        .wave {
            position: absolute;
            width: 500px;
            height: 350px; // Ridotto per limitare l'effetto alla parte alta
            opacity: 0.6;
            left: -50%;
            top: 0; // Posizionato in alto
            background-color: #666; // Cambiato il colore dell'onda per adattarlo allo stile generale
            border-radius: 40%;
            animation: wave 5s infinite linear;
        }

        .wave:nth-child(2) {
            top: 5px; // Posizionato leggermente più in basso
            animation: wave 7s infinite linear;
        }

        .wave:nth-child(3) {
            top: 10px; // Posizionato ancora più in basso
            animation: wave 9s infinite linear;
        }

        .dynamic-color {
            position: relative;
            z-index: 10;
            background: linear-gradient(45deg, #000000, #333333, #666666, #999999, #cccccc, #ffffff, #cccccc, #999999, #666666, #333333, #000000); // Cambiato i colori del gradiente per adattarli allo stile generale
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(255, 255, 255, 0.9);
            mix-blend-mode: overlay;
        }

        h2 {
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        .price {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .send-request {
            background: transparent;
            border: 2px solid white;
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: white;
                color: black;
            }
        }
    }

    .pack-content {
        text-align: center;
        padding: 40px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .pack-icon {
        font-size: 64px;
        margin-bottom: 30px;
        color: #fff;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 28px;
        color: #fff;
    }

    p {
        color: #fff;
        margin-bottom: 30px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin-top: auto;
        text-align: center;

        li {
            margin-bottom: 15px;
            color: #777;
            font-size: 18px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e0e0;

            &:last-child {
                border-bottom: none;
            }

            &.included {
                color: #000;
            }
        }
    }

    .price {
        font-size: 36px;
        margin-bottom: 20px;
        font-weight: 800;
        position: relative;
        z-index: 1;
    }

    .send-request {
        background: transparent;
        color: rgba(255, 255, 255, 0.9);
        border: 2px solid white;
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;

        &:hover {
            background: white;
            color: black;
        }
    }
}
</style>
