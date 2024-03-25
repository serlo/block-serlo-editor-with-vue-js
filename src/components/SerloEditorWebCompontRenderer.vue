<template>
  <editor-web-component></editor-web-component>
</template>

<script>
import { defineComponent } from 'vue';
// Just need to import the component for it to be registered as a custom
// element, so that we can render it.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EditorWebComponent } from '@serlo/editor'

export default defineComponent({
  name: 'SerloEditorWebComponentRenderer',
});
</script>
