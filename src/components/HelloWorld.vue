<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  msg: string;
}

defineProps<Props>()

const counter = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click.prevent="counter++">Click me</button>
  <p>Clicked {{ counter }} times.</p>
</template>
