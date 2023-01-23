import { useState, useEffect } from "react";
import { client } from "../lib/client";
import { BsChevronDoubleDown } from "react-icons/bs";

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
    <div className="bg-slate-900 h-screen">
      <div className="container mx-auto grid h-screen place-items-center">
        <h2 className="text-4xl lg:text-4xl px-4 text-center  text-white leading-normal">
          {getTopic}
        </h2>
        <div className="flex flex-col">
          <button
            className="text-slate-900 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-full text-lg px-12 py-6 text-center mb-6"
            onClick={handleClick}
          >
            Get a Topic
          </button>
          <a
            href="#footer"
            className="text-amber-400 text-center m-0 hover:underline-offset-auto	"
          >
            Submit a topic
          </a>
        </div>
        <BsChevronDoubleDown className="animate-bounce text-amber-400 text-3xl mb-4" />
      </div>
    </div>
  );
};

export default Main;
