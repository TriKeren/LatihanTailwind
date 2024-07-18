import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Fordentist from "./page/Fordentist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="landingpage-for-dentist" element={<Fordentist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
