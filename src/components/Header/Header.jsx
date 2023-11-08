import React, { useContext } from "react";
import Container from "../Container";
import { appLanguaje, appTheme, routeTabs } from "./data";
import { BiGlobe } from "react-icons/bi";
import { BsBrightnessHigh } from "react-icons/bs";
import { DARK, ENGLISH, LIGHT, SPANISH } from "../../utils/constants";
import { Link } from "react-router-dom";
import { PreferencesAppContext } from "../../context/Preferences";
import "./Header.style.scss";

const classNamePrefixComponent = "header";

const isDarkTheme = (theme) => (theme === DARK ? DARK : "");

const Header = () => {
  const { languaje, theme, setLanguaje, setTheme } = useContext(
    PreferencesAppContext
  );
  const handlerLanguaje = () =>
    languaje === SPANISH ? setLanguaje(ENGLISH) : setLanguaje(SPANISH);

  const handlerTheme = () =>
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT);

  return (
    <header className={classNamePrefixComponent}>
      <Container
        className={`${classNamePrefixComponent}__container`}
        width="90%"
      >
        <h2>
          <Link to="/">
            <span>Jowy </span>Travel <span>& </span>Tours
          </Link>
        </h2>
        <nav className={`${classNamePrefixComponent}__links`}>
          <ul>
            {routeTabs[languaje].map(({ link, label }, index) => (
              <li key={index}>
                <Link to={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside className={`${classNamePrefixComponent}__settings`}>
          <ul>
            <li onClick={handlerLanguaje}>
              <BiGlobe />
              {appLanguaje[languaje]}
            </li>
            <li
              className={`${classNamePrefixComponent}__settings__btn__gradient ${isDarkTheme(
                theme
              )}`}
              onClick={handlerTheme}
            >
              <BsBrightnessHigh />
              {appTheme[theme]}
            </li>
          </ul>
        </aside>
      </Container>
    </header>
  );
};

export default Header;
