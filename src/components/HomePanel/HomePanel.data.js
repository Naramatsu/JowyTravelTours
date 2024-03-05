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

export const productsPreview = {
  hosting: {
    [SPANISH]:
      "Hosting SPANISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
    [ENGLISH]:
      "Hosting ENGLISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
  },
  tours: {
    [SPANISH]:
      "Tours SPANISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
    [ENGLISH]:
      "Tours ENGLISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
  },
  transports: {
    [SPANISH]:
      "Transports SPANISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
    [ENGLISH]:
      "Transports ENGLISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
  },
  ships: {
    [SPANISH]:
      "Ships SPANISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
    [ENGLISH]:
      "Ships ENGLISH Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 150",
  },
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
