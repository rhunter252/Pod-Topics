import { useState } from "react";
import { ref, remove } from "firebase/database";

const Favorites = ({ favorites, user, db, setFavorites }) => {
  console.log(favorites);

  const handleRemoveFavorite = (id) => {
    // Check if the user is logged in
    if (!user) {
      alert("You must be logged in to remove a favorite.");
      return;
    }

    // Get a reference to the user's favorites in the database
    const userFavoritesRef = ref(db, "users/" + user.uid + "/favorites/" + id);

    // Remove the favorite with the given ID
    remove(userFavoritesRef)
      .then(() => {
        alert("Favorite removed!");
        setFavorites(favorites.filter((favorite) => favorite.id !== id));
      })
      .catch((error) => {
        console.log(error);
        alert("Error removing favorite.");
      });
  };

  return (
    <div>
      <div className="flex justify-center text-2xl md:text-3xl pb-20">
        <h1 className="uppercase font-bold text-neutral-50">Favorites List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, i) => {
          return (
            <div
              key={favorite.id}
              className="block max-w-sm rounded-lg p-6 shadow-lg bg-slate-800"
            >
              <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-50">
                {favorite.description}
              </h5>
              <button
                type="button"
                className="inline-block rounded bg-amber-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-slate-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => handleRemoveFavorite(favorite.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
