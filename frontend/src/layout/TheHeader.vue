<template>
  <header class="header">
    <div class="header__left">Logo</div>
    <div class="header__right">
      <base-button theme="dark">Sign in</base-button>
      <base-button theme="light">Sign up</base-button>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
