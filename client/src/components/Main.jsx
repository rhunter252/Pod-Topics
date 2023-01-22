import { useState, useEffect } from "react";
import { client } from "../lib/client";

const Main = () => {
  const [getTopic, setGetTopic] = useState("Tap the button. Get a topic.");
  const [tops, setTops] = useState([]);

  const handleClick = () => {
    client
      .fetch(
        `*[_type == "topics"]{
      description}`
      )
      .then((data) => {
        setTops(data);
        setGetTopic(data[Math.floor(Math.random() * data.length)].description);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blue-100 h-screen">
      <div className="container mx-auto grid h-screen place-items-center">
        <h2 className="text-4xl lg:text-4xl px-4 text-center leading-normal">
          {getTopic}
        </h2>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-lg px-12 py-6 text-center"
          onClick={handleClick}
        >
          Get a Topic
        </button>
      </div>
    </div>
  );
};

export default Main;
