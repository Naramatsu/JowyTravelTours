import React from "react";
import { builRateStars } from "../../utils";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./CardClientsTestimonials.style.scss";

const componentClassNamePrefix = "card__clients__testimonials";

const CardClientsTestimonials = ({ items, languaje, theme }) => (
  <section className={`${componentClassNamePrefix} ${theme}`}>
    <FaQuoteLeft className="icon__bg" />
    <FaQuoteRight className="icon__bg down" />
    <section className={`${componentClassNamePrefix}__info`}>
      <img src={items.img} alt="avatar" />
      <h3>{items.name}</h3>
    </section>
    <section className={`${componentClassNamePrefix}__caption`}>
      <p>{items.testimonial[languaje]}</p>
    </section>
    <section className={`${componentClassNamePrefix}__rate`}>
      {builRateStars(items.rate).map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </section>
  </section>
);

export default CardClientsTestimonials;
