import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from "./pages/Favorites";
import News from "./pages/News";
import Reddit from "./pages/Reddit";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen justify-between">
          <Header />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/reddit" element={<Reddit />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
