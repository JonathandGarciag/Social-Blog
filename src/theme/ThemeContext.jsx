import { createContext, useMemo, useState, useContext } from "react"
import { createTheme } from "@mui/material"

const ThemeContext = createContext()

export function useThemeMode() {
  return useContext(ThemeContext)
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState("dark")

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        background: {
          default: mode === "dark" ? "#0f1117" : "#f3f4f6",
          paper: mode === "dark" ? "#1a1d23" : "#ffffff",
        },
      },
      typography: {
        fontFamily: "Inter, Roboto, sans-serif",
      },
    })
  }, [mode])

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      {children(theme)}
    </ThemeContext.Provider>
  )
}
