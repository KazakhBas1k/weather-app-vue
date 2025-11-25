<script setup lang="ts">
import IconSun from "../icons/IconSun.vue";
import IconCloud from "../icons/IconCloud.vue";
import IconRain from "../icons/IconRain.vue";
import { computed } from "vue";

const {
  selected = false,
  day,
  temp,
  weather,
} = defineProps({
  selected: Boolean,
  day: String,
  temp: Number,
  weather: String,
});

const color = computed(() =>
  selected ? "var(--primary-inverted)" : "var(--primary)",
);
</script>

<template>
  <div class="card_container" :class="selected ? 'selected' : 'non_selected'">
    <IconSun v-if="weather === 'sun'" :size="55" :color="color" />
    <IconCloud v-if="weather === 'cloud'" :size="55" :color="color" />
    <IconRain v-if="weather === 'rain'" :size="55" :color="color" />
    <p>{{ day }}</p>
    <span>{{ temp }} °C</span>
  </div>
</template>

<style scoped>
.card_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 15px 25px 20px;
  border-radius: 10px;
  cursor: pointer;
}

.non_selected:hover {
  background: var(--second-bg-inverted);
}

.non_selected {
  background: var(--second-bg);
}

.selected {
  background: var(--primary);
  color: var(--primary-inverted);
}

.card_container p {
  color: inherit;
  font-size: 20px;
  font-weight: 400;
}

.card_container span {
  color: inherit;
  font-size: 20px;
  font-weight: 700;
}
</style>
