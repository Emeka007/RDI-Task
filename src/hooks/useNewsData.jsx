import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;
        const apiUrl = `https://newsapi.org/v2/top-headlines?category=general&apiKey=cb6b77ae5a9a4fa7bb958dc994fbf637`;
        const categoryParam = category ? `&category=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";
        const url = apiUrl + categoryParam + searchParam;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;