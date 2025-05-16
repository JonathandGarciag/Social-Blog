import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"
import PostDetail from "../src/shared/hooks/PostDetail";
import SearchResults from "../src/shared/hooks/SearchResults"

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>
    </Routes>
  )
}

export default App
