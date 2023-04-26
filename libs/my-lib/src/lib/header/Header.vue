<template>
  <div class="bar">
    元件
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-header',
});
</script>

<style scoped lang="scss">
.bar {
  @apply p-5 w-full shadow-lg;
}
</style>
