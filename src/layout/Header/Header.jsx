import React, { useContext } from "react";
import Container from "../../layout/Container";
import { appLanguaje, appTheme, routeTabs } from "./Header.data";
import { BiGlobe } from "react-icons/bi";
import { DARK, ENGLISH, LIGHT, SPANISH } from "../../utils/constants";
import { isDarkTheme } from "../../utils";
import { Link } from "react-router-dom";
import { PreferencesAppContext } from "../../context/Preferences";
import { ROUTES } from "../../utils/routes";
import "./Header.style.scss";

const classNamePrefixComponent = "header";

const Header = () => {
  const isHiddenProductsTabs = true;
  const { languaje, theme, setLanguaje, setTheme } = useContext(
    PreferencesAppContext
  );
  const handlerLanguaje = () =>
    languaje === SPANISH ? setLanguaje(ENGLISH) : setLanguaje(SPANISH);

  const handlerTheme = () =>
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT);

  return (
    <header className={`${classNamePrefixComponent} ${isDarkTheme(theme)}`}>
      <Container
        className={`${classNamePrefixComponent}__container`}
        width="70%"
      >
        <h2>
          <Link to={ROUTES.HOME}>
            <span>Jowy </span>Travel <span>& </span>Tours
          </Link>
        </h2>
        {!isHiddenProductsTabs && (
          <nav className={`${classNamePrefixComponent}__links`}>
            <ul>
              {routeTabs.map(({ link, label }, index) => (
                <li key={index}>
                  <Link to={link}>{label[languaje]}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <aside className={`${classNamePrefixComponent}__settings ${theme}`}>
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
              {appTheme[theme].icon}
              {appTheme[theme].className}
            </li>
          </ul>
        </aside>
      </Container>
    </header>
  );
};

export default Header;
