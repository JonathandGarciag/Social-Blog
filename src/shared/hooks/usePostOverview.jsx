import { useState, useEffect } from "react";
import { getPostsFiltered } from "../../../services/postService";

export function usePostOverview() {
  const [posts, setPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = selectedCategories.map((c) => c.value).join(",");
      const data = await getPostsFiltered({ category });
      setPosts(data);
    };

    fetchData();
  }, [selectedCategories]);

  return { posts, selectedCategories, setSelectedCategories };
}
