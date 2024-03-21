<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import '@serlo/editor/dist/editor-tailwind.css'
// import { ReactTest } from './ReactSerloEditor';


const reactRoot = ref(null);

// onMounted(() => {
//   if (reactRoot.value) {
//     const ReactTest = React.lazy(() => import('../react_app/ReactSerloEditor').then(module => ({ default: module.ReactSerloEditor })));
//     const reactElement = React.createElement(React.Suspense, { fallback: 'Loading...' }, React.createElement(ReactTest));
//     ReactDOM.render(reactElement, reactRoot.value);

//     // ReactDOM.render(
//     //   // <div>React is working too!</div>,
//     //   // React.createElement('div', null, 'React is working too!'),
//     //   React.createElement(ReactTest, null, null),
//     //   // <ReactTest />
//     //   reactRoot.value
//     // );
//   }
// });

// onBeforeUnmount(() => {
//   if (reactRoot.value) {
//     ReactDOM.unmountComponentAtNode(reactRoot.value);
//   }
// });
</script>

<template>
  <div ref="reactRoot" class="react-root"></div>
</template>

<style>
  .react-root {
    background-color: white;
  }
</style>