import React from "react";
import Container from "../Container";
import { BiGlobe } from "react-icons/bi";
import { BsBrightnessHigh } from "react-icons/bs";
// import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { routeTabs } from "./data";
import "./Header.style.scss";

const classNamePrefixComponent = "header";

const Header = () => (
  <header className={classNamePrefixComponent}>
    <Container className={`${classNamePrefixComponent}__container`} width="90%">
      <h2>
        <Link to="/">
          <span>Jowy </span>Travel <span>& </span>Tours
        </Link>
      </h2>
      <nav className={`${classNamePrefixComponent}__links`}>
        <ul>
          {routeTabs.map(({ link, label }, index) => (
            <li key={index}>
              <Link to={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className={`${classNamePrefixComponent}__settings`}>
        <ul>
          <li>
            <BiGlobe />
            Es
          </li>
          <li
            className={`${classNamePrefixComponent}__settings__btn__gradient`}
          >
            <BsBrightnessHigh />
            Light
          </li>
        </ul>
      </aside>
    </Container>
  </header>
);

export default Header;
