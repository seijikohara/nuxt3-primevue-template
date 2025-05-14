<template>
  <header class="app-header">
    <div class="app-header__left">
      <!-- Hamburger menu icon -->
      <Button
        icon="pi pi-bars"
        class="menu-btn p-button-text p-button-rounded"
        aria-label="Toggle sidebar"
        @click="toggleSidebar"
      />
      <!-- Logo -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" class="logo-icon">
        <span class="logo-text">Template</span>
      </div>
    </div>
    <div class="app-header__right">
      <Button icon="pi pi-calendar" class="p-button-text p-button-rounded" aria-label="Calendar" />
      <Button icon="pi pi-bell" class="p-button-text p-button-rounded" aria-label="Notifications" />
      <Button icon="pi pi-cog" class="p-button-text p-button-rounded" aria-label="Settings" />
      <Avatar image="https://i.pravatar.cc/32?img=3" shape="circle" class="mr-2" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout';
import { ref } from 'vue';

const layoutStore = useLayoutStore();
const isMobile = ref(false);

if (import.meta.client) {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  window.addEventListener('resize', checkMobile);
  checkMobile();
}

const toggleSidebar = () => {
  if (isMobile.value) {
    layoutStore.toggleSidebarMobile();
  } else {
    layoutStore.toggleSidebar();
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  min-height: var(--header-height);
  padding: 1rem 2rem; /* Added vertical padding */
  background: var(--p-surface-0);
  border-bottom: 1px solid var(--p-border-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.03);
  z-index: 100;
  width: 100%;
}

.app-header__left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .logo-icon {
      height: 40px;
      width: auto;
    }

    .logo-text {
      font-weight: bold;
      font-size: 1.4rem;
      letter-spacing: 0.05em;
    }
  }

.app-header__right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
