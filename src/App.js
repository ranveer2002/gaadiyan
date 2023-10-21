import "./App.css";
import Navbar from "./components/Navbar";
import CarDetailsForm from "./components/CarDetailsForm";
import CarDescription from "./components/CarDescription";
import Home from "./pages/Home";
import BuyCar from "./pages/BuyCar";
import SellCar from "./pages/SellCar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cars from "./data";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home Cars={Cars} />} />
        <Route path="/buycar" element={<BuyCar Cars={Cars} />} />
        <Route path="/sellcar" element={<SellCar />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/sellcar/form" element={<CarDetailsForm />} />
        <Route path="/cardescription/:id" element={<CarDescription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
