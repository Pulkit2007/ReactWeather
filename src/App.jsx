
import './App.css'
import Weather from './Weather'
import { useEffect, useState } from 'react'


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'theme-dark' : 'theme-light'}>
      <Weather
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
      />
    </div>
  )

}