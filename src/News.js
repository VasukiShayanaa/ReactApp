import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const NewsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Article = styled.div`
  margin-bottom: 20px;
`;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = "70c65f404db44bc39e163867e9be1e39";
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <NewsContainer>
      {news.map((article) => (
        <Article key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Article>
      ))}
    </NewsContainer>
  );
};

export default News;
