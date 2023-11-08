import React from "react";
import "./TableHeader.style.scss";

const TableHeader = () => {
  return (
    <thead className="table__header">
      <tr>
        <th className="active">Hospedaje</th>
        <th>Pasadias</th>
        <th>Tours</th>
        <th>Transportes</th>
        <th>Embarcaciones</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
