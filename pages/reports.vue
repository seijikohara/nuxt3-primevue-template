<template>
  <div class="report">
    <h1 class="report-title">Report</h1>
    <p class="report-description">This is a report description.</p>
    <div class="report-content">
      <!-- Report content goes here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
};
</script>

<style scoped>
.report {
  color: var(--text-color, #374151);
  background: var(--surface-card, #fff);
  padding: 1rem;
  border-radius: 0.5rem;
}

.report-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.report-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.report-content {
  font-size: 0.875rem;
}
</style>
