import { createTheme } from "@mui/material"

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f1117",
      paper: "#1a1d23",
    },
    primary: {
      main: "#4dabf7",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
})
