<script setup lang="ts">
import {  RouterView } from 'vue-router'
import CkEditor from './components/CkEditor.vue'
// import SerloEditorRenderer from './components/SerloEditorRenderer.vue'
import WebComponentTest from './components/WebComponentTest.vue'
</script>

<template>
  <header>
    <!-- id next is needed for react-modal, see https://github.com/serlo/frontend/blob/staging/apps/web/src/components/modal-with-close-button.tsx#L9 -->
    <div class="wrapper" id="">
    <!-- <div class="wrapper" id="__next"> -->
      <CkEditor  />
      <!-- <div class="horizontal-break"/>
      <SerloEditorRenderer  /> -->
      <WebComponentTest />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  .horizontal-break{
    /* margin-top: 40px;
    margin-bottom: 40px; */
    height: 80px;
    width: 100%;
  }
</style>
