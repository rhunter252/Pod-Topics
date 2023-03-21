import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Home from "./components/Home";
import News from "./pages/News";
import Reddit from "./pages/Reddit";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import AuthDetails from "./components/AuthDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/reddit" element={<Reddit />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
          <AuthDetails />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
