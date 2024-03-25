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
// import InsertSerloButton from './InsertSerloButton';
// import { Plugin } from '@ckeditor/ckeditor5-core';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

// import serloIconSvg from './icons/serlo.svg'

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
        // extraPlugins: [InsertSerloButton],
        toolbar: [
          'heading',
          'bold',
          'italic',
          'serloButton'
        ]
      }
    }
  }
}

// class InsertSerloButton extends Plugin {
//     init() {
//         const editor = this.editor;

//         editor.ui.componentFactory.add('serloButton', locale => {
//             const view = new ButtonView(locale);

//             view.set({
//                 label: 'Insert Serlo Component',
//                 icon: serloIconSvg,
//                 tooltip: true
//             });

//             // Executes when button in toolbar is clicked
//             view.on('execute', () => {
//                 editor.model.change(writer => {
//                     const serloEditor = writer.createElement('serloEditor');
//                     editor.model.insertContent(serloEditor, editor.model.document.selection);
//                 });
//             });

//             return view;
//         });
//     }
// }


</script>