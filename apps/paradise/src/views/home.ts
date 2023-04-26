
import { defineComponent } from 'vue';
import { MyButton } from '@v-nx-demo/my-lib';

console.log('hey')
export default defineComponent({
  name: 'home-page',
  components: {
    MyButton,
  },
});
