import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  // Sidebar collapsed state
  const sidebarCollapsed = ref(false);
  // Mobile sidebar open state
  const sidebarMobileOpen = ref(false);

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
  };

  // Expand sidebar
  const expandSidebar = () => {
    sidebarCollapsed.value = false;
  };

  // Collapse sidebar
  const collapseSidebar = () => {
    sidebarCollapsed.value = true;
  };

  // Mobile sidebar open/close/toggle
  const openSidebarMobile = () => {
    sidebarMobileOpen.value = true;
  };
  const closeSidebarMobile = () => {
    sidebarMobileOpen.value = false;
  };
  const toggleSidebarMobile = () => {
    sidebarMobileOpen.value = !sidebarMobileOpen.value;
  };

  return {
    sidebarCollapsed,
    toggleSidebar,
    expandSidebar,
    collapseSidebar,
    sidebarMobileOpen,
    openSidebarMobile,
    closeSidebarMobile,
    toggleSidebarMobile,
  };
});
