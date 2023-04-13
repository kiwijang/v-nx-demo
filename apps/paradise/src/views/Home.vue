<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button v-nxv-button="'primary'">hii</button>
    <a href="#" v-nxv-button="'secondary'">hii</a>
    <div class="bg-red w-10 h-10"></div>
    <div class="hi" style="height: 10px;width: 10px;"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
