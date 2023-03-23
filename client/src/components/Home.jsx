import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { client } from "../lib/client";
import { BsChevronDoubleDown } from "react-icons/bs";
import Info from "./Info";
import { auth } from "../firebase";

const Main = () => {
  const [getTopic, setGetTopic] = useState("Tap the button. Get a topic.");
  const [topics, setTopics] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleClick = () => {
    client
      .fetch(
        `*[_type == "topics"]{
      description}`
      )
      .then((data) => {
        setTopics(data);
        setGetTopic(data[Math.floor(Math.random() * data.length)].description);
      })
      .catch((error) => console.log(error));
  };

  const handleAddToFavorites = async () => {
    if (!user) {
      alert("Please sign in to add to favorites!");
      return;
    }

    const favorite = {
      _type: "favorites",
      user: {
        _type: "reference",
        _ref: user.uid, // assuming that the UID is the ID of the user document in Sanity.io
      },
      topics: topics.map((topic) => ({
        _type: "reference",
        _ref: topic._id, // assuming that the _id is the ID of the topic document in Sanity.io
      })),
    };

    client.create(favorite).then((createdFavorite) => {
      setFavorites([...favorites, createdFavorite]);
      alert("Added to favorites!");
    });
    console.log(client.config());
  };

  return (
    <div className="bg-slate-900 min-h-screen">
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
          <button
            className="text-slate-900 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 font-medium rounded-full text-lg px-8 py-2 text-center mb-6"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
          <a
            href="#footer"
            className="text-amber-400 text-center m-0 hover:underline"
          >
            Submit a topic
          </a>
        </div>
        <BsChevronDoubleDown className="animate-bounce text-amber-400 text-3xl mb-4" />
      </div>
      <Info />
    </div>
  );
};

export default Main;
