import { FaMicrophoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="p-4 bg-slate-900 flex place-content-center items-center">
      <h1 className="flex">
        <span className="flex text-2xl font-bold text-white">
          Pod <FaMicrophoneAlt className="text-3xl text-amber-400" />
          Topics
        </span>
      </h1>
    </div>
  );
};

export default Header;
