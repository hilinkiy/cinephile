<template>
  <section class="main__top">
    <h2 class="main__top-title">
      ТОП
      <span>10</span>
    </h2>
    <swiper
      :navigation="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :space-between="25"
      class="mySwiper swiper"
      v-if="topRated.top10"
    >
      <swiper-slide
        v-for="(item, index) in topRated.top10"
        :key="item.id"
        class="swiper__slide"
      >
        <div class="swiper__info">
          <p class="swiper__num">{{ index + 1 }}</p>
        </div>
        <img
          :src="fullImgPath + item.backdrop_path"
          alt=""
          class="swiper__img"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { fullImgPath } from "../url.js";
import { ref, computed, onMounted } from "vue";
import { useTopStore } from "../store/top.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const topRated = useTopStore();
topRated.getTop();

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
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 4,
    },
  },
});
</script>

<style lang="scss">
.main__top {
  background: white;
  padding-top: 30px;
  padding-bottom: 90px;

  &-title {
    color: #141414;
    font-family: Montserrat;
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
    line-height: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 100px;
    margin-bottom: 90px;

    & span {
      color: #149a03;
      font-family: "Montserrat";
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
    }
  }
}

.swiper {
  &__slide {
    border-radius: 10px;
    // background: #141414;
    overflow: hidden;
    position: relative;
    height: 460px;
  }

  &__num {
    color: #fff;
    font-family: Montserrat;
    font-size: 150px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-right: 80px;
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    object-fit: cover;
    z-index: -1;
    user-select: none;
  }

  &__info {
    background: linear-gradient(
      90deg,
      #141414 30%,
      rgba(20, 20, 20, 0) 130.08%
    );
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    user-select: none;
  }
}
</style>