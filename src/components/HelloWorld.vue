<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
