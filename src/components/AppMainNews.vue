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
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odit assumenda. Temporibus ab consequuntur
        necessitatibus laborum quisquam eum tempora aperiam! Maxime provident tempora earum nesciunt! Voluptate sequi
        iusto animi explicabo?
        Iusto illum laborum illo ullam velit est, quae eligendi nulla quam ex rerum quo commodi dolor reprehenderit
        corrupti optio veritatis magnam. Reprehenderit quae inventore iste, harum minus voluptates quis rerum.
        Doloribus deserunt temporibus, harum unde voluptate aperiam dolorem optio veritatis, autem repellendus deleniti
        consectetur mollitia. Quasi explicabo a error laborum fugit, magnam eos, accusamus aperiam cumque minus natus
        voluptas dicta!
        Est ipsam amet sit hic quidem distinctio perferendis ad debitis sed. Reiciendis consequatur, quae rerum
        perferendis sed a distinctio nemo! Ipsa alias laudantium hic molestiae officiis? Delectus minus magni sit.
        Incidunt, natus qui rerum eaque nam porro? Aperiam sapiente repudiandae dolorum pariatur animi laborum facere
        excepturi, accusantium dolor optio aspernatur totam asperiores sequi vero facilis, tempora ratione minus a
        suscipit.
        Aperiam, laudantium! Soluta, repellendus saepe incidunt libero ratione quaerat delectus possimus molestias animi
        nulla eum enim maxime quis ipsam? Optio corrupti eaque voluptas molestiae! Dignissimos, laborum. Nam soluta qui
        mollitia!
        Labore doloremque sed deserunt, id qui minima recusandae laboriosam, praesentium odit impedit saepe. Laboriosam
        quisquam amet ullam, velit repudiandae laborum fuga, et nihil doloribus, tenetur culpa sed eaque unde id?
        Enim impedit molestiae at minus expedita ipsum perspiciatis quibusdam itaque a placeat laborum iste facilis aut
        ipsa, distinctio perferendis quod incidunt neque eius, architecto dignissimos similique adipisci quidem. Nam,
        quis.
        Id alias, porro ratione molestias corrupti quisquam voluptatibus repudiandae veritatis nesciunt aspernatur.
        Quis, modi, praesentium animi perspiciatis earum dolor atque suscipit commodi saepe optio quam voluptas,
        assumenda libero ea ex?
        Facilis architecto quae illo laborum corporis unde nobis quod maiores, praesentium incidunt nostrum mollitia id
        perspiciatis enim ipsa, provident perferendis nisi quam qui possimus. Nulla id tempore illum odio aut.
        Odio harum, modi inventore voluptatum optio sunt voluptatibus ea fuga pariatur quisquam nulla accusantium, animi
        error reprehenderit odit quis natus illo velit facere repellendus quo? Quo dignissimos autem provident deleniti!
        Dolor minima nihil atque reprehenderit iste nisi ad laboriosam, omnis minus dolore non? Necessitatibus quaerat,
        error neque temporibus placeat consectetur facilis dolorem dolorum quasi! Hic exercitationem dicta autem nemo
        quaerat?
        Unde obcaecati illo placeat ullam, dolores temporibus dolorem. Suscipit delectus doloribus harum veritatis saepe
        ducimus unde pariatur sit recusandae repellat aut rerum, totam eligendi reprehenderit illum maxime fugiat
        laborum voluptatem.
        Facilis omnis commodi suscipit blanditiis quam aliquid nobis reprehenderit nulla iure sapiente quisquam quia
        rerum maxime eius soluta sit a praesentium quibusdam fugit nostrum, velit cumque? Quaerat quos adipisci nam?
        Fuga amet quos sapiente adipisci? Fugit, laborum. Molestiae sed doloremque temporibus, explicabo quasi dolor
        tempora ipsam eius at iusto ratione repudiandae reiciendis quia hic a beatae tenetur repellendus earum
        molestias.
        Libero doloremque quasi, nihil architecto obcaecati voluptate quidem, ea sit dignissimos aliquid rerum
        blanditiis! Deleniti illo quam ipsam magni repellat. Culpa consectetur porro similique eos voluptatum explicabo
        sapiente nulla! Quaerat.
        Debitis in eveniet fugit asperiores perferendis, dolorum mollitia enim, quos molestias deleniti adipisci
        cupiditate, exercitationem ipsam. Magnam voluptates repellendus, ea sint, laudantium vitae consequuntur itaque
        earum id eaque, voluptatum quisquam!
        Beatae laudantium ipsum ea ratione esse culpa voluptas, voluptate nisi exercitationem aspernatur mollitia unde
        cumque hic adipisci harum officiis. Aperiam iusto, rem nemo ullam maxime quia quis. Nesciunt, et officia.
        Illum, doloribus maiores. Quo quia earum vero odit labore, laudantium minus dolores doloribus fuga, natus
        doloremque iusto beatae! Ratione saepe reprehenderit iste perferendis perspiciatis animi consequuntur unde
        voluptates ad eligendi.
        Sed exercitationem delectus ex eos deserunt laborum ipsam voluptatem repellendus iure corrupti maiores nobis, at
        consectetur eveniet ea tempora vitae mollitia rem earum aspernatur veritatis provident, minus harum! Facere,
        fuga.
        Libero corrupti nulla maiores veniam mollitia tempore sed tempora ea sit nostrum, totam laudantium possimus
        atque? Nobis, delectus dolores voluptatibus cum, placeat culpa voluptatum hic quod commodi ipsum in corporis!
        Id quos dignissimos aut labore odio veniam facere eaque nostrum ut illum dolor natus a reprehenderit numquam
        perspiciatis error tempore, accusamus commodi ipsum eius voluptate iure. Iste voluptates quas atque.
        Quas consequatur dolorum tenetur dolorem accusamus quidem obcaecati harum quae aliquid, a mollitia iure quaerat
        modi vero voluptatibus explicabo sequi accusantium nobis totam vel nam. Eum aut possimus unde ipsum!
        Voluptas iste magnam distinctio, officiis velit totam quidem! Labore recusandae quam, dolore sequi expedita
        pariatur praesentium beatae magnam eaque obcaecati, nesciunt commodi atque dolorem dolores nobis cumque! Illo,
        dolor eligendi?
        Nisi fuga iure ab necessitatibus id facere repudiandae labore inventore officia modi at, quam impedit earum
        maxime error corrupti tenetur in delectus amet quas! Itaque excepturi omnis sint temporibus impedit.
        Aspernatur maxime excepturi omnis possimus eaque obcaecati ipsam id! Ducimus, debitis, praesentium dolor
        quibusdam necessitatibus expedita et sint, consequuntur consectetur quisquam aliquid voluptates laborum harum
        ipsum numquam quia excepturi porro.
        Aut, cumque. Soluta temporibus suscipit nobis corrupti illum magnam, esse quam reiciendis doloremque culpa
        voluptatum eveniet laboriosam aut voluptatem provident. Explicabo culpa iure ex blanditiis voluptate magnam eius
        soluta corporis.
        Sint, earum facere, enim ullam officia provident exercitationem aut at sunt obcaecati quasi dolor fugit cum id
        inventore, voluptatum perspiciatis repellat necessitatibus. Molestiae sed commodi, tempore culpa repudiandae
        velit enim.
        Expedita labore, facere iste facilis aliquid quod. Sed corporis nisi facilis, voluptatem ipsum dicta commodi
        veritatis iusto quis eum provident nam fuga, vitae rem saepe sunt labore ullam! Praesentium, libero!
        Culpa aut aspernatur id voluptatum, quod at possimus repellat. Perspiciatis beatae facilis voluptatibus,
        pariatur facere error. Commodi, repudiandae! Velit voluptates dignissimos ab ut, aspernatur necessitatibus
        soluta laboriosam similique ducimus excepturi.
        A quaerat, dignissimos, sint non magnam reiciendis debitis praesentium harum incidunt quae nam tempora voluptas
        eveniet esse eius dolores doloremque vero modi, accusamus quasi aut earum distinctio. Veritatis, voluptate
        fugiat.
        Explicabo similique officia quo deleniti quod ab iusto ipsa distinctio consequatur error doloribus, saepe
        voluptatum optio rerum sed tempore qui maxime. Itaque impedit, eveniet labore illo pariatur beatae laboriosam
        molestiae?
        Modi autem maxime id tempore. Doloribus, at officiis. Praesentium suscipit quidem eum repellat esse qui
        exercitationem dolores optio, dignissimos molestiae, error inventore ipsa doloremque. Velit veniam sunt delectus
        tempore voluptatum.
        Odit laborum tempora quasi quod voluptatum possimus eos, quae eum fugiat, ipsum harum repellat ad iusto tenetur
        hic non esse ratione ex perferendis nobis! Veniam tenetur reiciendis possimus itaque ut!
        Odit placeat asperiores possimus sequi necessitatibus, reiciendis tempore neque dolore expedita explicabo
        assumenda in eaque voluptates fuga at error, quasi ullam! In laboriosam assumenda dicta suscipit delectus soluta
        vitae autem.
        Eos, repudiandae consequatur eligendi rem veritatis ratione quis vitae nesciunt, deleniti omnis laboriosam modi
        officiis dolores fugiat natus sequi tempora ipsa fuga totam iusto maiores hic! Eos at ipsum minima?
        Quisquam repellat, rem culpa eaque odio natus error quia eligendi excepturi at soluta blanditiis adipisci
        laudantium impedit accusantium optio. Culpa voluptates quod esse nihil aperiam, quasi odio pariatur recusandae
        hic.
        Incidunt esse hic libero sit asperiores ut sint unde. Explicabo ullam iste ratione magni molestiae repellat
        commodi sunt doloribus debitis enim itaque doloremque, accusamus quibusdam porro, atque earum eius eaque?
        Repudiandae eius quia quaerat commodi, velit impedit. Perspiciatis nihil laborum dignissimos dolorum rem magni
        totam temporibus blanditiis laudantium velit nesciunt reprehenderit minus quo accusantium, nobis quis error!
        Nostrum, reprehenderit culpa!
        Modi asperiores repudiandae quod adipisci aliquid quae possimus quam earum delectus vero fuga nostrum id ipsam
        sed, omnis itaque soluta illo rerum? Totam aspernatur commodi, atque qui repudiandae quos voluptatibus!
        Provident autem quibusdam repellendus dignissimos esse voluptate molestiae dolorem, dolor magni incidunt ratione
        doloribus rerum iusto quia minus architecto, doloremque quaerat nulla suscipit neque! Voluptatum quisquam harum
        omnis ea hic!
        Illum dignissimos sed ipsam illo voluptate aspernatur qui dolore earum cupiditate ex ea magni fugiat, quas
        voluptates fugit? Atque esse eligendi ullam earum reprehenderit odit molestiae nobis? Similique, ipsa ex!
        Fugiat, nihil quasi aut impedit expedita aliquam fugit nostrum blanditiis omnis maiores rerum velit assumenda
        dolore incidunt, placeat neque ipsa debitis minima esse iusto ex quae. Harum cumque reprehenderit at.
        Officiis optio perspiciatis voluptas, ad rerum eos? Dolores suscipit iure facere doloremque quam animi possimus
        voluptatum nam nobis sed blanditiis soluta, sint sunt illo molestiae! Omnis molestiae ratione est eligendi!
        Officiis aspernatur cupiditate sit? Distinctio ex blanditiis assumenda dicta. Dicta recusandae quibusdam magni
        dolorum minus architecto adipisci, maxime quia corporis commodi mollitia temporibus sunt modi tempora laboriosam
        reprehenderit? Ullam, optio!
        Suscipit enim aliquam nobis mollitia rerum hic officiis porro architecto eaque, dolore dolor, quis minima
        reiciendis, quasi accusamus culpa dicta magni ad sequi dolorem natus. Praesentium expedita soluta quasi nisi.
        Excepturi mollitia ipsa, ipsam eveniet delectus nihil adipisci, asperiores earum nesciunt architecto tempore
        minus sed cupiditate tempora aliquam quidem! Modi adipisci esse reprehenderit necessitatibus doloremque quaerat
        quos, molestias vero suscipit.
        At assumenda necessitatibus aspernatur suscipit tempore sunt doloremque mollitia recusandae fugiat ex, repellat
        repellendus consequatur veritatis illum quam quod omnis eveniet perspiciatis nostrum. Eius itaque voluptatem et
        officia. Praesentium, laudantium.
        Porro voluptas voluptate voluptatem deserunt architecto nemo est tempore hic distinctio eligendi, quasi dicta
        saepe aliquid exercitationem sit placeat, qui eum. Illo, id? Nemo sint ex omnis natus, excepturi cumque.
        Excepturi, odit temporibus. Ab consequatur ex, sequi laboriosam, ipsa placeat ipsam, recusandae saepe similique
        nemo reiciendis! Nesciunt at explicabo architecto. Magnam nesciunt quaerat voluptates sapiente ullam nihil
        inventore dolores at.</p>
    <div class="container">

        <Transition name="slide-fade-up" appear>
            <h3>Recent news & articles</h3>
        </Transition>
        <Transition name="slide-fade-up-slow" appear>
            <p>Important information about bikes</p>
        </Transition>
        <div class=" card-list row row-cols-4 justify-content-between my-4">
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
</style>