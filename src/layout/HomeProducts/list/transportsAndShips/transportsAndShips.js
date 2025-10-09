import { FaRegUser } from "react-icons/fa";

import {
  AUTOMOBILES,
  BUSES,
  CHIVAS,
  ENGLISH,
  SHIPS,
  SPANISH,
  SPORT_BOAT,
  TRANSPORTS,
  VANS,
  YACHTS,
  upToPeople,
} from "../../../../utils/constants";

const transportsGenerator = ({ languaje, upTo }) => ({
  outstanding: upTo.map((person) => ({
    label: upToPeople(person, languaje),
    icon: <FaRegUser />,
  })),
});

export const transportsAndShipsItems = (languaje) => [
  {
    id: "TR01",
    img: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
    type: TRANSPORTS[languaje],
    isAvailable: true,
    info: {
      name: AUTOMOBILES[languaje],
      type: AUTOMOBILES[languaje],
      mainDescription: {
        [SPANISH]:
          "Alquiler de Automóviles - Libertad y comodidad para explorar Cartagena",
        [ENGLISH]: "Car Rental - Freedom and comfort to explore Cartagena",
      },
      description: {
        [SPANISH]:
          "Descubre Cartagena a tu propio ritmo con nuestro servicio de alquiler de automóviles, ideal para viajeros que buscan comodidad, independencia y seguridad. Contamos con una amplia variedad de vehículos —desde autos compactos hasta camionetas familiares y modelos de lujo— para adaptarnos a tus necesidades. Todos nuestros vehículos están en excelentes condiciones, con mantenimiento al día, aire acondicionado y asistencia personalizada. Perfecto para moverte fácilmente por la ciudad, visitar las playas, o realizar excursiones a destinos cercanos como Barú, Palenque o Santa Marta.",
        [ENGLISH]: "",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [4] }),
      gallery: [],
    },
  },
  {
    id: "TR02",
    img: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
    type: TRANSPORTS[languaje],
    isAvailable: true,
    info: {
      name: VANS[languaje],
      type: VANS[languaje],
      mainDescription: {
        [SPANISH]:
          "Transporte en Vans - Comodidad y estilo para tus recorridos",
        [ENGLISH]: "Van Transportation - Comfort and style for your journeys",
      },
      description: {
        [SPANISH]:
          "Viaja con total comodidad y seguridad con nuestro servicio de transporte en vans, ideal para grupos, familias o viajeros que desean disfrutar de traslados privados con la mejor atención. Nuestras vans modernas y climatizadas ofrecen amplio espacio, asientos confortables y conductores profesionales con experiencia en rutas turísticas. Perfecto para traslados desde y hacia el aeropuerto, city tours, excursiones a destinos como Barú, Islas del Rosario, Palenque o Santa Marta, y cualquier recorrido dentro o fuera de la ciudad. Disfruta de un viaje placentero, puntual y con el toque de hospitalidad cartagenera que nos caracteriza.",
        [ENGLISH]:
          "Travel in total comfort and safety with our van transportation service, perfect for groups, families, or travelers looking for private transfers with top-quality service. Our modern, air-conditioned vans feature spacious interiors, comfortable seating, and professional drivers experienced in tourist routes. Ideal for airport transfers, city tours, and excursions to destinations like Barú, the Rosario Islands, Palenque, or Santa Marta — all while enjoying punctual service and Cartagena’s warm hospitality.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [10, 16, 23] }),
      gallery: [],
    },
  },
  {
    id: "TR03",
    img: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
    type: TRANSPORTS[languaje],
    isAvailable: true,
    info: {
      name: BUSES[languaje],
      type: BUSES[languaje],
      mainDescription: {
        [SPANISH]:
          "Transporte en Buses Climatizados - Comodidad y capacidad para grupos grandes",
        [ENGLISH]:
          "Air-Conditioned Bus Service - Comfort and capacity for large groups",
      },
      description: {
        [SPANISH]:
          "Disfruta de un viaje cómodo y seguro con nuestro servicio de transporte en buses climatizados, diseñado para grupos grandes, excursiones y eventos especiales. Contamos con modernos autobuses equipados con aire acondicionado, asientos reclinables, sistema de sonido y todo lo necesario para un recorrido placentero. Nuestros conductores profesionales garantizan un traslado puntual, seguro y con la mejor atención. Ideal para traslados turísticos, recorridos por la ciudad, viajes a destinos cercanos como Barú, Santa Marta o Palenque, y transporte para convenciones o grupos empresariales.",
        [ENGLISH]:
          "Enjoy a comfortable and safe journey with our air-conditioned bus service, perfect for large groups, excursions, and special events. Our modern buses are equipped with air conditioning, reclining seats, sound systems, and everything needed for a pleasant trip. Professional drivers ensure punctual, safe, and reliable transportation. Ideal for sightseeing tours, city transfers, trips to destinations such as Barú, Santa Marta, or Palenque, and group or corporate events.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [30, 40] }),
      gallery: [],
    },
  },
  {
    id: "TR04",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
    type: TRANSPORTS[languaje],
    isAvailable: true,
    info: {
      name: CHIVAS[languaje],
      type: CHIVAS[languaje],
      mainDescription: {
        [SPANISH]:
          "Transporte en Chivas - Tradición, música y alegría sobre ruedas",
        [ENGLISH]: "Chiva Transportation - Tradition, music, and joy on wheels",
      },
      description: {
        [SPANISH]:
          "Disfruta del auténtico espíritu caribeño con nuestro servicio de transporte en chivas, los coloridos autobuses típicos que llenan de música y diversión las calles de Cartagena. Perfectas para city tours, eventos, fiestas privadas o recorridos nocturnos, nuestras chivas cuentan con música en vivo, animador, bebidas y todo el ambiente festivo que caracteriza a la ciudad. Una experiencia cultural y alegre, ideal para grupos, empresas, familias o amigos que buscan vivir Cartagena de una forma única, combinando transporte, entretenimiento y tradición en un solo viaje lleno de sabor y ritmo.",
        [ENGLISH]:
          "Experience the true Caribbean spirit with our chiva transportation service, the colorful traditional buses that bring music and fun to Cartagena’s streets. Perfect for city tours, events, private parties, or night rides, our chivas feature live music, an entertainer, drinks, and the lively atmosphere that defines the city. A joyful and cultural experience, ideal for groups, companies, families, or friends who want to enjoy Cartagena in a unique way — blending transportation, entertainment, and tradition in one unforgettable ride full of rhythm and flavor.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [50] }),
      gallery: [],
    },
  },
  {
    id: "S01",
    img: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
    type: SHIPS[languaje],
    isAvailable: false,
    info: {
      name: SPORT_BOAT[languaje],
      type: SPORT_BOAT[languaje],
      mainDescription: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      description: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [10, 13, 16, 22] }),
      gallery: [],
    },
  },
  {
    id: "S02",
    img: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
    type: SHIPS[languaje],
    isAvailable: true,
    info: {
      name: YACHTS[languaje],
      type: YACHTS[languaje],
      mainDescription: {
        [SPANISH]: "Lujo y exclusividad en el mar Caribe",
        [ENGLISH]: "Luxury and exclusivity on the Caribbean Sea",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia inolvidable navegando por las aguas turquesas del Caribe con nuestro servicio de alquiler de yates en Cartagena. Perfecto para celebrar ocasiones especiales, disfrutar con amigos o simplemente relajarte bajo el sol rodeado de paisajes paradisíacos. Contamos con una flota moderna y segura de yates de diferentes tamaños y estilos, todos equipados con sonido, zonas de descanso, tripulación profesional y todas las comodidades que mereces. Disfruta de un día de lujo visitando lugares como las Islas del Rosario, Cholón, Playa Blanca o Barú, con la atención personalizada y el servicio premium que nos caracteriza.",
        [ENGLISH]:
          "Live an unforgettable experience sailing through the turquoise waters of the Caribbean with our yacht rental service in Cartagena. Perfect for celebrating special occasions, spending time with friends, or simply relaxing under the sun surrounded by breathtaking views. We offer a modern and safe fleet of yachts in various sizes and styles, all equipped with sound systems, lounging areas, professional crew, and all the comforts you deserve. Enjoy a luxurious day visiting destinations like the Rosario Islands, Cholón, Playa Blanca, or Barú, with personalized attention and premium service that make your experience truly exceptional.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      ...transportsGenerator({ languaje, upTo: [8, 13, 16] }),
      gallery: [],
    },
  },
];
