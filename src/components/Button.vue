<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<template>
  <button class="button">
    <slot name="icon" />
    {{ props.text }}
  </button>
</template>

<style scoped>
.button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
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
