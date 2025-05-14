<template>
  <div>
    <aside
      v-show="!isMobile || layoutStore.sidebarMobileOpen"
      class="app-sidebar"
      :class="{
        collapsed: layoutStore.sidebarCollapsed,
        'sidebar-mobile': isMobile,
        'sidebar-mobile-open': isMobile && layoutStore.sidebarMobileOpen
      }"
    >
      <nav class="app-sidebar__menu">
        <template v-for="(group, gIdx) in menuGroups" :key="gIdx">
          <AppMenuGroup :label="group.label ?? ''">
            <AppMenuItem
              v-for="(item, iIdx) in group.items"
              :key="iIdx"
              :to="item.to ?? ''"
              :icon="item.icon ?? ''"
              :active="false"
              @click="isMobile ? layoutStore.closeSidebarMobile() : null"
            >
              {{ typeof item.label === 'string' ? item.label : '' }}
            </AppMenuItem>
          </AppMenuGroup>
        </template>
      </nav>

      <!-- Sidebar collapse button -->
      <div class="sidebar-footer">
        <Button
          :icon="layoutStore.sidebarCollapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"
          class="p-button-text p-button-rounded collapse-btn"
          aria-label="Collapse/Expand"
          @click="toggleSidebar"
        />
      </div>
    </aside>
    <div
      v-if="isMobile && layoutStore.sidebarMobileOpen"
      class="sidebar-backdrop"
      @click="layoutStore.closeSidebarMobile()"
    />
  </div>
</template>

<script setup lang="ts">
import AppMenuGroup from './AppMenuGroup.vue';
import AppMenuItem from './AppMenuItem.vue';
import { useLayoutStore } from '~/stores/layout';
import { ref, onMounted, onUnmounted } from 'vue';
import { useSwipe } from '@vueuse/core';

const layoutStore = useLayoutStore();
const isMobile = ref(false);

const { direction, lengthX, lengthY, stop } = useSwipe(
  window,
  {
    threshold: 30,
    onSwipeEnd: () => {
      if (!isMobile.value) return;
      if (Math.abs(lengthX.value) > 60 && Math.abs(lengthY.value) < 50) {
        if (!layoutStore.sidebarMobileOpen && direction.value === 'right') {
          layoutStore.openSidebarMobile();
        } else if (layoutStore.sidebarMobileOpen && direction.value === 'left') {
          layoutStore.closeSidebarMobile();
        }
      }
    },
  },
);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    layoutStore.closeSidebarMobile();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  stop();
});

const menuGroups = [
  {
    label: 'Menu',
    items: [
      { to: '/', icon: 'home', label: 'Home' },
      { to: '/dashboard', icon: 'chart-line', label: 'Dashboard' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { to: '/settings', icon: 'cog', label: 'Settings' },
      { to: '/reports', icon: 'file', label: 'Reports' },
    ],
  },
];

const toggleSidebar = () => {
  if (isMobile.value) {
    layoutStore.toggleSidebarMobile();
  } else {
    layoutStore.toggleSidebar();
  }
};
</script>

<style lang="scss" scoped>
.app-sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  background: var(--p-surface-0);
  border-right: 1px solid var(--p-border-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: var(--box-shadow);
  z-index: 99;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.collapsed {
    width: 64px;
    min-width: 64px;
  }

  .sidebar-footer {
    padding: 1rem;
    border-top: 1px solid var(--p-border-color);
    display: flex;
    justify-content: flex-end;

    .collapse-btn {
      transition: transform 0.3s ease;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &.collapsed {
    .sidebar-footer {
      justify-content: center;
      padding: 0.5rem;

      .collapse-btn {
        transform: rotate(180deg);
      }
    }
  }
}

.app-sidebar__menu {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 2rem 0 1.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: var(--p-surface-300) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--p-surface-300);
    border-radius: 6px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0.2rem 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.7rem 1.5rem;
    color: var(--p-text-color);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.2s;
    font-weight: 500;
    position: relative;

    &:hover {
      background: var(--p-surface-100);
      color: var(--p-primary-color);
    }
  }

  .active > a,
  li.active > a {
    background: var(--p-surface-100);
    color: var(--p-primary-color);
  }

  li.active > a {
    background: var(--p-primary-color);
    color: #fff;
    font-weight: 700;
  }

  .icon {
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.app-sidebar.collapsed {
  .menu-group-label {
    text-align: center;
    padding: 0.3rem 0;
  }

  .app-sidebar__menu {
    .label, .badge {
      display: none;
    }

    a {
      justify-content: center;
      padding: 0.7rem;
    }
  }
}

.sidebar-mobile {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2000;
  background: var(--p-surface-0);
  box-shadow: 2px 0 8px rgba(0,0,0,0.08);
}
@media (max-width: 768px) {
  .app-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 2000;
    background: var(--p-surface-0);
    box-shadow: 2px 0 8px rgba(0,0,0,0.08);
    width: 220px;
    min-width: 220px;
  }
  .app-sidebar.sidebar-mobile {
    transform: none;
  }
}

.menu-group {
  margin-bottom: 1.2rem;
}

.menu-group-label {
  font-size: 0.78rem;
  color: var(--p-text-secondary-color);
  font-weight: 700;
  padding: 0 1.5rem 0.3rem 1.5rem;
  letter-spacing: 0.08em;
}

.badge.new {
  background: var(--p-primary-color);
  color: #fff;
  font-size: 0.7rem;
  border-radius: 0.7em;
  padding: 0.1em 0.7em;
  margin-left: 0.5em;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  z-index: 1999;
}
</style>
