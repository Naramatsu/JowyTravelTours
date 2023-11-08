import { BsFillPeopleFill, BsSearch, BsSend } from "react-icons/bs";
import { ENGLISH, SPANISH } from "../../utils/constants";

export const hospedajeForm = {
  [SPANISH]: [
    { label: "Ubicación", name: "ubicación", icon: <BsSend /> },
    { label: "Capacidad", name: "capacidad", icon: <BsFillPeopleFill /> },
  ],
  [ENGLISH]: [
    { label: "Location", name: "location", icon: <BsSend /> },
    { label: "Capacity", name: "capacity", icon: <BsFillPeopleFill /> },
  ],
};

export const btnSearch = {
  icon: <BsSearch />,
  [SPANISH]: {
    label: "Buscar Ahora",
  },
  [ENGLISH]: {
    label: "Search Now",
  },
};
