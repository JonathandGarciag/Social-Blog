import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.paper", boxShadow: "none", borderBottom: "1px solid #333" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}
