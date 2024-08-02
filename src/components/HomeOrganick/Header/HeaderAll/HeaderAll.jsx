import { LogoStrings } from "../Logo/LogoPng/LogoStrings";
import Navigation from "../Navigation/Navigation";
import all from "./HeaderAll.module.css";
import LogicalModal from "../UserRegistration/LogicalModal/LogicalModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { Basket } from "../Basket/BasketIcon/Basket";

export function HeaderAll() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div className={all.header}>
        <LogoStrings />
        <Navigation />
        {isLoggedIn ? (
          <NavLink to="/profile" className={all.profileLink}>
            Go to Profile
          </NavLink>
        ) : (
          <button onClick={toggleModal} className={all.registrationButton}>
            Registration
          </button>
        )}
        {isModalOpen && <LogicalModal toggleModal={toggleModal} />}
        <Basket />
      </div>
    </header>
  );
}
