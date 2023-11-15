import React from "react";
import "./ContactUsPanel.style.scss";
import Grid from "../../layout/Grid";

const ContactUsPanel = ({ img, title, description, buttonText, theme }) => (
  <Grid columns={2} className={`app__contactus__panel ${theme}`}>
    <img src={img} alt="banner" />
    <section className="app__contactus__panel__container">
      {title}
      {description}
      <button>{buttonText}</button>
    </section>
  </Grid>
);

export default ContactUsPanel;
