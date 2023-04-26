import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Directives } from '@v-nx-demo/my-lib';
import '../../../main.scss';

import DefaultLayout from './components/DefaultLayout.vue';

const app = createApp(App);
Directives.forEach((directive) => app.use(directive));

app.component('default-layout', DefaultLayout);

app.use(router).mount('#app');
