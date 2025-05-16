import {
  Box,
  Typography,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material"
import { ExpandMore, ExpandLess, DesktopWindows } from "@mui/icons-material"
import { useState } from "react"

export default function SidebarHeader() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#0f1117",
        border: "1px solid #2c2c2c",
        borderRadius: 2,
        px: 2,
        py: 1.5,
        mx: 2,
        my: 2,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <DesktopWindows fontSize="small" sx={{ color: "white", mr: 1 }} />
        <Typography fontWeight={600} fontSize={14} sx={{ flexGrow: 1 }}>
          Sitemark-web
        </Typography>
        <IconButton
          size="small"
          onClick={handleClick}
          sx={{ color: "white" }}
        >
          {open ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
        </IconButton>
      </Box>

      <Typography variant="caption" color="text.secondary" mt={0.5}>
        Web app
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            bgcolor: "background.paper",
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DesktopWindows fontSize="small" />
          </ListItemIcon>
          Sitemark-web
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DesktopWindows fontSize="small" />
          </ListItemIcon>
          Dashboard Pro
        </MenuItem>
      </Menu>
    </Paper>
  )
}
