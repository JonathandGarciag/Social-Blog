import { useState, useEffect } from "react";
import { getPostsFiltered } from "../../services/postService";

export function usePostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const category =
          selectedCategories.length > 0
            ? selectedCategories.map((c) => c.value).join(",")
            : undefined;

        const data = await getPostsFiltered({ category, sort });
        setPosts(data || []);
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      }
    };

    fetchPosts();
  }, [selectedCategories, sort]);

  return {
    posts,
    filteredPosts,
    setFilteredPosts,
    selectedCategories,
    setSelectedCategories,
    sort,
    setSort,
  };
}
