<template>
  <div class="container">
    <div class="main__content">
      <h2 class="main__content-title">
        {{ type == "movie" ? "Все фильмы" : "Все сериалы" }}
      </h2>
      <div class="main__content-list">
        <ContentItem v-for="item in content" :key="item.id" :item="item" />
      </div>
    </div>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page="changePage"
    />
  </div>
</template>

<script setup>
import ContentItem from "./ContentItem.vue";
import { usePopular } from "../../store/popular.js";
import { computed, ref } from "vue";
import Pagination from "../Pagination.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["type"]);

const popularStore = usePopular();
popularStore.getPopular({ type: props.type, page: 1 });

const content = computed(() =>
  props.type == "movie" ? popularStore.popularMovies : popularStore.popularTvs
);

const currentPage = ref(1);
const totalPages = ref(500);

const changePage = async (newPage) => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
  router.push({ name: props.type, querry: { page: currentPage.value } });
  currentPage.value = newPage;
  await popularStore.getPopular({ type: props.type, page: currentPage.value });
};
</script>

<style lang="scss">
.main__content {
  margin-top: 150px;
  padding-bottom: 90px;
  &-title {
    color: rgb(255, 255, 255);
    font-family: "Inter";
    margin-left: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: left;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    grid-auto-rows: 470px;
    margin-top: 50px;
  }
}
</style>