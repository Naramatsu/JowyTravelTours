import React from "react";
import "./Shape.style.scss";

const Shape = ({ cuantity, label }) => (
  <section className="shape__container">
    <section className="shape">
      <label>{cuantity}</label>
    </section>
    {label && <p className="shape__caption">{label}</p>}
  </section>
);

export default Shape;
