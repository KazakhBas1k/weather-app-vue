<script setup lang="ts">
import Stat from "./Stat.vue";
const { wind, humidity, rain } = defineProps<{
  wind: number | null;
  humidity: number | null;
  rain: number | null;
}>();
</script>

<template>
  <div class="select_container">
    <div class="stat_container">
      <Stat v-if="humidity !== null" label="Влажность" :stat="`${humidity}%`" />
      <Stat v-if="rain !== null" label="Осадки" :stat="`${rain}%`" />
      <Stat
        v-if="wind != null"
        label="Ветер"
        :stat="`${Math.round(wind)} км/ч`"
      />
    </div>
  </div>
</template>

<style scoped>
.select_container {
  background: var(--card-bg);
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  padding: 55px;
  height: 623px;
}

.stat_container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
