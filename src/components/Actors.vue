<template>
    
  <div class="main__info-block-actors">
    <div class="main__info-block-actors-item" v-for="actor in actorsStore.actors" :key="actor.id">
      {{actor.name}}
    </div>
  </div>
    
</template>

<script setup>

import { computed } from "vue";
import { useActorsStore } from "../store/actors.js";

const actorsStore = useActorsStore();

const props = defineProps(['type', 'id', 'count']);
actorsStore.getActors({ type: props.type, id: props.id });

const actors = computed(() => props.type == 'movie'
    ? actorsStore.getActorsMovies(props.count)
    : actorsStore.getActorsTv(props.count
    ));


</script>

<style></style>