<template>
    <p>Hi from Vue!</p>
    <react-wrapper></react-wrapper>
</template>

<script>
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'WebComponentTest',
  setup() {
    onMounted(() => {
      import('./WebComponent').then(() => {
        console.log('WebComponent component loaded.');
      }).catch(err => {
        console.error('Failed to load the ReactWrapper component:', err);
      });
    });
  }
});
</script>

