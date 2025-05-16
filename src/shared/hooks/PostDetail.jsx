import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Divider,
  Button,
  Collapse,
  TextField,
} from "@mui/material";
import {
  getPostById,
} from "../../services/postService";
import {
  getCommentsByPostId,
  createComment,
} from "../../services/commentService";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post?.title) {
      getCommentsByPostId(post.title).then(setComments);
    }
  }, [post?.title]);

  const handleSendComment = async () => {
    if (!name || !content) return;
    await createComment({
      name,
      content,
      post: post._id,
    });

    setName("");
    setContent("");
    setShowForm(false);
    const updated = await getCommentsByPostId(post.title);
    setComments(updated);
  };

  if (loading) return <CircularProgress sx={{ mt: 5 }} />;
  if (!post)
    return (
      <Typography mt={5} color="error">
        No se encontró la publicación.
      </Typography>
    );

  return (
    <Paper sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {post.category?.category} • Publicado por{" "}
        {post.author?.name || post.author} el{" "}
        {new Date(post.createdAt).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
        {post.content}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" mb={2}>
        Comentarios
      </Typography>

      <Button variant="outlined" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancelar" : "Comentar"}
      </Button>

      <Collapse in={showForm}>
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            size="small"
          />
          <TextField
            label="Contenido del comentario"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
          <Button variant="contained" onClick={handleSendComment}>
            Enviar comentario
          </Button>
        </Box>
      </Collapse>

      <Box mt={4}>
        {comments.length === 0 ? (
          <Typography color="text.secondary">
            No hay comentarios todavía.
          </Typography>
        ) : (
          comments.map((comment) => (
            <Box key={comment._id} mt={3} p={2} bgcolor="#1f1f1f" borderRadius={1}>
              <Typography fontWeight="bold">{comment.name}</Typography>
              <Typography variant="body2">{comment.content}</Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(comment.createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Box>
          ))
        )}
      </Box>
    </Paper>
  );
}
