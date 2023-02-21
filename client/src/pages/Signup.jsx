import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-slate-900 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-slate-800 p-8 px-8 rounded-lg my-16">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>First Name</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Last Name</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="password"
            />
          </div>
          {/* <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />I accept the
              <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
            </p>
          </div> */}
          <button className="w-full p-2 mt-6 bg-amber-400 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
