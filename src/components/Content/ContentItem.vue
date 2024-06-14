<template>
  <div class="main__content-list-item">
    <img
      :src="fullImgPath + item.backdrop_path"
      alt=""
      class="main__content-list-item-bg"
    />
    <h2 class="main__content-list-item-name">
      {{ item.name || item.title }}
    </h2>
  </div>
</template>

<script setup>
import { fullImgPath } from "../../url.js";
const props = defineProps(["item"]);
</script>

<style lang="scss">
.main__content-list-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  user-select: none;
  cursor: pointer;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.35);
    position: absolute;
  }

  &:hover {
    .main__content-list-item-bg {
      transform: scale(1.1);
    }
  }

  &-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    object-fit: cover;
    position: absolute;
    transition: 0.5s;
  }

  &-name {
    color: rgb(255, 255, 255);
    font-family: "Inter";
    font-size: 24px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: center;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 10px;
  }
}
</style>