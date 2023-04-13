import { DirectiveBinding } from 'vue';

export default {
  Directive: {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
      el.classList.add('btn-' + binding.value as string);
    },
  },
  install(app: any) {
    app.directive('nxv-button', this.Directive);
  },
};
