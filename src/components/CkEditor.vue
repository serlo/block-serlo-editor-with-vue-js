<template>
  <div id="editor">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>
<style>
  /* Removes ck ad */
  .ck-powered-by {
    display: none;
  }

</style>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'CKEditorComponent',
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // Configuration of the editor.
      }
    }
  }
}
</script>