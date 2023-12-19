import React from "react";
import { BsFillStarFill, BsGeoAlt } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CardPresentation.style.scss";

const CardPresentation = ({
  id,
  img,
  name,
  location,
  price,
  rating,
  viewDetails,
}) => (
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
      {viewDetails && (
        <Link
          to={{
            pathname: `/products`,
            search: `id=${id}`,
          }}
          className="card__presentation__caption__price"
        >
          Ver Galeria
        </Link>
      )}
    </section>
  </section>
);

export default CardPresentation;
