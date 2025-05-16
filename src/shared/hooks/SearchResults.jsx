import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchPostsByTitle } from "../../services/postService";
import { Box, Typography, CircularProgress } from "@mui/material";
import PostCard from "../../components/PostCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await searchPostsByTitle(title);
        setPosts(data || []);
      } catch (err) {
        console.error("Error al buscar publicaciones:", err);
      } finally {
        setLoading(false);
      }
    };

    if (title) fetch();
  }, [title]);

  if (loading) return <CircularProgress sx={{ mt: 5 }} />;

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Resultados para: “{title}”
      </Typography>

      {posts.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No se encontraron publicaciones.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </Box>
      )}
    </Box>
  );
}
