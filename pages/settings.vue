<template>
  <div>
    <div class="primary-background">
      Primary Background
    </div>
    <div class="primary-600-background">
      Primary 600 Background
    </div>
    <div class="text-color">
      Text Color
    </div>
    <div class="surface-card-background">
      Surface Card Background
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
};
</script>

<style scoped>
.primary-background {
  background: var(--primary-color, #4caf50);
}

.primary-600-background {
  background: var(--primary-600, #388e3c);
}

.text-color {
  color: var(--text-color, #374151);
}

.surface-card-background {
  background: var(--surface-card, #fff);
}
</style>
