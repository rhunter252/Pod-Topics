import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Home from "./components/Home";
import News from "./pages/News";
import Twitter from "./pages/Twitter";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/news" element={<News />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
