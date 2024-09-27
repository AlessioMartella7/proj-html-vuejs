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
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum est, iure sunt soluta possimus doloremque
        laboriosam iusto in dolor, architecto amet maiores labore sint. Accusantium non doloribus fuga velit eum!
        Debitis qui ut nostrum? Quo facere laboriosam saepe soluta molestiae ipsum dolorum numquam accusantium et
        expedita nulla iste obcaecati blanditiis mollitia nesciunt, amet dolor quibusdam, iure cum illum hic beatae.
        Alias consectetur, maiores, totam neque nesciunt earum possimus autem ut sint mollitia, pariatur dolore a
        exercitationem magni quaerat laboriosam quisquam rem voluptas officiis aut temporibus inventore illo! Quasi,
        alias animi.
        Doloribus expedita illo perspiciatis animi, cumque ex. Tempora facilis accusamus quos distinctio nisi maiores
        aliquid! Non id qui nulla doloremque similique blanditiis dicta vel, reprehenderit labore magnam cumque aliquam
        eveniet.
        Dolore odit similique quasi. Iure cum quaerat iste explicabo eius cupiditate blanditiis placeat beatae fuga,
        tempore molestiae hic est deserunt incidunt numquam doloribus fugit vitae nobis praesentium. Qui, amet animi.
        Similique incidunt voluptate labore laboriosam facilis esse eveniet fuga impedit dicta sint, repudiandae
        accusamus aliquid sunt, autem dignissimos, fugit amet tenetur ab vero natus suscipit quia architecto nam ipsa?
        Sit.
        Porro perferendis hic ipsum! Quos vitae quibusdam cum assumenda maxime, possimus obcaecati deserunt eligendi
        modi illo et suscipit? Ipsam adipisci iusto exercitationem sunt labore eligendi ullam debitis deserunt quia
        ipsum!
        Beatae, recusandae iusto nam voluptate libero nulla odit sequi molestias, quod vel quia accusantium velit illo
        error voluptatum molestiae voluptas quam. Rerum magni et dolores quia dolore ea est saepe?
        Eum fugit cupiditate perferendis at repellendus maxime molestiae dolore, error fugiat minima distinctio et
        tempora ipsam vel, culpa alias, accusantium nobis nemo voluptatibus accusamus quo possimus esse provident. Enim,
        ducimus!
        Cupiditate deserunt sit dignissimos sed eaque temporibus non culpa dolores aliquam itaque. Fugiat veniam unde
        dicta aperiam nemo dignissimos, illum totam adipisci quaerat animi culpa alias, iure quae in odio?
        Voluptates eos, eum quibusdam aperiam, libero amet magni suscipit temporibus repellendus a vero mollitia
        laboriosam deleniti hic sapiente minus aspernatur. Consequatur harum iure neque omnis quam aspernatur sit!
        Ipsum, molestiae!
        Tempore, maiores culpa eos at aliquam nemo recusandae optio. Molestias laudantium veritatis soluta, dignissimos
        qui, pariatur consequuntur doloremque, magnam illo porro quis repellat corporis perspiciatis aliquid blanditiis
        quibusdam fuga et.
        Eligendi exercitationem, doloribus quae, quod accusamus corrupti magni autem consequuntur, assumenda officia
        totam. Voluptates dolores qui nisi deleniti aliquam repellat. Unde quidem asperiores porro atque harum corrupti
        blanditiis veritatis fugit!
        Praesentium quod aliquid cum enim doloremque! Beatae labore ipsam ipsum harum corporis ipsa, natus, itaque
        temporibus neque repellendus vel veniam repudiandae ea possimus eaque? Sed recusandae nesciunt voluptas?
        Obcaecati, voluptatibus?
        Nesciunt mollitia minus nisi explicabo deserunt hic, sapiente repudiandae eum magnam fuga temporibus! Hic
        voluptate pariatur unde culpa, aliquam officiis quis magni libero excepturi tenetur nihil eos assumenda. Porro,
        sint.
        Commodi obcaecati autem delectus officia iure corporis, magni excepturi alias quidem sapiente aperiam
        dignissimos dolores veritatis neque quas vel nihil quibusdam adipisci nisi cum est voluptatum nemo atque
        laboriosam! Rerum.
        Adipisci accusamus tempora, iure ducimus eligendi magnam eos, porro explicabo deserunt dicta repellendus illum
        corrupti, reprehenderit aliquid consectetur itaque unde quaerat? Alias, explicabo corrupti! Animi reprehenderit
        repellat quidem placeat fugit!
        Doloremque cumque eaque illo libero magni deserunt dolor debitis minus, porro vero eveniet, consequatur ducimus
        repellat. Quibusdam reiciendis, harum ut tempora officiis, nostrum eum asperiores doloribus sunt cumque
        laboriosam atque!
        Possimus quod quae, eius provident corporis ducimus saepe nemo error debitis maiores delectus inventore
        exercitationem architecto reiciendis dignissimos veritatis vitae temporibus modi a neque voluptatibus. Eligendi
        totam commodi harum veniam!
        Quaerat perferendis consequuntur totam facilis quod cum fuga, quia animi iure fugiat ratione, iusto mollitia
        obcaecati atque dolorem ipsam placeat in maxime deleniti est qui reiciendis asperiores! Sequi, laborum
        repellendus?
        Ratione est minima tempore voluptatibus laboriosam distinctio, quod ex dignissimos! Possimus, ad voluptates
        mollitia iure atque sit unde tempore voluptate ipsum, dolor ullam nostrum temporibus dolores modi itaque
        numquam! Quasi?
        Eveniet magnam temporibus rem voluptate, optio tenetur repellendus expedita dicta voluptatem non laudantium quam
        quisquam laboriosam neque consectetur praesentium sequi nulla atque ex cupiditate debitis quas distinctio?
        Eveniet, nesciunt fugit.
        Quod soluta praesentium maxime repellendus numquam error consequuntur necessitatibus accusantium consequatur
        veniam ut voluptas reiciendis quo rerum repellat eos porro ipsa iure, ipsum pariatur, voluptatum animi! Vitae
        dicta id iusto!
        Quos, qui quidem, dignissimos quod tempore cupiditate asperiores saepe odio incidunt sed voluptatem, atque
        libero vel dolorum doloribus consequatur aperiam accusantium quia mollitia alias eveniet nisi. Dolores quis
        voluptatum error?
        Beatae aperiam tempore velit maxime magnam earum accusantium, deserunt sit repellendus impedit eos sed alias
        sequi, adipisci saepe cupiditate temporibus non, tempora sint repudiandae repellat eveniet explicabo similique
        enim! Ut.
        Repudiandae aut dolor quaerat blanditiis repellat, cumque architecto necessitatibus delectus, maxime vitae
        fugiat omnis excepturi pariatur quod maiores consectetur culpa temporibus unde impedit. Dicta eius, nulla
        repellat architecto neque esse.
        Dolores sapiente earum totam pariatur ipsa quisquam accusamus soluta ducimus architecto quod? Labore magni
        nihil, molestias non nam assumenda maiores? Nihil at eaque id ullam vitae beatae, provident architecto tenetur?
        Officiis, eius vel, nihil reprehenderit at deleniti doloremque repellat maiores commodi explicabo repudiandae
        recusandae! Voluptas voluptate laboriosam, sint exercitationem accusamus cupiditate molestiae similique
        accusantium deserunt facere nulla numquam obcaecati ducimus!
        At dolorum, excepturi debitis molestiae amet architecto distinctio eum sit facere accusantium, blanditiis
        obcaecati atque, vel nisi corporis libero. Ea magni nostrum nam illum a aperiam quos ex ratione hic.
        Et est debitis itaque, quidem optio provident atque neque voluptatem aperiam quas earum animi omnis sequi iure
        velit reprehenderit vel similique minus esse rerum harum cum fugiat voluptatibus. Mollitia, corporis.
        Iure ipsum rem, unde, aspernatur similique voluptatem quam, voluptates deserunt soluta eum molestiae iusto ipsa.
        Dolores possimus repellendus explicabo adipisci excepturi quod maiores deleniti, at nam sunt. Magnam, sit non?
        Id, dicta error dolorem velit odit hic dolor voluptates quasi voluptate nam, culpa architecto repellat
        consequuntur earum dolores natus consectetur ullam enim temporibus! Quae tempora nihil a amet accusantium dolor?
        Alias dignissimos inventore, sint sapiente exercitationem consequatur quaerat ratione reprehenderit odio optio
        vitae voluptatem impedit odit! Veniam vel ea aliquid voluptas nihil saepe dolor, magni distinctio! Magni vitae
        id veritatis?
        Cumque voluptatum provident maiores neque officiis itaque, quasi sequi voluptas dignissimos aut in vitae quidem
        fugiat optio dicta corporis vero delectus quis odit perspiciatis ea ad. Cum omnis beatae temporibus.
        Quia animi rem eveniet! Sint dolorem nostrum quis sit! Quae cupiditate similique veniam maxime eos dolore
        exercitationem praesentium, veritatis odio ab tempore sunt fuga ullam vero placeat, incidunt voluptates nam?
        Corporis numquam est soluta vel quis ad cupiditate porro excepturi voluptatem aperiam? Inventore minus error
        alias reprehenderit excepturi. Similique, neque aliquid! Quam, maxime eius aut quaerat labore omnis voluptas
        odio.
        Possimus laudantium illum dicta ratione doloribus voluptatibus voluptas perspiciatis ipsum, ad a consequatur
        nesciunt repudiandae fuga vitae impedit eveniet fugiat! Tenetur id repellendus mollitia qui sequi optio dicta
        voluptas explicabo.
        Reiciendis quo deserunt at, error molestias explicabo alias ullam aspernatur doloremque totam laborum distinctio
        incidunt soluta, qui atque! Accusamus quam eveniet inventore, eligendi recusandae odit fugiat reiciendis
        deserunt reprehenderit laborum?
        Debitis optio, ipsum tenetur eum laborum distinctio beatae officia laudantium velit delectus impedit doloribus,
        consectetur voluptate at hic. Debitis quidem nulla minus voluptatibus error quae culpa accusantium nam veniam a.
        Accusamus dignissimos sed architecto ut esse beatae atque? Aut in alias dolores est praesentium dolor dolore
        unde perspiciatis quaerat cupiditate dicta dolorem velit provident qui magni, exercitationem excepturi maiores
        deleniti.</p>

    <div class="container animate-duration-2000" v-animateonscroll="{ enterClass: 'animate-fadein' }">

        <Transition name="slide-fade-up" appear>
            <h3>Recent news & articles</h3>
        </Transition>
        <Transition name="slide-fade-up-slow" appear>
            <p>Important information about bikes</p>
        </Transition>
        <Transition>
            <div class=" card-list row row-cols-4 justify-content-between my-4">
                <TransitionGroup name="slide-fade-in, infinite-slide" appear>
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
        </Transition>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    text-align: center;
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
    animation: slide-fade-in 1s ease-in-out forwards;
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
    animation: slide-fade-up 0.7s ease-in-out forwards;
    transition: opacity 0.7s;
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
    animation: slide-fade-up-slow 1s ease-in-out forwards;
    transition: opacity 1s;
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

//infinite slider

.infinite-slide-active {
    animation: 15s infinite-slide infinite linear
}

@keyframes infinite-slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>