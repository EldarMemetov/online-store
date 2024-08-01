import { IoLogoBuffer } from "react-icons/io";
import style from "./LogoStrings.module.css";
export const LogoStrings = () => {
  return (
    <div className={style.logoList}>
      <IoLogoBuffer />
      <a href="/">Organick</a>
    </div>
  );
};
