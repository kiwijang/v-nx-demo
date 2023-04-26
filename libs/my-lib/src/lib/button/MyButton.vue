<template>
  <button v-my-button="vari"><slot></slot></button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

type Variant = 'primary' | 'secondary';

export default defineComponent({
  name: 'my-button',
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'primary',
    },
  },
  data() {
    return {
      vari: this.variant ?? 'primary',
    }
  },
});
</script>

<style scoped lang="scss"></style>
