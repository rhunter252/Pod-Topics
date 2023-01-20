import { useState, useEffect } from "react";
import topics from "./topics";

const Main = () => {
  const [getTopic, setGetTopic] = useState("Tap the button. Get a topic.");

  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  useEffect(() => {
    getTopic;
  }, []);

  const handleClick = () => {
    setGetTopic(randomTopic);
  };

  return (
    <div className="bg-blue-100 h-screen">
      <div className="container mx-auto grid h-full place-items-center sm:px-4">
        <h2 className="text-3xl leading-normal">{getTopic}</h2>
        <button
          className="rounded-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-blue-100"
          onClick={handleClick}
        >
          Get a Topic
        </button>
      </div>
    </div>
  );
};

export default Main;
