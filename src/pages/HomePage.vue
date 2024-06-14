<template>
  <header class="header">
    <Upcomming />
  </header>
  <main class="main">
    <Movies />
    <Tvs />
    <Top />
  </main>
</template>

<script setup>
import Upcomming from "../components/Upcomming.vue";
import Movies from "../components/MAT/Movies.vue";
import Tvs from "../components/MAT/Tvs.vue";
import Top from "../components/Top.vue";
</script>

<style></style>