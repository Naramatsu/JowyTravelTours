import React, { useContext } from "react";
import Container from "../Container";
import Grid from "../Grid";
import { Link } from "react-router-dom";
import "./Footer.style.scss";
import {
  copyRightText,
  footerDescription,
  ourSocialMedia,
  ourSocialMediaItems,
  usefulLinks,
  usefulLinksItems,
} from "./Footer.data";
import { PreferencesAppContext } from "../../context/Preferences";

const Footer = () => {
  const { languaje } = useContext(PreferencesAppContext);
  return (
    <section className="footer">
      <Container width="70%" className="footer__container">
        <Grid className="footer__info" columns={3}>
          <section>
            <h3 className="title">
              <span>Jowy </span>Travel <span>& </span>Tours
            </h3>
            {footerDescription[languaje]}
          </section>
          <section className="usefull_links">
            <h3>{usefulLinks[languaje]}</h3>
            <ul>
              {usefulLinksItems[languaje].map(({ link, label }, index) => (
                <li key={index}>
                  <Link to={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="chat-with-me">
            <h3>{ourSocialMedia[languaje]}</h3>
            <section className="footer__icons">
              {ourSocialMediaItems.map(({ link, icon }, index) => (
                <a key={index} href={link} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              ))}
            </section>
          </section>
        </Grid>
        <section className="footer__copyright">
          {copyRightText[languaje]}
        </section>
      </Container>
    </section>
  );
};

export default Footer;
