// src/components/NewsFeed.js
import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('Fetching news...');
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched articles:', data); // Debug statement
        setArticles(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError(error);
      }
    };
    fetchNews();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
