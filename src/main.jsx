import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeModeProvider } from "./theme/ThemeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      )}
    </ThemeModeProvider>
  </React.StrictMode>
)
