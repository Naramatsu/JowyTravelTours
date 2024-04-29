import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./Question.style.scss";

const Question = ({ index, question, description, isActive, onClick }) => (
  <section className="frequentquestions__list__question">
    <button
      className={`accordion ${isActive}`}
      onClick={() => onClick(index - 1)}
    >
      <section className="question">
        <label>{index}</label>
        {question}
      </section>
      <FaChevronDown />
    </button>
    <section className="panel">{description}</section>
  </section>
);
export default Question;
