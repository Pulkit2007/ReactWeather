
const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
};

function formatDate(date) {
    if (!date) {
        return "Forecast day";
    }

    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));
}

export default function Card({ forecast }) {
    if (!forecast) {
        return (
            <article className="weather-container">
                <p>Forecast data is not available.</p>
            </article>
        );
    }

    const {
        date,
        weatherCode,
        temperatureMax,
        temperatureMin,
        precipitationProbability,
        windSpeed,
    } = forecast;

    return (
        <article className="weather-container">
            <div>
                <h2>{formatDate(date)}</h2>
                <h3 className="weather-type">
                    {weatherDescriptions[weatherCode] || "Unknown conditions"}
                </h3>
                <p>Weather code: {weatherCode ?? "Unavailable"}</p>
                <p>High: {temperatureMax ?? "--"}°C</p>
                <p>Low: {temperatureMin ?? "--"}°C</p>
                <p>Precipitation: {precipitationProbability ?? "--"}%</p>
                <p>Wind: {windSpeed ?? "--"} km/h</p>
            </div>
        </article>
    );
}