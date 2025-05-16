import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"


export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box p={3}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
