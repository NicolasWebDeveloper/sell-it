<template>
  <button :class="theme">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
button {
  margin: 10px;
}
.dark {
  background-color: #dfdfdf;
  color: #000;
  padding: 0.7rem;
  border-radius: 2rem;
  border: 0;
  font-weight: bold;
  min-width: 5rem;
}
.light {
  background-color: #3a78ff;
  color: #ffffff;
  padding: 0.7rem;
  border-radius: 2rem;
  border: 0;
  font-weight: bold;
  min-width: 5rem;
}
</style>
