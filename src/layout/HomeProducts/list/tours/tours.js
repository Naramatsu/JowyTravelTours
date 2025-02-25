import { FaRegClock } from "react-icons/fa";
import { IoBoatOutline } from "react-icons/io5";

import {
  CARTAGENA,
  DAYPASS,
  ENGLISH,
  SPANISH,
  TOURS,
  description1,
  mainDescription1,
} from "../../../../utils/constants";
import { boatsSchedule, toLabel } from "../../data";

const tourBuilder = ({ languaje, from, to }) => [
  {
    label: `${from} ${toLabel[languaje]} ${to}`,
    icon: <FaRegClock />,
  },
  {
    label: boatsSchedule[languaje],
    icon: <IoBoatOutline />,
  },
];

export const toursItems = (languaje) => [
  {
    id: "T01",
    img: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Tierra bomba",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [
          "Transporte en lancha",
          "Kiosko",
          "Sillas",
          "Almuerzo típico",
        ],
        [ENGLISH]: ["Boat transportation", "Kiosko", "Chairs", "Typical lunch"],
      },
      schedule: {
        [SPANISH]: [
          "Ida 9 am (cada 30 mins) - 12 m",
          "Regreso: 2 pm (cada 30 mins) - 4:30 pm",
        ],
        [ENGLISH]: [
          "Departure 9 am (every 30 min) - 12 m",
          "return: 2 pm (every 30 mins) - 4:30 pm",
        ],
      },
      outstanding: tourBuilder({ languaje, from: "9am", to: "4pm" }),
      gallery: [
        {
          url: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
        },
        {
          url: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://vistamarecartagena.com/wp-content/uploads/2022/04/pasadia-en-cartagena-playa-vista-mare.jpg",
        },
      ],
    },
  },
  {
    id: "T02",
    img: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Playa linda",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [
          "Transporte en lancha",
          "Cóctel de bienvenida",
          "Almuerzo especial",
          "Parasoles",
          "Camas",
          "Sombrillas",
          "Sillas",
        ],
        [ENGLISH]: [
          "Boat transportation",
          "Welcome cocktail",
          "Special lunch",
          "Parasol",
          "Beds",
          "Umbrellas",
          "Charis",
        ],
      },
      schedule: {
        [SPANISH]: [
          "Ida 9 am (cada 30 mins) - 12 m",
          "Regreso: 2 pm (cada 30 mins) - 4:30 pm",
        ],
        [ENGLISH]: [
          "Departure 9 am (every 30 min) - 12 m",
          "return: 2 pm (every 30 mins) - 4:30 pm",
        ],
      },
      outstanding: tourBuilder({ languaje, from: "9am", to: "4pm" }),
      gallery: [
        {
          url: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
        },
        {
          url: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
        },
      ],
    },
  },
  {
    id: "T03",
    img: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Playa blanca",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [
          "Transporte terrestre ida y vuelta",
          "Transporte ida y vuelta en barco",
          "Almuerzo",
        ],
        [ENGLISH]: [
          "Round trip ground transportation",
          "Round trip transportation by boat",
          "Lunch",
        ],
      },
      outstanding: [tourBuilder({ languaje, from: "8am", to: "4pm" }).at(0)],
      gallery: [
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
        },
      ],
    },
  },
  {
    id: "T04",
    img: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Playa blanca + Islas del Rosario",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [
          "Transporte terrestre y marítimo ida y vuelta a Islas del Rosario",
          "Transporte ida y vuelta en lancha (NO incluye pago de impuestos)",
          "Almuerzo",
        ],
        [ENGLISH]: [
          "Land and sea transportation to and from Rosario Islands",
          "Round trip transportation by boat (does NOT include tax payment)",
          "Lunch",
        ],
      },
      warnings: {
        [SPANISH]: {
          title: "Actividades (Opcionales NO INCLUIDAS)",
          items: ["Acuario", "Esnórquel"],
        },
        [ENGLISH]: {
          title: "Activities (Optional NOT INCLUDED)",
          items: ["Aquarium", "Snorkel"],
        },
      },
      outstanding: [tourBuilder({ languaje, from: "8am", to: "4pm" }).at(0)],
      gallery: [
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
        },
      ],
    },
  },
  {
    id: "T05",
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: TOURS[languaje],
    isAvailable: false,
    info: {
      name: "Cholon",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
        },
      ],
    },
  },
  {
    id: "T06",
    img: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
    type: TOURS[languaje],
    isAvailable: false,
    info: {
      name: "Islas privadas",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
        },
        {
          url: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.tomplanmytrip.com/wp-content/uploads/2022/04/Isla-Pelicano-Rosario-Island-Aymeric.jpg",
        },
      ],
    },
  },
  {
    id: "T07",
    img: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Citytour",
      location: CARTAGENA,
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
        },
        {
          url: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://ca-times.brightspotcdn.com/dims4/default/b62e116/2147483647/strip/true/crop/1515x1000+0+0/resize/1200x792!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
        },
      ],
    },
  },
  {
    id: "T08",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Rumba en chiva",
      location: CARTAGENA,
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/c8/cb/13.jpg",
        },
      ],
    },
  },
  {
    id: "T09",
    img: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Volcan del Totumo",
      location: CARTAGENA,
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
        },
        {
          url: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.las2orillas.co/wp-content/uploads/2016/06/totumo.jpg",
        },
      ],
    },
  },
  {
    id: "T10",
    img: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: `${CARTAGENA} a Barranquilla`,
      location: `${CARTAGENA} - Barranquilla`,
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
        },
        {
          url: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://probarranquilla.org/wp-content/uploads/2022/10/Banner-barranquilla5.jpg",
        },
      ],
    },
  },
  {
    id: "T11",
    img: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: `${CARTAGENA} a Santa Marta`,
      location: `${CARTAGENA} - Santa Marta`,
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
        },
        {
          url: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://content.r9cdn.net/rimg/dimg/a1/98/0d5f3612-city-10076-177d80eab0a.jpg?crop=true&width=1020&height=498",
        },
      ],
    },
  },
  {
    id: "T12",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Cartagena a Palenque",
      location: "Cartagena - Palenque",
      type: TOURS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
        },
      ],
    },
  },
];
