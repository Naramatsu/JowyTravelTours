import {
  APARTMENTS,
  AUTOMOBILES,
  BUSES,
  CABINS,
  CHIVAS,
  DAYPASS,
  ENGLISH,
  FARM_HOUSES,
  HOSTING,
  HOTELS,
  HOUSES,
  RENTALS,
  SHIPS,
  SPANISH,
  SPORT_BOAT,
  TOURS,
  TRANSPORTS,
  VANS,
  YACHTS,
} from "../../utils/constants";

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

const subChipsGenerator = (languaje, type) => {
  if (type === "chips") {
    return [
      HOSTING[languaje],
      TOURS[languaje],
      TRANSPORTS[languaje],
      SHIPS[languaje],
    ];
  }
  return {
    [HOSTING[languaje]]: [
      APARTMENTS[languaje],
      HOTELS[languaje],
      CABINS[languaje],
      HOUSES[languaje],
      FARM_HOUSES[languaje],
    ],
    [TOURS[languaje]]: [TOURS[languaje], DAYPASS[languaje]],
    [TRANSPORTS[languaje]]: [
      AUTOMOBILES[languaje],
      VANS[languaje],
      BUSES[languaje],
      CHIVAS[languaje],
      RENTALS[languaje],
    ],
    [SHIPS[languaje]]: [SPORT_BOAT[languaje], YACHTS[languaje]],
  };
};

export const chips = {
  [SPANISH]: subChipsGenerator(SPANISH, "chips"),
  [ENGLISH]: subChipsGenerator(ENGLISH, "chips"),
};

export const subChips = {
  [SPANISH]: subChipsGenerator(SPANISH),
  [ENGLISH]: subChipsGenerator(ENGLISH),
};

export const emptyTab = {
  [SPANISH]: "Actualmente no tenemos productos de esta categoria disponible",
  [ENGLISH]: "We currently do not have products in this category available",
};

export const btnShowMore = {
  [SPANISH]: "Mostrar más",
  [ENGLISH]: "Show more",
};

export const toLabel = {
  [SPANISH]: "a",
  [ENGLISH]: "to",
};

export const boatsSchedule = {
  [SPANISH]: "Las lanches salen cada 30 minutos y regresan a las 2pm.",
  [ENGLISH]: "Boats leave every 30 minutes and return from 2pm.",
};
