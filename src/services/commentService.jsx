import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/social-media/v3",
  timeout: 5000,
});

export const createComment = async (commentData) => {
  const response = await apiClient.post("/comments", commentData);
  return response.data.comment;
};

export const getCommentsByPostId = async (postId) => {
  const response = await apiClient.get("/comments");
  return response.data.comments.filter((c) => c.post === postId);
};
