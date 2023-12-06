import React from "react";
import "./Shape.style.scss";

const Shape = ({ cuantity, label, icon }) => (
  <section className="shape__container">
    <section className="shape">
      {icon && icon}
      {cuantity && <label>{cuantity}</label>}
    </section>
    {label && <p className="shape__caption">{label}</p>}
  </section>
);

export default Shape;
