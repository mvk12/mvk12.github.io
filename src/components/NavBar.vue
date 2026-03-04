<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <a href="#main" class="skip-link">Omitir al contenido</a>
  <nav class="nav">
    <div class="brand">Mi portafolio</div>
    <ul class="links">
      <li>
        <router-link
          to="/"
          :aria-current="$route.path === '/' ? 'page' : undefined"
          >Inicio</router-link
        >
      </li>
      <li>
        <router-link
          to="/projects"
          :aria-current="$route.path === '/projects' ? 'page' : undefined"
          >Proyectos</router-link
        >
      </li>
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
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  touch-action: manipulation;
}

.links a:hover {
  color: var(--accent);
}

.links a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: 2px;
}

.links a[aria-current='page'] {
  color: var(--accent);
  border-bottom-color: var(--accent);
  font-weight: 600;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background-color: var(--accent);
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus-visible {
  top: 0;
}
</style>
