<template>
  <div class="main__info" :class="{ active: props.show }">
    <img
      src="../assets/images/close.svg"
      alt="close"
      class="main__info-close"
      @click="$emit('close')"
    />
    <div class="main__info-block" v-if="current">
      <img
        v-lazy="fullImgPath + current.backdrop_path"
        alt=""
        class="main__info-block-img"
      />
      <div class="main__info-block-content">
        <div class="main__info-block-data">
          <h2 class="main__info-block-data-title">
            {{ type == "movie" ? current.title : current.name }}
          </h2>
          <p class="main__info-block-data-descr">
            {{type == "movie" ? current.overview : `Информация не сериалам не прилагается`}}
          </p>
          <div class="main__info-block-data-descr">
            {{type == "movie" ? `Вышла в ${current.release_date}` : `Первая серия вышла в ${current.first_air_date}`}}
            <div v-for="genre in current.genres" :key="genre.id" class="genre-item">
              {{type == "movie" ? genre.name : genre.name}}
            </div>
            <div class="genre-item">
              {{type == "movie" ? `${current.runtime}m` : current.name}}
            </div>
          </div>
          <p style="color: white">
            {{current.seasons_count}}
          </p>
          <Actors :type="type" :id="current.id" :count="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fullImgPath } from "../url.js";
import { onMounted } from "vue";
import { useItemById } from "../store/itemById.js";

const selected = useItemById();

onMounted(() => {
  selected.getItemById();
});

const props = defineProps({
  show: {
    typeof: Boolean,
  },
  current: {
    typeof: Object,
  },
  type: {
    typeof: String,
  },
});

console.log(props.current)
</script>

<style lang="scss">
.main__info {
  height: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  margin-top: 30px;

  &.active {
    height: 700px;
  }

  &-close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: rgba(20, 20, 20, 0.7);
    border-radius: 50%;
    color: white;
    padding: 20px;
    z-index: 100;

    &:active {
      transform: scale(0.95);
    }
  }

  &-block {
    height: 100%;

    &-img {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 60%;
      object-fit: cover;
    }

    &-content {
      background: linear-gradient(
        90deg,
        #000 40%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0) 67.73%
      );
      position: relative;
      height: 100%;
    }

    &-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      height: 100%;
      width: 50%;
      padding-left: 50px;

      &-title {
        color: #fff;
        font-family: "Raleway";
        font-size: 50px;
        font-weight: 700;
      }

      &-descr {
        color: #fff;
        font-family: "Raleway";
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        display: flex;
        gap: 10px;
      }

      &-info {
        color: rgba(255, 255, 255, 0.6);
        font-family: "Montserrat";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
      }
    }
  }
}
</style>