import "./App.css";
import Home from "./pages/Home";
import bg from "./assets/bg.png";
import { Route, Routes } from "react-router";
import Bmi from "./pages/Bmi";
import Hex from "./pages/Hex";

function App() {
  return (
    <div className="App bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/hex" element={<Hex />} />
      </Routes>
    </div>
  );
}

export default App;
