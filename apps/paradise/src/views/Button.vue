<template>
  <div class="home">
    <h1>{{ '<button>' }}</h1>
    <div class="btn-wrap">
      <button v-my-button="'primary'">按鈕</button>
    </div>

    <h1>{{ '<a>' }}</h1>
    <div class="btn-wrap">
      <a href="#" v-my-button="'secondary'">按鈕</a>
    </div>

    <h1>{{ '<my-button>' }}</h1>
    <div class="btn-wrap">
      <my-button>default primary</my-button>
      <my-button variant="primary">primary</my-button>
      <my-button variant="secondary">secondary</my-button>
    </div>
  </div>
</template>

<script src="./home.ts"></script>

<style lang="scss" scope>
.btn-wrap {
  @apply space-x-3 pb-5;
}

h1 {
  @apply text-xl my-5;
}
</style>
