import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  InputBase,
  Paper,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import { useSidebarSearch } from "../shared/hooks/useSidebarSearch";

const navSections = [
  {
    title: "Main",
    items: [{ text: "Home", icon: <Home />, path: "/" }],
  },
];

export default function Sidebar({ onLiveSearch }) {
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useSidebarSearch(onLiveSearch);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 250,
          bgcolor: "background.paper",
          color: "text.primary",
          borderRight: "1px solid #2c2c2c",
        },
      }}
    >
      <Box sx={{ px: 2, py: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          Sitemark-web
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Web app
        </Typography>
      </Box>

      <Box sx={{ px: 2, mb: 2 }}>
        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1e1e1e",
            borderRadius: 2,
          }}
        >
          <InputBase
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ ml: 1, flex: 1, color: "white" }}
          />
        </Paper>
      </Box>

      <SidebarHeader />
      {navSections.map(({ title, items }) => (
        <Box key={title}>
          <List>
            {items.map(({ text, icon, path }) => {
              const isActive = location.pathname === path;
              return (
                <ListItemButton
                  key={text}
                  component={Link}
                  to={path}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    my: 0.5,
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                    color: isActive ? "primary.main" : "text.secondary",
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              );
            })}
          </List>
          <Divider sx={{ mx: 2, my: 1 }} />
        </Box>
      ))}
    </Drawer>
  );
}
