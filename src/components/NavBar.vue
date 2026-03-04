<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <nav class="nav">
    <div class="brand">Miguel Angel Vázquez Vázquez</div>
    <ul class="links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/projects">Proyectos</router-link></li>
    </ul>
    <ThemeToggle />
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.brand {
  font-weight: 700;
}

.links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.links a {
  text-decoration: none;
  color: inherit;
}
</style>
