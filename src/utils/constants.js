export const SPANISH = "spanish";
export const ENGLISH = "english";
export const DARK = "dark";
export const LIGHT = "light";
export const LEFT = "left";
export const RIGHT = "right";
export const ACTIVE = "active";
export const PAUSED = "paused";

export const HOSTING = {
  [SPANISH]: "Hospedaje",
  [ENGLISH]: "Hosting",
};

export const APARTMENTS = {
  [SPANISH]: "Apartamentos",
  [ENGLISH]: "Apartments",
};

export const HOTELS = {
  [SPANISH]: "Hoteles",
  [ENGLISH]: "Hotels",
};

export const CABINS = {
  [SPANISH]: "Cabañas",
  [ENGLISH]: "Cabins",
};

export const HOUSES = {
  [SPANISH]: "Casas",
  [ENGLISH]: "Houses",
};

export const FARM_HOUSES = {
  [SPANISH]: "Casa Finca",
  [ENGLISH]: "Farm House",
};

export const TOURS = {
  [SPANISH]: "Tures",
  [ENGLISH]: "Tours",
};

export const DAYPASS = {
  [SPANISH]: "Pasadías",
  [ENGLISH]: "Daypass",
};

export const AUTOMOBILES = {
  [SPANISH]: "Automóviles",
  [ENGLISH]: "Automobiles",
};

export const VANS = {
  [SPANISH]: "Vans",
  [ENGLISH]: "Vans",
};

export const BUSES = {
  [SPANISH]: "Busetas",
  [ENGLISH]: "Buses",
};

export const CHIVAS = {
  [SPANISH]: "Chivas",
  [ENGLISH]: "Chivas",
};

export const RENTALS = {
  [SPANISH]: "Alquiler",
  [ENGLISH]: "Rental",
};

export const TRANSPORTS = {
  [SPANISH]: "Transporte",
  [ENGLISH]: "Transports",
};

export const SHIPS = {
  [SPANISH]: "Embarcaciones",
  [ENGLISH]: "Ships",
};

export const SPORT_BOAT = {
  [SPANISH]: "Lanchas deportivas",
  [ENGLISH]: "Yates",
};

export const YACHTS = {
  [SPANISH]: "Sports boats",
  [ENGLISH]: "Yachts",
};

export const imgBanner =
  "https://w0.peakpx.com/wallpaper/621/721/HD-wallpaper-playa-de-bocagrande-cartagena-colombia-beach-sand-graphy-travel-nature-sunset.jpg";

export const celphone = "(+57) 317 8559 796";
export const hours = "7am - 9pm EST";

export const BOCAGRANDE = "Bocagrande";
export const LAGUITO = "El laguito";
export const BOQUILLA = "Boquilla";
export const SANTAMARTA = "Santa Marta";

export const locationBox = [BOCAGRANDE, LAGUITO, BOQUILLA, SANTAMARTA];

export const mainDescription1 = {
  [SPANISH]:
    "Descanse y relájese en la habitación Peaceful que evoca sensaciones de abundancia y refresco.",
  [ENGLISH]:
    "Rest and relax in the Peaceful room that evokes feelings of abundance and refreshment.",
};

export const description1 = {
  [SPANISH]:
    "Con áreas amplias y cómodas y luz natural que entra a raudales por los grandes ventanales, las habitaciones estándar le abren las puertas de la amplitud solo para usted.",
  [ENGLISH]:
    "With wide and comfortable areas and daylight pouring in from the large windows, standard rooms open the doors of spaciousness just for you.",
};

export const defaultHostingProperties = {
  [SPANISH]: [
    "Aire acondicionado",
    "Comedor",
    "Wifi",
    "Televisor",
    "Servicio de habitacion",
    "Minibar",
    "Restaurante",
    "Piscina",
    "Vista al mar",
  ],
  [ENGLISH]: [
    "Air-conditioning",
    "Dining room",
    "Wifi",
    "TV",
    "Room service",
    "Minibar",
    "Restaurant",
    "Pool",
    "Seaview",
  ],
};

export const additionalWarning = (people, languaje) => {
  if (languaje === SPANISH)
    return `+${people} personas pago adicional por persona.`;

  return `+${people} people additional payment per person.`;
};

export const people = (languaje) => {
  if (languaje === SPANISH) return `Personas.`;
  return `People.`;
};

export const bedrooms = (rooms, languaje) => {
  if (languaje === SPANISH) return `${rooms} Habitacion/es.`;
  return `${rooms} Bedroom/s.`;
};

export const upToPeople = (people, languaje) => {
  if (languaje === SPANISH) return `Hasta ${people} Personas.`;
  return `Up to ${people} People.`;
};

export const beds = (type, languaje) => {
  if (languaje === SPANISH) {
    let result = " Cama ";
    if (type === "King") return (result += `King`);
    return (result += "Sencilla");
  }
  if (type === "King") return ` ${type} Bed`;
  return ` ${type} Bed`;
};
