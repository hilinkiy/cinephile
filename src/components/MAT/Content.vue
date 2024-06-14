<template>
    <section class="main__video">
        <router-link :to="props.type" class="main__video-title">
            {{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                <path
                    d="M1.22499 23.2625C1.83749 23.875 2.82499 23.875 3.43749 23.2625L13.825 12.875C14.3125 12.3875 14.3125 11.6 13.825 11.1125L3.43749 0.725C2.82499 0.1125 1.83749 0.1125 1.22499 0.725C0.612488 1.3375 0.612488 2.325 1.22499 2.9375L10.275 12L1.21249 21.0625C0.612487 21.6625 0.612488 22.6625 1.22499 23.2625Z"
                    fill="white" />
            </svg>
        </router-link>

        <swiper :navigation="true" :modules="modules" :breakpoints="swiperOptions.breakpoints" :space-between="25"
            class="mySwiper">
            <swiper-slide class="main__video-item" v-for="item in content" :key="item.id" @click="getItem(item)">
                <img :src="item.backdrop_path != null ? fullImgPath + item.backdrop_path :
                    '../../assets/images/error.png'" alt="" class="main__video-item-img">
                <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
            </swiper-slide>
            <!--  -->
            <swiper-slide class="main__video-item flex-item">
                <router-link class="main__video-item-route" :to="props.type">
                    <div class="main__video-item-route-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                            <path
                                d="M1.22499 23.2625C1.83749 23.875 2.82499 23.875 3.43749 23.2625L13.825 12.875C14.3125 12.3875 14.3125 11.6 13.825 11.1125L3.43749 0.725C2.82499 0.1125 1.83749 0.1125 1.22499 0.725C0.612488 1.3375 0.612488 2.325 1.22499 2.9375L10.275 12L1.21249 21.0625C0.612487 21.6625 0.612488 22.6625 1.22499 23.2625Z"
                                fill="white" />
                        </svg>
                    </div>
                    <span>{{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</span>
                </router-link>
            </swiper-slide>
        </swiper>
        <ItemBlock :show="showInfo" @close="close" :current="current" :type="type" />

    </section>
</template>

<script setup>
import { fullImgPath } from "../../url.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ref, computed } from "vue";
import { usePopular } from "../../store/popular.js";
import ItemBlock from "../ItemBlock.vue";
import { useItemById } from "../../store/itemById.js";

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs);
const props = defineProps(['type']);
// 
const popular = usePopular();
// 
const itemByIdStore = useItemById();

popular.getPopular({ type: props.type });

const modules = ref([Navigation]);

let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1450: {
            slidesPerView: 5,
        },
    }
});
// 

let showInfo = ref(false);
const close = () => showInfo.value = false;
const current = ref(null);
const getItem = async (item) => {
    await itemByIdStore.getItemById({ type: props.type, id: item.id });
    current.value = props.type == 'movie' ? itemByIdStore.movie : itemByIdStore.tv;
    showInfo.value = true;
}


</script>

<style lang="scss">
.main__video {
    padding: 25px 0;

    &-title {
        color: #FFF;
        font-family: 'Raleway';
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;
        align-items: center;
        gap: 18px;
        max-width: max-content;
        margin-bottom: 40px;
        margin-left: 100px;
    }

    &-item {
        height: 462px;
        border-radius: 10px;
        overflow: hidden;
        border: 2px solid black;
        position: relative;
        background: rgb(0, 0, 0, .30);
        transition: .3s;
        user-select: none;

        &:hover {
            .main__video-item-img {
                transform: scale(1.2);
            }
        }

        &-route {
            color: #FFF;
            text-align: center;
            font-family: 'Raleway';
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
        }

        &:hover {
            background: none;
            cursor: pointer;

        }

        &-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -5;
            transition: .5s;

        }

        &-title {
            position: absolute;
            font-size: 20px;
            color: white;
            bottom: 10px;
            width: 100%;
            text-align: center;

        }
    }
}

.flex-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.swiper {
    padding: 0 100px;

    &-button-prev,
    &-button-next {
        color: white;

        &::after {
            font-size: 24px;
            font-weight: 700;
        }
    }

    &-button-disabled {
        display: none;
    }
}
</style>