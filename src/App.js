import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Handwash from "./components/pages/beauty/Handwash";
import FaceWash from "./components/pages/beauty/FaceWash";
import Tissuewipes from "./components/pages/beauty/Tissuewipes";
import Mobile from "./components/pages/electronic/Mobile";
import Laptops from "./components/pages/electronic/Laptops";
import Menfaishon from "./components/pages/Fashion/Menfaishon";
import Womenfaishon from "./components/pages/Fashion/Womenfaishon";
import Bad from "./components/pages/Furniture/Bad";
import Home from "./components/pages/Home";
import Bakery from "./components/pages/Bakery";
import Login from "./components/Login";



function App() {
  return (
      <div className=" relative">
        <Navbar />

        <Sidebar />

        <div>
          <Routes>


            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/categries/hand-wash" element={<Handwash />} />
            <Route path="/categries/face-wash" element={<FaceWash />} />
            <Route path="/categries/tissue-wipes" element={<Tissuewipes />} />


            <Route path="/categries/mobile" element={<Mobile />} />
            <Route path="/categries/laptops" element={<Laptops />} />


            <Route path="/categries/bad" element={<Bad />} />

            <Route path="/categries/men-faishon" element={<Menfaishon />} />
            <Route path="/categries/women-faishon" element={<Womenfaishon />} />


            <Route path="/categries/bakery" element={<Bakery />} />

          </Routes>
        </div>
      </div>

  );
}

export default App;
