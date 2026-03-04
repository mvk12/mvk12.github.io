<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <span class="toggle-icon">{{ isDark ? '☀️' : '🌙' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.toggle-icon {
  display: inline-block;
}
</style>
