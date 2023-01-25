import { useState, useEffect } from "react";
import axios from "axios";

const Reddit = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      const response = await axios.get(
        "https://www.reddit.com/r/askreddit/hot.json"
      );
      setTrends(response.data);
      console.log(trends.data);
    };

    fetchTrends();
  }, []);

  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold text-center my-16">
        Reddit
      </h1>
      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto px-5 mb-10">
        {trends.data &&
          trends.data.children &&
          trends.data.children.slice(0, 25).map((trend) => (
            <a key={trend.data.id} href={trend.data.url} target="_blank">
              <article className="border-2 border-slate-600 dark:border-slate-200 rounded-lg overflow-hidden hover:text-amber-400 hover:bg-slate-800 transition-all duration-200 cursor-pointer p-4">
                <div className="p-4">
                  <h2 className="text-xl my-2">{trend.data.title}</h2>
                  <p className="text-sm leading-relaxed">
                    {trend.data.num_comments.toLocaleString("en-US")} comments
                  </p>
                  <p className="text-sm">Submitted by: {trend.data.author}</p>
                </div>
              </article>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Reddit;
