import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <div className="p-4 bg-slate-900 flex place-content-center items-center">
      <Link to="/">
        <h1 className="flex">
          <span className="flex text-2xl font-bold text-white">
            Pod <FaMicrophoneAlt className="text-3xl text-amber-400" />
            Topics
          </span>
        </h1>
      </Link>
      <div className="absolute right-6">
        <Link className="text-amber-400" to="/news">
          Trending News
        </Link>
        <Link className="text-amber-400 mx-6" to="/reddit">
          AskReddit
        </Link>
      </div>
    </div>
  );
};

export default Header;
