import { CiMicrophoneOn } from "react-icons/ci";

const Header = () => {
  return (
    <div className="p-4 bg-blue-600 flex place-content-center items-center">
      <h1 className="flex">
        <span className="text-2xl font-bold">Pod</span>
        <CiMicrophoneOn className="text-3xl text-amber-400" />
        <span className="text-2xl font-bold">Topics</span>
      </h1>
    </div>
  );
};

export default Header;
