<script setup lang="ts">
const value = defineModel("value", {
  type: String,
  required: true,
});
</script>

<template>
  <input v-model="value" />
</template>

<style scoped>
input {
  padding: 15px 17px 14px 19px;
  font-size: 18px;
  font-weight: 400;
  background: var(--second-bg);
  border-radius: 10px;
  border: none;
}

input:focus {
  border: none;
}

input::placeholder {
  color: var(--placeholder);
}
</style>
