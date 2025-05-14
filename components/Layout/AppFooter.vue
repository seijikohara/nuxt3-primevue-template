<template>
  <footer class="app-footer">
    <span class="footer-center">&copy; {{ currentYear }}</span>
  </footer>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

const currentYear = format(new Date(), 'yyyy');
</script>

<style lang="scss" scoped>
.app-footer {
  height: calc(var(--footer-height));
  min-height: calc(var(--footer-height));
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--p-surface-0);
  border-top: 1px solid var(--p-border-color);
  color: var(--p-text-secondary-color);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.02);
  padding: 0.5rem 2rem;
  width: 100%;
  z-index: 10;
}

.footer-center {
  text-align: center;
  width: 100%;
  color: var(--p-text-secondary-color);
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.04em;

  &:hover {
    color: var(--p-text-color);
  }
}
</style>
