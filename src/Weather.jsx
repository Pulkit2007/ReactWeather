import Card from "./components/Card"
import Header from "./components/Header"
import Search from "./components/Search"
import { fetchWeatherForecast } from "../api/api"
import { useEffect, useState } from "react"

export default function Weather({ isDarkMode, onToggleTheme }) {
    const [forecast, setForecast] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchWeatherForecast()
            .then(setForecast)
            .catch((requestError) => setError(requestError.message))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <Header isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
            <Search />
            {isLoading && <p>Loading forecast...</p>}
            {error && <p>Unable to load forecast: {error}</p>}
            {!isLoading && !error && (
                <section className="forecast-grid">
                    {forecast.map((day) => (
                        <Card key={day.date} forecast={day} />
                    ))}
                </section>
            )}
        </>
    )
}