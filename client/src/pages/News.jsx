import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=6d4784e157f14617aa8e6dbf63a07e1e`
      );
      setArticles(response.data.articles);
      // console.log(response);
    };
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-3xl lg:text-5xl font-bold text-center my-16">News</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10">
        {articles.slice(0, 25).map((article) => {
          return (
            <a href={article.url} key={article.url} target="_blank">
              <article className="border border-slate-600 rounded-lg overflow-hidden hover:text-white hover:bg-slate-800 transition-all duration-200 cursor-pointer h-full">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    className="rounded-t-lg h-52 md:h-64 w-full object-cover object-center"
                    alt="news article"
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <p className="text-sm">
                    By {article.author} &middot;{" "}
                    {format(new Date(article.publishedAt), "dd MMMM yyyy")}
                  </p>{" "}
                  <h2 className="text-xl my-2">{article.title}</h2>
                  <p className="text-sm leading-relaxed">
                    {`${article.description}`}
                  </p>
                </div>
              </article>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default News;
