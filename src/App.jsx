// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HeaderAll } from "./components/HomeOrganick/Header/HeaderAll/HeaderAll";
import { AllHomePage } from "./components/HomeOrganick/AllHomePage/AllHomePage";
import { Footer } from "./components/HomeOrganick/Footer/Footer";
import { AllProductsPage } from "./components/Shop/AllProductsShop/AllProductsShop";
import { AboutAllCommand } from "./components/About/AboutAllCommand/AboutAllCommand";
import InputSubscrible from "./components/HomeOrganick/SubscribeInfo/InputSubscribe/InputSubscrible";
import { Toaster } from "react-hot-toast";
import LoginForm from "./components/HomeOrganick/Header/UserRegistration/LoginForm/LoginForm";
import { UserProfile } from "./components/HomeOrganick/Header/UserRegistration/UserProfile/UserProfile";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderAll />
      <Routes>
        <Route path="/" element={<AllHomePage />} />
        <Route path="HeroAbout" element={<AboutAllCommand />} />
        <Route path="Pages" element={<div>Pages</div>} />
        <Route path="Shop" element={<AllProductsPage />} />
        <Route path="Projects" element={<div>Projects</div>} />
        <Route path="News" element={<div>News</div>} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <InputSubscrible />
      <Footer />
    </div>
  );
}

export default App;
