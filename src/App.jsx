import styles from "./App.module.css";
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./components/redux/auth/operations";
import { selectIsRefreshing } from "./components/redux/auth/selectors";
import { PropagateLoader } from "react-spinners";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div className={styles.loader}>
      <PropagateLoader color="#2501ff" size={25} speedMultiplier={2} />
    </div>
  ) : (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderAll />
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={<AllHomePage />}
              redirectTo="/profile"
            />
          }
        />
        <Route path="HeroAbout" element={<AboutAllCommand />} />
        <Route path="portfolio" element={<PortfolioAll />} />
        <Route path="Shop" element={<AllProductsPage />} />
        <Route path="Blog" element={<BlogAll />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<UserProfile />} redirectTo="/" />}
        />
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
