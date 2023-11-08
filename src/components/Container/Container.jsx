import React from "react";

const Container = ({ width, children, className, style }) => (
  <section
    style={{ ...style, width }}
    className={`app__container ${className}`}
  >
    {children}
  </section>
);

export default Container;
