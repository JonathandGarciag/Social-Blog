import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000/social-media/v3/",
  timeout: 5000,
})

export const getPostsFiltered = async ({ category, sort } = {}) => {
  try {
    const params = {}

    if (category) params.category = category
    if (sort) params.sort = sort

    const response = await apiClient.get("/posts/", { params })
    return response.data.posts
  } catch (error) {
    console.error("Error al obtener publicaciones filtradas:", error)
    return []
  }
}

export const getPostById = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}`);
    return response.data.post;
  } catch (error) {
    console.error("Error al obtener la publicación por ID:", error);
    return null;
  }
};

export const searchPostsByTitle = async (title) => {
  const response = await apiClient.get(`/posts/search-by-title?title=${encodeURIComponent(title)}`);
  return response.data;
};
