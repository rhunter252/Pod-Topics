import { useState, useEffect } from "react";
import axios from "axios";

const Twitter = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.twitter.com/1.1/trends/place.json",
          {
            headers: {
              Authorization: `Bearer ${process.env.VITE_APP_API_TOKEN}`,
            },
          }
        );
        setTrends(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrends();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Twitter</h1>
      {trends.map((trend) => (
        <div key={trend.name}>{trend.name}</div>
      ))}
    </div>
  );
};

export default Twitter;
