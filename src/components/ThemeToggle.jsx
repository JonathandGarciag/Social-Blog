import { IconButton, Tooltip } from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"
import { useThemeMode } from "../theme/ThemeContext"

export default function ThemeToggle() {
  const { toggleTheme, mode } = useThemeMode()

  return (
    <Tooltip title="Cambiar tema">
      <IconButton color="inherit" onClick={toggleTheme}>
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  )
}
