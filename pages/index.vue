<template>
  <div class="welcome-cards">
    <Card class="welcome-card">
      <template #header>
        <div class="welcome-header">
          <Avatar icon="pi pi-nuxt" shape="circle" class="welcome-avatar" />
          <h2>Nuxt3 PrimeVue Template</h2>
        </div>
      </template>
      <template #content>
        <p class="welcome-intro">
          A modern starter template combining Nuxt3 and PrimeVue.<br>
          Access each page from the sidebar.<br>
          Leverage rich UI components for efficient and beautiful development.
        </p>
        <div class="welcome-actions">
          <Button severity="primary" icon="pi pi-chart-line" label="Go to Dashboard" @click="navigateToDashboard" />
        </div>
      </template>
      <template #footer>
        <span class="welcome-footer">Current time: {{ currentTime }}</span>
      </template>
    </Card>
    <Card class="welcome-card">
      <template #header>
        <div class="welcome-header">
          <Avatar icon="pi pi-cog" shape="circle" class="welcome-avatar" />
          <h2>Features</h2>
        </div>
      </template>
      <template #content>
        <ul class="feature-list">
          <li><i class="pi pi-check-circle feature-icon"/> Nuxt3 + PrimeVue integration</li>
          <li><i class="pi pi-check-circle feature-icon"/> Responsive layout</li>
          <li><i class="pi pi-check-circle feature-icon"/> Sidebar navigation</li>
          <li><i class="pi pi-check-circle feature-icon"/> Modern SCSS styling</li>
        </ul>
      </template>
      <template #footer>
        <Tag icon="pi pi-info-circle" severity="info" value="Version 1.0.0" class="welcome-version" />
      </template>
    </Card>
    <Card class="welcome-card">
      <template #header>
        <div class="welcome-header">
          <Avatar icon="pi pi-github" shape="circle" class="welcome-avatar" />
          <h2>Get Started</h2>
        </div>
      </template>
      <template #content>
        <p class="welcome-intro">
          Visit the <a href="https://github.com/seijikohara/nuxt3-primevue-template" target="_blank">
            GitHub repository
          </a> for documentation and updates.<br>
          Fork or star the project to support development!
        </p>
      </template>
      <template #footer>
        <Button icon="pi pi-github" label="GitHub" severity="secondary" outlined @click="openGithub" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentTime = ref(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

const navigateToDashboard = () => {
  router.push('/dashboard');
};

const openGithub = () => {
  window.open('https://github.com/seijikohara/nuxt3-primevue-template', '_blank');
};

const timer: NodeJS.Timeout = setInterval(() => {
  currentTime.value = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
}, 1000);

onMounted(() => {
  // timer is already set above
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.welcome-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 2rem 0 0 0;
}

.welcome-card {
  flex: 1 1 320px;
  min-width: 320px;
  max-width: 370px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.welcome-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.welcome-header h2 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0.5rem 0 0 0;
}

.welcome-avatar {
  background: var(--primary-color);
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.welcome-intro {
  font-size: 1.05rem;
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.welcome-actions {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.welcome-info {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.welcome-version {
  font-size: 1rem;
}

.welcome-footer {
  display: block;
  text-align: right;
  color: var(--text-color-secondary);
  font-size: 0.95rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  font-size: 1.05rem;
  color: var(--text-color-secondary);
}

.feature-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.feature-icon {
  color: var(--primary-color);
  margin-right: 0.5rem;
}

@media (max-width: 1100px) {
  .welcome-cards {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
}
</style>
