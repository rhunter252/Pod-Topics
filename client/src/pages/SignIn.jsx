import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import loginImg from "../assets/podcast.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate.push("/"); // Redirect the user to the home page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 h-screen w-full">
      <div className="bg-slate-900 flex flex-col justify-center">
        <form
          onSubmit={signIn}
          className="max-w-[400px] w-full mx-auto bg-slate-800 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign In
          </h2>
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
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
          </div>
          <button
            className="w-full p-2 mt-2 bg-amber-400 rounded-md"
            type="submit"
          >
            Sign In
          </button>
          <div className="text-center text-gray-400 mt-6">
            <Link to="/signup" className="hover:text-amber-400">
              Not a member? Sign Up Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
