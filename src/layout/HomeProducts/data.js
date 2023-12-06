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

export const chips = {
  [SPANISH]: ["Hospedaje", "Toures", "Transporte", "Embarcaciones"],
  [ENGLISH]: ["Hosting", "Tours", "Transports", "Ships"],
};

export const subChips = {
  [SPANISH]: {
    Hospedaje: ["Apartamentos", "Hoteles", "Cabañas", "Casas", "Casa Finca"],
    Toures: ["Toures", "Pasadías"],
    Transporte: ["Automóviles", "Vans", "Busetas", "Chivas", "Alquiler"],
    Embarcaciones: ["Lanchas deportivas", "Yates"],
  },
  [ENGLISH]: {
    Hosting: ["Apartments", "Hotels", "Cabins", "Houses", "Farm House"],
    Tours: ["Tours", "Daypass"],
    Transports: ["Automobiles", "Vans", "Buses", "Chivas", "Rental"],
    Ships: ["Sports boats", "Yachts"],
  },
};

export const emptyTab = {
  [SPANISH]: "Actualmente no tenemos productos de esta categoria disponible",
  [ENGLISH]: "We currently do not have products in this category available",
};

export const btnShowMore = {
  [SPANISH]: "Mostrar más",
  [ENGLISH]: "Show more",
};
