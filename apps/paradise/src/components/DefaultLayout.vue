<template>
  <side-bar></side-bar>
  <div class="content-wrap">
    <my-header></my-header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./defaultLayout.ts"></script>

<style lang="scss">
.content-wrap {
  @apply w-full flex flex-col;

  .content {
    @apply w-full p-10 pt-5;
  }
}
</style>
