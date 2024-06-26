import React from "react";
import Grid from "../../layout/Grid";
import { LEFT, RIGHT } from "../../utils/constants";
import "./PanelImage.style.scss";

const PanelImage = ({
  img,
  title,
  description,
  buttonText,
  theme = "",
  side = LEFT,
  className = "",
  children,
}) => (
  <Grid columns={2} className={`app__panel__image ${theme} ${className}`}>
    {side === LEFT && <img src={img} alt="banner" />}
    <section className="app__panel__image__container">
      {title}
      {description}
      {buttonText && <button>{buttonText}</button>}
      {children}
    </section>
    {side === RIGHT && <img src={img} className={side} alt="banner" />}
  </Grid>
);

export default PanelImage;
