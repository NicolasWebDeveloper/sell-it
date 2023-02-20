<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #f3f3f3;
}
</style>
