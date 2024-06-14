<template>
    <div class="header__upcomming" v-if="getUpcomingMovies">
        <UpcommingItem v-for="(movie, idx) in getUpcomingMovies.results" :key="movie.id" :idx="idx" :movie="movie"
            :slideView="slideView"
            :nextMovie="getUpcomingMovies.results[idx + 1 == getUpcomingMovies.length ? 0 : idx + 1]"
            @slideNext="slideNext" />
    </div>
    <Loader v-else />
</template>

<script setup>
import UpcommingItem from "./UpcommingItem.vue";
import { useUpcoming } from "../store/upcoming.js";
import { computed, ref, onMounted } from "vue";
import Loader from "./Loader.vue";
const upcomingStore = useUpcoming();
setTimeout(() => {
    upcomingStore.getUpcomingItems();
}, 2000);

const getUpcomingMovies = computed(() => upcomingStore.upcoming);
let slideView = ref(0);
let timeout = ref(null);
const slide = () => {
    if (getUpcomingMovies.value.results.length - 1 == slideView.value) {
        slideView.value = 0;
    } else {
        slideView.value++;
    }
    timeout = setTimeout(() => {
        slide();
    }, 7000);
}

onMounted(() => timeout = setTimeout(() => {
    slide();
}, 7000));

const slideNext = () => {
    clearTimeout(timeout);
    slide();
}

</script>

<style lang="scss">
.header__upcomming {
    position: relative;
    height: 100vh;
    overflow: hidden;
}
</style>