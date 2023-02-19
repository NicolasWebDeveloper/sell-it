<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  background-color: #f3f3f3;
}
</style>
