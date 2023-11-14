import React, { useContext } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { PreferencesAppContext } from "../../context/Preferences";
import "./CardClientsTestimonials.style.scss";

const builRateStars = (rate) => {
  const result = [];
  const residue = rate - Math.trunc(rate);
  for (let i = 1; i <= rate; i++) {
    result.push(<FaStar />);
  }
  residue && result.push(<FaStarHalfAlt />);
  for (let i = result.length; i < 5; i++) {
    result.push(<FaRegStar />);
  }
  return result;
};

const CardClientsTestimonials = ({ items }) => {
  const { theme } = useContext(PreferencesAppContext);
  return (
    <section className={`card__clients__testimonials ${theme}`}>
      <FaQuoteLeft className="icon__bg" />
      <FaQuoteRight className="icon__bg down" />
      <section className="card__clients__testimonials__info">
        <img src={items.img} alt="avatar" />
        <h3>{items.name}</h3>
      </section>
      <section className="card__clients__testimonials__caption">
        <p>{items.testimonial}</p>
      </section>
      <section className="card__clients__testimonials__rate">
        {builRateStars(items.rate).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </section>
    </section>
  );
};

export default CardClientsTestimonials;
