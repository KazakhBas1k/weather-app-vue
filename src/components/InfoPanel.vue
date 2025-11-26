<script setup lang="ts">
import { computed, type ComputedRef } from "vue";
import IconSun from "../icons/IconSun.vue";
import IconCloud from "../icons/IconCloud.vue";
import IconLocation from "../icons/IconLocation.vue";
import IconRain from "../icons/IconRain.vue";

const { date, city, weather, temp } = defineProps<{
  date: string | null;
  city: string | null;
  temp: number | null;
  weather: {
    code: number;
    text: string;
  } | null;
}>();
const day: ComputedRef<string> = computed(() =>
  date
    ? new Date(date).toLocaleDateString("ru-RU", {
        weekday: "long",
      })
    : "-",
);
const dateString: ComputedRef<string> = computed(() =>
  date
    ? new Date(date)
        .toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .slice()
    : "-",
);
</script>

<template>
  <div class="info_container">
    <img src="/bg.png" alt="beach" />
    <div class="top">
      <h1>{{ day || "-" }}</h1>
      <p>{{ dateString }}</p>
      <span>
        <IconLocation />
        {{ city || "-" }}
      </span>
    </div>
    <div class="bottom">
      <IconSun
        v-if="weather ? weather.code <= 1003 : false"
        color="var(--primary)"
        :size="95"
      />
      <IconCloud
        v-if="weather ? weather?.code >= 1006 && weather?.code < 1063 : false"
        color="var(--primary)"
        :size="95"
      />
      <IconRain
        v-if="weather ? weather.code >= 1063 : false"
        color="var(--primary)"
        :size="95"
      />
      <span>{{ temp ? Math.round(temp) : "-" }} °C</span>
      <p>{{ weather?.text || "-" }}</p>
    </div>
  </div>
</template>

<style scoped>
.info_container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 493px;
  height: 666px;
  padding: 48px 32px 82px 32px;
  border-radius: 30px;
  overflow: hidden;
  background: linear-gradient(
    152.19deg,
    rgba(136, 235, 239, 0.9) -0.04%,
    rgba(83, 91, 230, 0.9) 100%
  );
}

.info_container img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.top h1::first-letter {
  text-transform: uppercase;
}

.top h1 {
  font-size: 37px;
  font-weight: 700;
}

.top p {
  font-size: 22px;
  font-weight: 500;
}

.top span {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
}

.bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 9px;
}

.bottom span {
  font-size: 50px;
  font-weight: 700;
}

.bottom p {
  font-size: 30px;
  font-weight: 700;
}
</style>
