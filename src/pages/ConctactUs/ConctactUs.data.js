import { ENGLISH, SPANISH } from "../../utils/constants";

export const pageTitle = {
  [SPANISH]: "Contactanos",
  [ENGLISH]: "Contact Us",
};

export const reachOutUs = {
  [SPANISH]: "Llega a nosotros",
  [ENGLISH]: "Reach out to us",
};

export const workingHours = {
  [SPANISH]: {
    plan: "Planea tu visita",
    hours: "Horario:",
    days: "Luneas a Domingo",
  },
  [ENGLISH]: {
    plan: "Plan your visit",
    hours: "Workin hours:",
    days: "Monday - Sunday",
  },
};

export const title = {
  [SPANISH]: (
    <h3>
      Dejanos un poco de
      <br /> informacion y estaremos en contacto.
    </h3>
  ),
  [ENGLISH]: (
    <h3>
      Leave us a little <br /> info, and we'll be in touch.
    </h3>
  ),
};

export const requiredHolder = {
  [SPANISH]: "(requerido)",
  [ENGLISH]: "(required)",
};

export const formInputs = {
  [SPANISH]: {
    inputs: [
      {
        label: "Nombre",
        name: "name",
        type: "text",
        placeholder: "Tu nombre",
        required: true,
      },
      {
        label: "Asunto",
        name: "subject",
        type: "text",
        placeholder: "Asunto",
      },
      {
        label: "Correo",
        name: "email",
        type: "email",
        placeholder: "Tu correo",
        required: true,
      },
      {
        label: "Numero celular",
        name: "phone",
        type: "tel",
        placeholder: "Tu numbero de telefono",
        required: true,
      },
    ],
    message: {
      label: "Mensaje ",
      name: "message",
      type: "text",
      placeholder: "Mensaje",
      required: true,
    },
  },
  [ENGLISH]: {
    inputs: [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        label: "Subject",
        name: "subject",
        type: "text",
        placeholder: "Subject",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Your email",
        required: true,
      },
      {
        label: "Phone number",
        name: "phone",
        type: "tel",
        placeholder: "Your phone number",
        required: true,
      },
    ],
    message: {
      label: "Message ",
      name: "message",
      type: "text",
      placeholder: "Message",
      required: true,
    },
  },
};

export const btnSend = {
  [SPANISH]: "Enviar Mensaje",
  [ENGLISH]: "Send Message",
};
