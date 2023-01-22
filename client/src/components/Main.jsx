import { useState, useEffect } from "react";
import Topics from "../constants/topics";
import { client } from "../lib/client";

const Main = () => {
  const [getTopic, setGetTopic] = useState("Tap the button. Get a topic.");
  const [tops, setTops] = useState([]);

  const randomTopic = tops[Math.floor(Math.random() * tops.length)];

  const handleClick = () => {
    client
      .fetch(
        `*[_type == "topics"]{
      title,
      description}`
      )
      .then((data) => {
        setTops(data);
        setGetTopic(data[Math.floor(Math.random() * data.length)].description);
        console.log(data[Math.floor(Math.random() * data.length)].description);
      })
      .catch((error) => console.log(error));
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
