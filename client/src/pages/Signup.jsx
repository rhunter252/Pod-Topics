import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const signUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErrorMessage("Thank you for signing up");
          console.log(userCredential);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long");
      } else {
        setErrorMessage("Passwords do not match");
      }
      console.log("Password validation failed");
    }
  };

  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-slate-900 flex flex-col justify-center px-4">
        <form
          className="max-w-[400px] w-full mx-auto bg-slate-800 p-8 px-8 rounded-lg my-16"
          onSubmit={signUp}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign Up
          </h2>
          {/* <div className="flex flex-col text-gray-400 py-2">
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
          </div> */}
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-slate-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-500 focus:outline-none"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 py-2">{errorMessage}</div>
          )}
          <button className="w-full p-2 mt-6 bg-amber-400 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
