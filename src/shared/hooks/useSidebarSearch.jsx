import { useState, useEffect } from "react";
import { searchPostsByTitle } from "../../services/postService";

export function useSidebarSearch(onLiveSearch) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTerm(searchTerm.trim());
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    const fetch = async () => {
      if (debouncedTerm.length === 0) {
        onLiveSearch(null);
        return;
      }
      try {
        const data = await searchPostsByTitle(debouncedTerm);
        onLiveSearch(data);
      } catch (err) {
        console.error("Error buscando publicaciones:", err);
      }
    };
    fetch();
  }, [debouncedTerm]);

  return { searchTerm, setSearchTerm };
}
