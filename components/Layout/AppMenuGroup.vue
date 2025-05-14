<template>
  <div class="menu-group">
    <div class="menu-group-label">{{ label }}</div>
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<style lang="scss" scoped>
.menu-group {
  margin-bottom: 1.2rem;
}

.menu-group-label {
  font-size: 0.78rem;
  color: var(--p-text-secondary-color);
  font-weight: 700;
  padding: 0 1.5rem 0.3rem 1.5rem;
  letter-spacing: 0.08em;
  transition: all 0.3s;

  // Label style when collapsed
  :deep(.app-sidebar.collapsed) & {
    text-align: center;
    font-size: 0.7rem;
    letter-spacing: 0;
    padding: 0.3rem 0;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
