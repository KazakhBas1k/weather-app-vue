export interface WeatherData {
  location: {
    name: string;
  };
  forecast: {
    forecastday: DayData[];
  };
}

export interface DayData {
  date: string;
  day: {
    avgtemp_c: number;
    maxwind_kph: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    condition: {
      text: string;
      code: number;
    };
  };
}
