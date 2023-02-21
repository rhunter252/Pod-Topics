import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <Link to="/">
        <h1 className="flex">
          <span className="flex text-2xl font-bold text-white">
            Pod <FaMicrophoneAlt className="text-3xl text-amber-400" />
            Topics
          </span>
        </h1>
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 7a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 7a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow flex justify-center">
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-400  hover:text-white mr-4"
            to="/news"
          >
            Trending News
          </Link>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 text-amber-400  hover:text-white mr-4"
            to="/reddit"
          >
            AskReddit
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
