<template>
    <!-- <react-wrapper></react-wrapper> -->
    <editor-web-component></editor-web-component>
</template>

<script>
import { defineComponent } from 'vue';
import { EditorWebComponent } from '@serlo/editor'

export default defineComponent({
  name: 'WebComponentTest',
  // setup() {
  //   onMounted(() => {
  //     console.log("ReactWrapper should have been imported", {ReactWrapper})
  //     // import('../react_app/WebComponent').then(() => {
  //     //   console.log('WebComponent component loaded.');
  //     // }).catch(err => {
  //     //   console.error('Failed to load the ReactWrapper component:', err);
  //     // });
  //   });
  // }
});
</script>
