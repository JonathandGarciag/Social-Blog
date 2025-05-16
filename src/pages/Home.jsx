import { Container, Typography, Box } from "@mui/material";
import PostCard from "../components/PostCard";
import PostFilters from "../components/PostFilters";
import Sidebar from "../components/Sidebar";
import { usePostList } from "../shared/hooks/usePostList";

const Home = () => {
  const {
    posts,
    filteredPosts,
    setFilteredPosts,
    selectedCategories,
    setSelectedCategories,
    sort,
    setSort
  } = usePostList();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Sidebar onLiveSearch={setFilteredPosts} />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Publicaciones
        </Typography>

        <PostFilters
          selectedCategories={selectedCategories}
          onChange={setSelectedCategories}
          sort={sort}
          onSortChange={setSort}
        />
      </Box>

      {(filteredPosts || posts).length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          {(filteredPosts || posts).map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No hay publicaciones disponibles.
        </Typography>
      )}
    </Container>
  );
};

export default Home;
