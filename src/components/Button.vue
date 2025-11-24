<script setup lang="ts"></script>

<template>
  <button class="button">Button</button>
</template>

<style scoped>
.button {
  border: none;
  border-radius: 10px;
  background: var(--gradient);
  color: var(--primary);
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
}
.button:hover {
  background: var(--gradient-inverted);
}
</style>
