import { useState, useEffect } from "react";
import { getNewsAPI } from "../api/reddit";

export const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      await loadNews();
    })();
  }, []);

  const loadNews = async () => {
    try {
      const response = await getNewsAPI();
      setNews(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    news,
  };
};
