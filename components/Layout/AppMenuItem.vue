<template>
  <li>
    <NuxtLink v-slot="{ href, navigate, isActive }" :to="to" custom>
      <a :class="['app-menu-item', { active: isActive }]" :href="href" @click="navigate">
        <span class="icon">
          <i :class="['pi', 'pi-' + icon]" />
        </span>
        <span class="label"><slot /></span>
        <span v-if="badge" class="badge new">{{ badge }}</span>
      </a>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

defineProps<{
  to: string,
  icon: string,
  badge?: string,
  active?: boolean
}>();
</script>

<style lang="scss" scoped>
.app-menu-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 1.5rem;
  color: var(--p-text-color);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.18s, color 0.18s;
  font-weight: 500;
  position: relative;
  margin: 0.5rem;

  &:hover,
  &:focus {
    background: var(--p-surface-100);
    color: var(--p-primary-color);
    .icon i,
    .label {
      color: var(--p-primary-color);
    }
  }

  &.active,
  li.active > & {
    background: none;
    color: var(--p-primary-color);
    font-weight: 700;
    .icon i,
    .label {
      color: var(--p-primary-color);
    }
  }
}

li {
  margin: 0.25rem 0;
}

.icon {
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(.app-sidebar.collapsed) & {
    font-size: 1.1rem;
  }
}

.label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :deep(.app-sidebar.collapsed) & {
    display: none;
  }
}

.badge {
  &.new {
    background: var(--p-primary-color);
    color: #fff;
    font-size: 0.7rem;
    border-radius: 0.7em;
    padding: 0.1em 0.7em;
    margin-left: 0.5em;
    font-weight: 700;
    letter-spacing: 0.04em;

    :deep(.app-sidebar.collapsed) & {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .app-menu-item {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
