import {
  Box,
  Typography,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const { _id, title, category, content, author, createdAt } = post;

  const handleClick = () => {
    navigate(`/posts/${_id}`); 
  };

  return (
    <Paper
      elevation={3}
      onClick={handleClick}
      sx={{
        backgroundColor: "#1a1c22",
        border: "1px solid #2c2c2c",
        borderRadius: 2,
        p: 3,
        mb: 3,
        width: "100%",
        maxWidth: "800px",
        mx: "auto",
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          borderColor: "#3a3a3a",
          backgroundColor: "#23252b",
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Chip label={category} size="small" color="primary" />
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        mt={1}
        sx={{ whiteSpace: "pre-wrap" }}
      >
        {content}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="caption" color="text.secondary">
        Publicado por <strong>{author}</strong> el{" "}
        {new Date(createdAt).toLocaleDateString()}
      </Typography>
    </Paper>
  );
}
