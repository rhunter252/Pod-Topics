import { useState } from "react";

const Favorites = ({ favorites }) => {
  console.log(favorites);

  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((favorites) => {
  //         setFavorites(oldArray => [...oldArray, favorites])
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <div className="flex justify-center text-2xl md:text-3xl pb-20">
        <h1 className="uppercase font-bold text-neutral-50">Favorites List</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite, i) => {
          return (
            <div className="block max-w-sm rounded-lg p-6 shadow-lg bg-slate-900">
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
