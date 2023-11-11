import React from "react";
import { BsFillStarFill, BsGeoAlt } from "react-icons/bs";
import "./CardPresentation.style.scss";

const CardPresentation = ({ img, name, location, price, rating }) => (
  <section className="card__presentation">
    {rating && (
      <section className="card__presentation__rating">
        <BsFillStarFill />
        {rating}
      </section>
    )}
    <img src={img} alt={name} />
    <section className="brightness" />
    <section className="card__presentation__caption">
      <b>{name}</b>
      <p>
        <BsGeoAlt />
        {location}
      </p>
      {price && (
        <label className="card__presentation__caption__price">${price}</label>
      )}
    </section>
  </section>
);

export default CardPresentation;
