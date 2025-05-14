<template>
  <div class="layout-outer">
    <AppHeader />
    <div class="layout-wrapper">
      <AppSidebar />
      <main class="layout-content">
        <NuxtPage />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout components
import AppHeader from '~/components/Layout/AppHeader.vue';
import AppSidebar from '~/components/Layout/AppSidebar.vue';
import AppFooter from '~/components/Layout/AppFooter.vue';
</script>

<style scoped>
.layout-outer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--surface-ground, #f4f4f4);
  overflow: hidden;
}

.layout-wrapper {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  height: calc(100vh - var(--header-height) - var(--footer-height));
  flex-shrink: 0; /* Prevent shrinking to keep height consistent */
}

.layout-content {
  flex: 1;
  padding: 2rem;
  background: var(--surface-ground, #f4f4f4);
  overflow: auto; /* Only this content area is scrollable */
  height: 100%;
}
</style>
