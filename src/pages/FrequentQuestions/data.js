import { ENGLISH, SPANISH } from "../../utils/constants";

export const pageTitle = {
  [SPANISH]: "Preguntas Frecuentes",
  [ENGLISH]: "Frequents Questions",
};

export const title = {
  [SPANISH]: "Preguntas Frecuentes",
  [ENGLISH]: "Frequently Asked Questions",
};

export const subTitle = {
  [SPANISH]: "Preguntas frecuentes sobre nuestros planes.",
  [ENGLISH]: "Frequently asked questions about our business plan.",
};

export const questions = {
  [SPANISH]: Array(6).fill({
    question: "Pregunta Nro ... Sobre como nosotros...",
    response: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    ),
  }),
  [ENGLISH]: Array(6).fill({
    question: "Question Nro ... About how to...",
    response: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    ),
  }),
};
