<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <nav class="nav">
    <div class="brand">Mi portafolio</div>
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
  padding: 1rem 2rem;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.brand {
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
  color: var(--text-primary);
}

.links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.links a {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--accent);
}
</style>
