<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import type { WeatherData } from "./models/weather.ts";
import { apiKey, apiUrl } from "./constants/api.ts";
import type { Error } from "./models/error.ts";
import InfoPanel from "./components/InfoPanel.vue";
import SelectPanel from "./components/SelectPanel.vue";

const city: Ref<string> = ref("Almaty");
const data: Ref<WeatherData | null> = ref<WeatherData | null>(null);
const error = ref<Error | null>();
const selectedIndex: Ref<number> = ref(0);

onMounted(async () => {
  const params: URLSearchParams = new URLSearchParams();
  params.set("q", city.value);
  params.set("lang", "ru");
  params.set("key", apiKey);
  params.set("days", String(4));
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
  <div class="container">
    <InfoPanel
      :date="data?.forecast.forecastday[selectedIndex]?.date ?? null"
      :city="data?.location.name ?? null"
      :temp="data?.forecast.forecastday[selectedIndex]?.day.avgtemp_c ?? null"
      :weather="
        data?.forecast.forecastday[selectedIndex]?.day.condition ?? null
      "
    />
    <SelectPanel
      :humidity="
        data?.forecast.forecastday[selectedIndex]?.day.avghumidity ?? null
      "
      :rain="
        data?.forecast.forecastday[selectedIndex]?.day.daily_will_it_snow ??
        null
      "
      :wind="data?.forecast.forecastday[selectedIndex]?.day.maxwind_kph ?? null"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
