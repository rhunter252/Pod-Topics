import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=football&apiKey=6d4784e157f14617aa8e6dbf63a07e1e"
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default News;
