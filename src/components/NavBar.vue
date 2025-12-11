<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <div class="brand">Miguel Angel Vázquez Vázquez</div>
    <ul class="links">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/cv">CV</router-link></li>
      <li><router-link to="/projects">Proyectos</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: #f5f5f5;
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
