<template>
  <Transition name="header__upcomming-item">
    <div class="header__upcomming-item" v-if="slideView == idx">
      <img
        class="header__upcomming-item-bg"
        :src="fullImgPath + movie.backdrop_path"
        alt=""
      />
      <div class="header__upcomming-item-content">
        <h1 class="header__upcomming-item-title">
          {{ movie.title || "Нет названия" }}
        </h1>
        <p class="header__upcomming-item-descr">
          {{ movie.overview || "К данному фильму нет описания" }}
        </p>
      </div>
    </div>
  </Transition>
  <Transition name="header__upcoming-item-next">
    <div
      class="header__upcomming-item-next"
      v-if="slideView == idx"
      @click="$emit('slideNext')"
    >
      <img
        class="header__upcomming-item-next-img"
        :src="fullImgPath + nextMovie?.backdrop_path"
        alt=""
      />
      <div class="header__upcomming-item-next-content">
        <h4 class="header__upcomming-item-next-title">Следующий</h4>
        <h5 class="header__upcomming-item-next-subTitle">
          {{ nextMovie.title }}
        </h5>
      </div>
    </div>
  </Transition>
</template>
  
<script setup>
import { fullImgPath, imgUrl } from "../url.js";

const props = defineProps({
  movie: {
    type: Object,
  },
  idx: {
    type: Number,
  },
  slideView: {
    type: Number,
  },
  nextMovie: {
    type: Object,
  },
});
</script>
  
<style lang="scss">
.header__upcomming-item {
  height: 100%;
  width: 100%;
  background: rgba(20, 20, 20, 0.76);
  display: flex;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  &-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  &-next {
    cursor: pointer;
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 30%;
    display: flex;
    align-items: center;
    height: 100px;
    border-radius: 10px;

    &-img {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      object-fit: cover;
    }

    &-content {
      background: linear-gradient(90deg, #000 55.64%, rgba(0, 0, 0, 0) 100%);
      width: 100%;
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 15px;
      position: relative;
      border-radius: 10px;
    }

    &-title {
      color: #fff;
      font-family: "Raleway";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &-subTitle {
      color: #fff;
      font-family: "Raleway";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &-title {
    color: #fff;
    font-family: "Raleway";
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }

  &-descr {
    color: #fff;
    font-family: "Raleway";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    max-width: 960px;
    text-align: center;
    margin-top: 50px;
  }
}

.header__upcomming-item-enter-active,
.header__upcomming-item-leave-active {
  transition: 0.3s;
}

.header__upcomming-item-enter-from {
  opacity: 0;
  transform: scale(1);
}
.header__upcomming-item-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

.header__upcoming-item-next-enter-active,
.header__upcoming-item-next-leave-active {
  transition: 0.5s;
}

.header__upcoming-item-next-enter-from {
  opacity: 0;
  transform: translateX(0);
}

.header__upcoming-item-next-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>