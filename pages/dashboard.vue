<template>
  <div class="dashboard-container">
    <div class="card-grid">
      <Card class="dashboard-card">
        <template #title>User Statistics</template>
        <p>Active Users: 1,234</p>
        <p>New Signups: 56</p>
      </Card>

      <Card class="dashboard-card">
        <template #title>Sales Overview</template>
        <p>Total Sales: $45,678</p>
        <p>Monthly Growth: 12%</p>
      </Card>

      <Card class="dashboard-card">
        <template #title>Tasks</template>
        <p>Pending Tasks: 8</p>
        <p>Completed Tasks: 42</p>
      </Card>

      <Card class="dashboard-card">
        <template #title>Notifications</template>
        <ul>
          <li>Server maintenance scheduled at 2 AM</li>
          <li>New user registered: John Doe</li>
          <li>Backup completed successfully</li>
        </ul>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.dashboard-card {
  padding: 1rem;
}
</style>
