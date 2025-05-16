import {
  Box,
  InputBase,
  Paper,
  IconButton,
  Badge,
  Button,
} from "@mui/material"
import {
  Search,
  CalendarToday,
  Notifications,
} from "@mui/icons-material"

export default function TopBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 3,
      }}
    >
      <Box sx={{ fontSize: 14, color: "text.secondary" }}>
        Dashboard &nbsp; &gt; &nbsp;
        <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
          Home
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Paper
          component="form"
          sx={{
            px: 1.5,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
            backgroundColor: "#0f1117",
            border: "1px solid #2c2c2c",
          }}
        >
          <Search fontSize="small" sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ color: "inherit", fontSize: 14, width: 150 }}
          />
        </Paper>

        <IconButton sx={{ color: "white" }}>
          <Badge variant="dot" color="error" overlap="circular">
            <Notifications />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  )
}
