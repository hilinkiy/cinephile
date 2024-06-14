<template>
  <div class="btns">
    <button @click="$emit('page', currentPage - 1)">prev</button>
    <span>Страница {{ currentPage }} - {{ totalPages }}</span>
    <button @click="$emit('page', currentPage + 1)">next</button>
  </div>
</template>

<script setup>
const props = defineProps(["currentPage", "totalPages"]);
</script>

<style>
.btns {
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  margin-bottom: 100px;
}

button {
  padding: 15px;
  background: white;
  color: black;
  font-size: 15px;
  width: 100px;
}

span {
  color: white;
  font-size: 20px;
}
</style>