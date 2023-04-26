import { defineComponent } from 'vue';
import { Header, SideBar } from '@v-nx-demo/my-lib';

export default defineComponent({
  name: 'default-layout',
  components: {
    'side-bar': SideBar,
    'my-header': Header,
  },
});
