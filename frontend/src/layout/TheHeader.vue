<template>
  <header class="header">
    <div class="header__left">
      <h1 class="title">Sell-it</h1>
    </div>
    <div class="header__right">
      <base-button theme="dark">Sign in</base-button>
      <base-button theme="light">Sign up</base-button>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.02);
  /* background-color: rgba(0, 0, 0, 0.095); */
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  margin: 4px;
}
</style>
