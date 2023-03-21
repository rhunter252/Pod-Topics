import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p className="block mt-4 lg:inline-block lg:mt-0 text-amber-400  hover:text-white mr-4">{`Signed in as ${authUser.email}`}</p>
          <button
            className="block mt-4 lg:inline-block lg:mt-0 bg-amber-400 text-slate-900  hover:text-white text-center font-bold rounded-lg mr-4 px-2"
            onClick={userSignOut}
          >
            Sign out
          </button>
        </>
      ) : (
        <Link
          className="block mt-4 lg:inline-block lg:mt-0 bg-amber-400 text-slate-900  hover:text-white text-center font-bold rounded-lg mr-4 px-2"
          to="/login"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthDetails;
