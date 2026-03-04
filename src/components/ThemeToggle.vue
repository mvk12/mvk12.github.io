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
  border: 1px solid var(--border-color);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  border-radius: 6px;
  color: var(--text-primary);
  touch-action: manipulation;
}

.theme-toggle:hover {
  background-color: var(--bg-secondary);
  border-color: var(--accent);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.toggle-icon {
  display: inline-block;
}
</style>
