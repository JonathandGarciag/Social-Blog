import { Box, Typography } from "@mui/material";
import PostCard from "../components/PostCard";
import PostFilters from "../components/PostFilters";
import { usePostOverview } from "../shared/hooks/usePostOverview";

export default function Overview() {
  const { posts, selectedCategories, setSelectedCategories } = usePostOverview();

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Overview
      </Typography>

      <PostFilters
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
        sort={""}
        onSortChange={() => {}}
      />

      {posts.length === 0 ? (
        <Typography variant="body2" color="text.secondary" mt={2}>
          No hay publicaciones disponibles.
        </Typography>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </Box>
  );
}
