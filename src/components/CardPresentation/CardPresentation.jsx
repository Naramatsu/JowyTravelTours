import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import "./CardPresentation.style.scss";

const CardPresentation = ({ img, name, location }) => {
  return (
    <section className="card__presentation">
      <img src={img} alt={name} />
      <section className="brightness" />
      <section className="card__presentation__caption">
        <b>{name}</b>
        <p>
          <BsGeoAlt />
          {location}
        </p>
      </section>
    </section>
  );
};

export default CardPresentation;
