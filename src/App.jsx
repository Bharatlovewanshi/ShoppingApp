import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <div className="w-11/12">
      <div className="bg-slate-900 w-[110%]">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
};

export default App;
