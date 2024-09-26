<template>
    <div class="packs">
        <div class="content">
            <div class="icon-container">
                <font-awesome-icon :icon="faMedal" class="icon medal-icon" />
            </div>
            <h1>Special Packs</h1>
            <span>Select pricing plan to get more</span>
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
                        <h2>{{ pack.name }}</h2>
                        <p class="price">{{ pack.price }}</p>
                        <button class="send-request">Send Request!</button>
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

.packs {
    background-color: #f0f0f0;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    max-width: 1400px;
    margin: 0 auto;

    .content {
        text-align: center;
        margin-bottom: 60px;

        .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }

        h1 {
            font-weight: 800;
            font-size: 36px;
            margin-bottom: 15px;
        }
    }

    .pack-cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
    }
}

.icon {
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    &.medal-icon {
        color: #fff;
        background-color: #000;
        padding: 25px;
        font-size: 36px;
    }
}

.pack-card {
    width: 380px;
    height: 650px;
    perspective: 1000px;

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
        background: black;
        color: white;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;

        h2 {
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 10px;
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
    }

    .send-request {
        background: transparent;
        color: white;
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
</style>
