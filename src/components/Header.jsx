
export default function Header({ isDarkMode, onToggleTheme }) {

    return (
        <header>
            <img className="icon" src="./src/assets/weather_mascot.png" />
            <div className="header-content">
                <h1>Weather App</h1>
            </div>
            <button
                className="theme-toggle"
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
                <span aria-hidden="true">{isDarkMode ? "☼" : "☾"}</span>
                <span>{isDarkMode ? "Light" : "Dark"}</span>
            </button>
        </header>
    )

}