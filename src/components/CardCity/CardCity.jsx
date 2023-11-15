import React from "react";
import "./CardCity.style.scss";

const CardCity = ({ img, city, title, buttonText }) => (
  <section className="card__city">
    <img src={img} alt={city} />
    <section className="card__city__caption">
      <label>{city}</label>
      {title}
      <button>{buttonText}</button>
    </section>
  </section>
);

export default CardCity;
