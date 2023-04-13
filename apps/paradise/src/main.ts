import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Directives } from '@v-nx-demo/my-lib';
import '@v-nx-demo/global';

const app = createApp(App);
Directives.forEach((directive) => app.use(directive));
app.use(router).mount('#app');
