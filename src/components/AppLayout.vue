<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>

<template>
  <div class="layout">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.layout main {
  flex: 1;
  background-color: var(--bg-primary);
}
</style>
