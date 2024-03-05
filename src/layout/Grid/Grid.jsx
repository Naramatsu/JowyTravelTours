import React from "react";
import { columnsGenerator } from "../../utils";
import "./Grid.style.scss";

const Grid = ({ children, columns, className = "" }) => {
  const columnsTemplate = columnsGenerator(columns);
  return (
    <section
      className={`app__grid ${className}`}
      style={{ gridTemplateColumns: columnsTemplate }}
    >
      {children}
    </section>
  );
};

export default Grid;
