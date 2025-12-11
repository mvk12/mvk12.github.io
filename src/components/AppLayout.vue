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
.layout main {
  padding: 1rem;
}
</style>
