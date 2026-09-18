const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherForecast() {
  const params = new URLSearchParams({
    latitude: "30.90",
    longitude: "75.85",
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "wind_speed_10m_max",
    ].join(","),
    forecast_days: "7",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    timezone: "auto",
  });

  const response = await fetch(`${FORECAST_URL}?${params}`);

  if (!response.ok) {
    throw new Error(`Weather request failed (${response.status})`);
  }

  const data = await response.json();

  if (!data.daily?.time || data.daily.time.length !== 7) {
    throw new Error("Weather response did not include seven forecast days");
  }

  return data.daily.time.map((date, index) => ({
    date,
    weatherCode: data.daily.weather_code[index],
    temperatureMax: data.daily.temperature_2m_max[index],
    temperatureMin: data.daily.temperature_2m_min[index],
    precipitationProbability: data.daily.precipitation_probability_max[index],
    windSpeed: data.daily.wind_speed_10m_max[index],
  }));
}