import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="min-h-screen min-w-full font-kumb text-base selection:text-white selection:bg-[#ff7d1a]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
