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
