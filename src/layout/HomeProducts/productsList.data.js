import {
  AUTOMOBILES,
  BUSES,
  CHIVAS,
  DAYPASS,
  RENTALS,
  SHIPS,
  SPORT_BOAT,
  TOURS,
  TRANSPORTS,
  VANS,
  YACHTS,
} from "../../utils/constants";
import { cabinsItems } from "./list/hosting/cabins";
import { farmHousesItems } from "./list/hosting/farmHouses";
import { hostingItems } from "./list/hosting/hosting";
import { hotelsItems } from "./list/hosting/hotels";
import { housesItems } from "./list/hosting/houses";

export const items = (languaje) => [
  ...hostingItems(languaje),
  ...hotelsItems(languaje),
  ...cabinsItems(languaje),
  ...housesItems(languaje),
  ...farmHousesItems(languaje),

  {
    id: "T01",
    img: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
    type: TOURS[languaje],
    info: {
      name: "Tierra bomba",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      description: {
        hours: "9am a 4pm",
        warning: "Boats leave every 30 minutes and return from 2pm",
      },
    },
  },
  {
    id: "T02",
    img: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
    type: TOURS[languaje],
    info: {
      name: "Playa linda",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      description: {
        hours: "9am a 4pm",
        warning: "Boats leave every 30 minutes and return from 2pm",
      },
    },
  },
  {
    id: "T03",
    img: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
    type: TOURS[languaje],
    info: {
      name: "Playa blanca",
      location: "Barú",
      type: DAYPASS[languaje],
      description: {
        hours: "8am a 4pm",
      },
    },
  },
  {
    id: "T04",
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: TOURS[languaje],
    info: {
      name: "Cholon",
      location: "Barú",
      type: DAYPASS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T05",
    img: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
    type: TOURS[languaje],
    info: {
      name: "Islas privadas",
      location: "Barú",
      type: DAYPASS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T06",
    img: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
    type: TOURS[languaje],
    info: {
      name: "Citytour",
      location: "Cartagena",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T07",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
    type: TOURS[languaje],
    info: {
      name: "Rumba en chiva",
      location: "Cartagena",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T08",
    img: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
    type: TOURS[languaje],
    info: {
      name: "Volcan del Totumo",
      location: "Cartagena",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T09",
    img: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
    type: TOURS[languaje],
    info: {
      name: "Cartagena a Barranquilla",
      location: "Cartagena - Barranquilla",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T10",
    img: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
    type: TOURS[languaje],
    info: {
      name: "Cartagena a Santa Marta",
      location: "Cartagena - Santa Marta",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "T11",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
    type: TOURS[languaje],
    info: {
      name: "Cartagena a Palenque",
      location: "Cartagena - Palenque",
      type: TOURS[languaje],
      description: {
        hours: "free",
      },
    },
  },
  {
    id: "TR01",
    img: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
    type: TRANSPORTS[languaje],
    info: {
      name: AUTOMOBILES[languaje],
      type: AUTOMOBILES[languaje],
      description: {
        capacity: ["1 a 4 personas"],
      },
    },
  },
  {
    id: "TR02",
    img: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
    type: TRANSPORTS[languaje],
    info: {
      name: VANS[languaje],
      type: VANS[languaje],
      description: {
        capacity: [
          "hasta 10 personas",
          "hasta 16 personas",
          "hasta 23 personas",
        ],
      },
    },
  },
  {
    id: "TR03",
    img: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
    type: TRANSPORTS[languaje],
    info: {
      name: BUSES[languaje],
      type: BUSES[languaje],
      description: {
        capacity: ["hasta 30 personas", "hasta 40 personas"],
      },
    },
  },
  {
    id: "TR04",
    img: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
    type: TRANSPORTS[languaje],
    info: {
      name: CHIVAS[languaje],
      type: CHIVAS[languaje],
      description: {
        capacity: ["hasta 50 personas"],
      },
    },
  },
  {
    id: "TR05",
    img: "https://www.elcarrocolombiano.com/wp-content/uploads/2023/06/20230608-CAMIONETAS-PICK-UP-BARATAS-CHEVROLET-MONTANA-RENAULT-OROCH-RAM-700-01.jpg",
    type: TRANSPORTS[languaje],
    info: {
      name: RENTALS[languaje],
      type: RENTALS[languaje],
      description: {
        capacity: ["Carros", "Camionetas"],
      },
    },
  },
  {
    id: "S01",
    img: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
    type: SHIPS[languaje],
    info: {
      name: SPORT_BOAT[languaje],
      type: SPORT_BOAT[languaje],
      description: {
        capacity: [
          "hasta 10 personas",
          "hasta 13 personas",
          "hasta 16 personas",
          "hasta 22 personas",
        ],
      },
    },
  },
  {
    id: "S02",
    img: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
    type: SHIPS[languaje],
    info: {
      name: YACHTS[languaje],
      type: YACHTS[languaje],
      description: {
        capacity: [
          "hasta 8 personas",
          "hasta 13 personas",
          "hasta 16 personas",
        ],
      },
    },
  },
];
