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
import { PortfolioAll } from "./components/Portfolio/PortfolioAll/PortfolioAll";
import { BlogAll } from "./components/Blog/BlogAll/BlogAll";
import { HeroError } from "./components/Error/HeroError/HeroError";
import { BasketAll } from "./components/HomeOrganick/Header/Basket/BascketAll/BasketAll";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderAll />
      <Routes>
        <Route path="/" element={<AllHomePage />} />
        <Route path="HeroAbout" element={<AboutAllCommand />} />
        <Route path="portfolio" element={<PortfolioAll />} />
        <Route path="Shop" element={<AllProductsPage />} />
        <Route path="Projects" element={<div>Projects</div>} />
        <Route path="Blog" element={<BlogAll />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<HeroError />} />{" "}
        <Route path="/basket" element={<BasketAll />} />
      </Routes>
      <InputSubscrible />
      <Footer />
    </div>
  );
}

export default App;
