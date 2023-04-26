<template>
  <div class="wrap">
    <div v-for="item in list" :key="item.id">
      <router-link :to="item.url">{{ item.content }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'side-bar',
  data() {
    return {
      list: [
        { id: 1, url: '/Button', content: 'button' },
        { id: 2, url: '/Input', content: 'input' },
        // { id: 3, url: '/Button', content: 'radio' },
        // { id: 4, url: '/Button', content: 'checkbox' },
        // { id: 5, url: '/Button', content: 'drawer' },
        // { id: 6, url: '/Button', content: 'select' },
        { id: 7, url: '/Table', content: 'table' },
        // { id: 8, url: '/Button', content: 'form' },
        // { id: 9, url: '/Button', content: 'collapse' },
        // { id: 10, url: '/Button', content: 'empty' },
        // { id: 11, url: '/Button', content: 'tooltip' },
        // { id: 12, url: '/Button', content: 'tab' },
        // { id: 13, url: '/Button', content: 'message' },
        { id: 14, url: '/Modal', content: 'modal' }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
  .wrap {
    @apply bg-slate-800 text-white p-10;
  }
</style>
