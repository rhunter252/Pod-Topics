import { Link } from "react-router-dom";
import { FaMicrophoneAlt } from "react-icons/fa";

const Header = () => {
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
      <div className="grid justify-end">
        <Link className="text-amber-400 justify-self-end" to="/news">
          News
        </Link>
      </div>
    </div>
  );
};

export default Header;
