# serlo-block-editor-vue

## How to expose a React web component and import from Vue

In the Editor.js repo

1. Define super simple React component

```tsx
import React from 'react'

export function SimplestReactComponent() {
  return <div>Simplest React Component wrapped as a web component</div>
}
```

2. Reexport component from .ts file

```TypeScript
// Inside the web-component.ts
export { ReactWrapper } from './simple-web-component'
```

3. Define vite.config.ts and ensure React gets bundled with the web component

```TypeScript
build: {
  lib: {
    entry: resolve(__dirname, 'src/package/web-component.ts'),
    name: 'editor',
    fileName: 'editor',
    formats: ['es'],
  },
  // !Important: React and react-dom reference needs to be removed, otherwise it doesn't get bundled and Vue.js can't consume the package. (errors like `createRoot` is not defined)
  rollupOptions: {
    // external: ['react', 'react-dom'],
    // output: {
    //   globals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //   },
    // },
  },
```

4. Build & publish

```
yarn build
yarn yalc:publish
```

5. In consuming repo (Vue), import component and render

```vue
<template>
  <p>Hi from Vue!</p>
  <react-wrapper></react-wrapper>
</template>

<script>
import { defineComponent } from 'vue'
// import the component that defines the Web Component
import { ReactWrapper } from '@serlo/editor'

export default defineComponent({
  name: 'WebComponentTest'
})
</script>
```

6. Tell Vue compiler about the web component to prevent warnings

The warning will look something like the following

```
WebComponentTest.vue:2 [Vue warn]: Failed to resolve component: react-wrapper
    If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
    at <WebComponentTest>
    at <App>
```

To prevent this, go inside the vite.config.ts and add the web component as a customElement to the compilerOptions.

```TypeScript
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'react-wrapper'
    }
  }
})
```

## How to solve cache issues in local development

In the frontend package, trigger a complete rebuild:
`yarn build && yarn yalc:publish`

In this package, uninstall and reinstall dependencies with yalc:
`yalc remove --all && npm i && yalc add @serlo/editor && npm i && npm run dev`

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
