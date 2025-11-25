<script setup lang="ts">
const { label, stat } = defineProps({
  label: String,
  stat: String,
});
</script>

<template>
  <div class="stat">
    <span>{{ label }}</span>
    <p>{{ stat }}</p>
  </div>
</template>

<style scoped>
.stat {
  font-size: 28px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.stat span {
  font-weight: 700;
  text-transform: uppercase;
}

.stat p {
  font-weight: 500;
}
</style>
