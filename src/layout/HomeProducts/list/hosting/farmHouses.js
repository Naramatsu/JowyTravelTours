import { MdOutlineDoorFront } from "react-icons/md";

import {
  ENGLISH,
  FARM_HOUSES,
  HOSTING,
  SPANISH,
  bedrooms,
  defaultHostingProperties,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const farmHousesItems = (languaje) => [
  {
    id: "H22",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: FARM_HOUSES[languaje],
      location: "Turbaco",
      type: FARM_HOUSES[languaje],
      mainDescription: {
        [SPANISH]:
          "Casa Finca en Turbaco – Naturaleza, frescura y descanso cerca de Cartagena",
        [ENGLISH]:
          "Country House in Turbaco – Nature, freshness, and relaxation near Cartagena",
      },
      description: {
        [SPANISH]:
          "Escápate del ritmo de la ciudad y disfruta de la tranquilidad en esta hermosa Casa Finca ubicada en Turbaco, Bolívar, a solo unos minutos de Cartagena. Rodeada de naturaleza, ofrece amplias zonas verdes, piscina privada, jardines y espacios perfectos para compartir en familia o con amigos. Es el lugar ideal para descansar, realizar eventos o simplemente desconectarte en un entorno campestre lleno de frescura y armonía. Aquí vivirás una experiencia relajante con el auténtico encanto de la vida tropical.",
        [ENGLISH]:
          "Escape the city’s pace and enjoy tranquility at this beautiful Country House located in Turbaco, Bolívar, just a few minutes from Cartagena. Surrounded by nature, it features spacious green areas, a private pool, gardens, and perfect spaces to share with family or friends. It’s the ideal place to rest, host events, or simply unwind in a fresh and peaceful countryside setting. Here, you’ll experience true relaxation with the authentic charm of tropical living.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [],
          [ENGLISH]: [],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            upTo: 9,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(6, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 6,
            },
            upTo: 18,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
];
