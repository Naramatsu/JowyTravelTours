import React, { useState } from "react";
import { ACTIVE } from "../../utils/constants";
import { FaChevronDown } from "react-icons/fa6";
import "./Question.style.scss";

const Question = ({ index, question, description }) => {
  const [isActive, setIsActive] = useState("");

  const toggleActive = () => {
    setIsActive(isActive ? "" : ACTIVE);
  };

  return (
    <section className="frequentquestions__list__question">
      <button className={`accordion ${isActive}`} onClick={toggleActive}>
        <section className="question">
          <label>{index}</label>
          {question}
        </section>
        <FaChevronDown />
      </button>
      <section className="panel">{description}</section>
    </section>
  );
};

export default Question;
