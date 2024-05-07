export const SPANISH = "spanish";
export const ENGLISH = "english";
export const DARK = "dark";
export const LIGHT = "light";
export const LEFT = "left";
export const RIGHT = "right";
export const ACTIVE = "active";
export const PAUSED = "paused";

export const CARTAGENA = "Cartagena";
export const BARRANQUILLA = "Barranquilla";
export const BARU = "Barú";
export const BOCAGRANDE = "Bocagrande";
export const LAGUITO = "El laguito";
export const BOQUILLA = "Boquilla";
export const SANTAMARTA = "Santa Marta";

export const celphone = "(+57) 310 350 4215";
export const hours = "7am - 9pm GMT-5";

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
  [ENGLISH]: "Sports boats",
};

export const YACHTS = {
  [SPANISH]: "Yates",
  [ENGLISH]: "Yachts",
};

export const imgBanner = "https://wallpapercave.com/wp/wp3350882.jpg";

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

export const appSubtitle = {
  [SPANISH]: (
    <>
      Cada viaje representa una ventana de oportunidad para descubrir nuevos
      horizontes, explorar rincones desconocidos y forjar recuerdos imborrables.
      <br />
      Cartagena de Indias se erige como un destino ideal para sumergirse en la
      magia de sus calles empedradas, sus murallas centenarias y sus
      encantadoras plazas.
      <br />
      <br />
      Es un lugar donde cada esquina guarda una historia por contar y cada
      experiencia se convierte en un tesoro inolvidable.
    </>
  ),
  [ENGLISH]: (
    <>
      Each trip represents a window of opportunity to discover new horizons,
      explore unknown corners and forge indelible memories.
      <br />
      Cartagena de Indias stands as an ideal destination to immerse yourself in
      the magic of its cobbled streets, its centuries-old walls and its charming
      squares.
      <br />
      <br />
      It is a place where every corner keeps a story to tell and each experience
      becomes an unforgettable treasure.
    </>
  ),
};
