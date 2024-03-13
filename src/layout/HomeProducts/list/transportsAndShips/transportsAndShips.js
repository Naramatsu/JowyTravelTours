import { FaRegUser } from "react-icons/fa";

import {
  AUTOMOBILES,
  BUSES,
  SHIPS,
  SPORT_BOAT,
  TRANSPORTS,
  VANS,
  YACHTS,
  defaultHostingProperties,
  description1,
  mainDescription1,
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
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [4] }),
      gallery: [
        {
          url: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
        },
        {
          url: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://definicion.de/wp-content/uploads/2019/11/Automovil-compacto-Renault-Clio.jpg",
        },
      ],
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
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [10, 16, 23] }),
      gallery: [
        {
          url: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
        },
        {
          url: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.pruebaderuta.com/wp-content/uploads/2017/01/conducir-van.jpg",
        },
      ],
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
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [30, 40] }),
      gallery: [
        {
          url: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
        },
        {
          url: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://viajescolombiaviva.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-05-at-7.53.22-AM-2-e1678051024620.jpeg",
        },
      ],
    },
  },
  {
    id: "TR04",
    img: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
    type: TRANSPORTS[languaje],
    isAvailable: true,
    info: {
      name: BUSES[languaje],
      type: BUSES[languaje],
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [50] }),
      gallery: [
        {
          url: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
        },
        {
          url: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://michiva.co/wp-content/uploads/2023/06/IMG-WEB-Julio_2023-2-08.png",
        },
      ],
    },
  },
  {
    id: "S01",
    img: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
    type: SHIPS[languaje],
    isAvailable: true,
    info: {
      name: SPORT_BOAT[languaje],
      type: SPORT_BOAT[languaje],
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [10, 13, 16, 22] }),
      gallery: [
        {
          url: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
        },
        {
          url: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://a2t7e9n4.rocketcdn.me/wp-content/uploads/2023/02/lanchas-en-cartagena-alquiler-1-600x480.jpg",
        },
      ],
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
      location: "",
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      ...transportsGenerator({ languaje, upTo: [8, 13, 16] }),
      gallery: [
        {
          url: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
        },
        {
          url: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://yatescartagena.com/co/wp-content/uploads/2021/07/Princess-P60-2015-Venta-de-Yates-en-Colombia-Yates-Cartagena-2021-924x390.jpeg",
        },
      ],
    },
  },
];
