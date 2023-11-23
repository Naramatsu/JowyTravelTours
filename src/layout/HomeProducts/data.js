import { ENGLISH, SPANISH } from "../../utils/constants";

export const title = {
  [SPANISH]: (
    <h2>
      Ve a cualquier lugar <br />
      con nuestras últimas ofertas de e-Tour
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      Go anywhere <br />
      with our latest e-Tour offers
    </h2>
  ),
};

export const items = {
  [SPANISH]: Array(8).fill({
    img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    info: {
      name: "Playa blanca",
      location: "Cartagena - Baru",
    },
    price: "120.000COP",
    rating: "4.7",
    tag: "Hoteles",
  }),
  [ENGLISH]: Array(8).fill({
    img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    info: {
      name: "Playa blanca",
      location: "Cartagena - Baru",
    },
    price: "120.000COP",
    rating: "4.7",
    tag: "Hotels",
  }),
};

export const chips = {
  [SPANISH]: [
    "Hoteles",
    "Apartamentos",
    "Toures",
    "Pasadias",
    "Transporte",
    "Embarcaciones",
  ],
  [ENGLISH]: [
    "Hotels",
    "Apartments",
    "Tours",
    "DayPass",
    "Transports",
    "Ships",
  ],
};

export const emptyTab = {
  [SPANISH]: "Actualmente no tenemos productos de esta categoria disponible",
  [ENGLISH]: "We currently do not have products in this category available",
};

export const btnShowMore = {
  [SPANISH]: "Mostrar más",
  [ENGLISH]: "Show more",
};
