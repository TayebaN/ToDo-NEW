import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="routes-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
