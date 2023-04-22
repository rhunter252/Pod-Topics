import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { client } from "../lib/client";
import { BsChevronDoubleDown } from "react-icons/bs";
import Info from "./Info";
import Favorites from "./Favorites";
import { auth, db } from "../firebase";
import { uid } from "uid";
import { getDatabase, onValue, ref, set, off, get } from "firebase/database";

const Main = () => {
  const [getTopic, setGetTopic] = useState("Tap the button. Get a topic.");
  const [topics, setTopics] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  const db = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const userFavoritesRef = ref(db, "users/" + user.uid + "/favorites");
      const handleFavoritesUpdate = (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          const favoritesArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            description: value.description,
          }));
          setFavorites(favoritesArray);
        } else {
          setFavorites([]);
        }
      };

      get(userFavoritesRef)
        .then(handleFavoritesUpdate)
        .catch((error) => {
          console.error("Error fetching favorites data:", error);
        });
    }
  }, [user]);

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

  const handleAddToFavorites = () => {
    // Check if the user is logged in
    if (!user) {
      alert("You must be logged in to add a favorite.");
      return;
    }

    // Generate a unique ID for the new favorite
    const newFavoriteKey = uid();

    // Get a reference to the user's favorites in the database
    const userFavoritesRef = ref(
      db,
      "users/" + user.uid + "/favorites/" + newFavoriteKey
    );

    // Create a new favorite object
    const newFavorite = {
      id: newFavoriteKey,
      description: getTopic,
    };

    // Add the new favorite to the user's favorites
    set(userFavoritesRef, newFavorite)
      .then(() => {
        alert("Topic added to favorites!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding topic to favorites.");
      });
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
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
      <Favorites
        favorites={favorites}
        user={user}
        db={db}
        setFavorites={setFavorites}
      />
      <Info />
    </div>
  );
};

export default Main;
