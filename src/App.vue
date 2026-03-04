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
  --bg-primary: #fafafa;
  --bg-secondary: #f0f2f5;
  --text-primary: #1a1a1a;
  --text-secondary: #555555;
  --text-muted: #888888;
  --border-color: #d0d0d0;
  --accent: #0052cc;
  --accent-hover: #0041a3;
}

[data-theme='dark'] {
  --bg-primary: #0d0d0d;
  --bg-secondary: #1a1a1a;
  --text-primary: #f0f0f0;
  --text-secondary: #b8b8b8;
  --text-muted: #888888;
  --border-color: #2a2a2a;
  --accent: #5eb3ff;
  --accent-hover: #7ac2ff;
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
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-hover);
}
</style>
