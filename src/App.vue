<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import type { WeatherData } from "./models/weather.ts";
import { apiKey, apiUrl } from "./constants/api.ts";
import type { Error } from "./models/error.ts";
import InfoPanel from "./components/InfoPanel.vue";
import SelectPanel from "./components/SelectPanel.vue";

const city = ref("Almaty");
const data: Ref<WeatherData | null> = ref<WeatherData | null>(null);
const error = ref<Error | null>();
const selectedIndex: Ref<number> = ref(0);

onMounted(async () => {
  const params: URLSearchParams = new URLSearchParams({
    q: city.value,
    lang: "ru",
    key: apiKey,
    days: 4,
  });
  const res: Response = await fetch(
    `${apiUrl}/forecast.json?${params.toString()}`,
  );
  const json = await res.json();

  if (res.status === 400) {
    data.value = null;
    error.value = json;
  } else {
    data.value = json;
    error.value = null;
  }
});
</script>

<template>
  <SelectPanel />
</template>

<style scoped></style>
