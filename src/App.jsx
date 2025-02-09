import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Inwood from "./page/Inwood";
import Positivus from "./page/Positivus";
import Corporate from "./page/Corporate";
import EcommercePaws from "./page/EcommercePaws";
import SaaS from "./page/SaaS";
import ZebbDigital from "./page/ZebbDigital";
import Fordentist from "./page/Fordentist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/responsive-ecommerce-landingpage"
          element={<EcommercePaws />}
        />
        <Route path="/inwood-ecommerce-landingpage" element={<Inwood />} />
        <Route path="/positivus" element={<Positivus />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/saaS-landingpage" element={<SaaS />} />
        <Route path="/zebb-digital-agency" element={<ZebbDigital />} />
        <Route path="/landingpage-for-dentist" element={<Fordentist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
