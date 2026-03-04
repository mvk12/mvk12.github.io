<script setup lang="ts">
import { useTheme } from './composables/useTheme'
import AppLayout from './components/AppLayout.vue'

useTheme()
</script>

<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<style>
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #000000;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
}

[data-theme='dark'] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #404040;
}

/* Global app styles kept minimal — page-specific styles are scoped */
* {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

html {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

a {
  color: inherit;
}
</style>
