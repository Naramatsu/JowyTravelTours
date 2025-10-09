import { MdOutlineDoorFront } from "react-icons/md";

import {
  ENGLISH,
  HOSTING,
  HOUSES,
  SPANISH,
  bedrooms,
  description1,
  mainDescription1,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const defaultHostingProperties = (
  additional = { [SPANISH]: [], [ENGLISH]: [] }
) => ({
  [SPANISH]: [
    "Aire acondicionado",
    "Wifi",
    "Televisor",
    "Cocina",
    "Amobladas",
    ...additional[SPANISH],
  ],
  [ENGLISH]: [
    "Air-conditioning",
    "Wifi",
    "TV",
    "Kitchen",
    "Furnished",
    ...additional[ENGLISH],
  ],
});

export const housesItems = (languaje) => [
  {
    id: "H19",
    img: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: HOUSES[languaje],
      location: "Centro histórico",
      type: HOUSES[languaje],
      mainDescription: {
        [SPANISH]:
          "En el Centro Histórico - Vive la magia colonial de Cartagena",
        [ENGLISH]:
          "In the Historic Center - Live the colonial magic of Cartagena",
      },
      description: {
        [SPANISH]:
          "Déjate envolver por el encanto del pasado en las casas coloniales del Centro Histórico de Cartagena, donde cada rincón cuenta una historia. Estas hermosas propiedades conservan la arquitectura tradicional de la ciudad amurallada, combinando detalles antiguos con el confort moderno. Disfruta de patios interiores llenos de flores, balcones con vista a las coloridas calles y una ubicación inmejorable cerca de los mejores restaurantes, bares y plazas. Perfectas para quienes buscan una experiencia auténtica, elegante y cultural en el corazón de Cartagena de Indias.",
        [ENGLISH]:
          "Immerse yourself in the charm of the past with the colonial houses in Cartagena’s Historic Center, where every corner tells a story. These beautiful properties preserve the traditional architecture of the walled city while offering modern comfort. Enjoy flower-filled courtyards, balconies overlooking colorful streets, and an unbeatable location close to the best restaurants, bars, and plazas. Perfect for travelers seeking an authentic, elegant, and cultural experience in the heart of Cartagena de Indias.",
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
              label: bedrooms(4, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 4,
            },
            upTo: 12,
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
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(9, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 9,
            },
            upTo: 27,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "H20",
    img: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: HOUSES[languaje],
      location: "Morros",
      type: HOUSES[languaje],
      mainDescription: {
        [SPANISH]: "En Morros - Exclusividad y confort frente al mar",
        [ENGLISH]: "In Morros - Exclusivity and comfort by the sea",
      },
      description: {
        [SPANISH]:
          "Descubre la elegancia del Caribe en las casas ubicadas en Morros, una de las zonas más exclusivas y tranquilas de Cartagena. Estas propiedades combinan diseño moderno, espacios amplios y acceso directo a la playa, ofreciendo una experiencia de lujo junto al mar. Perfectas para familias, parejas o grupos que buscan privacidad, comodidad y un ambiente sofisticado. Disfruta de piscinas, zonas sociales, jardines y vistas espectaculares que harán de tu estadía un verdadero placer frente al Caribe colombiano.",
        [ENGLISH]:
          "Experience Caribbean elegance at the houses located in Morros, one of Cartagena’s most exclusive and peaceful areas. These properties combine modern design, spacious interiors, and direct beach access, offering a luxurious seaside experience. Perfect for families, couples, or groups looking for privacy, comfort, and a sophisticated atmosphere. Enjoy pools, social areas, gardens, and spectacular views that will make your stay a true delight by the Colombian Caribbean.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Balcón con vista al mar",
            "Lavadora",
            "Gym",
            "Jacuzzi",
            "Piscina",
            "Salida directa al mar",
          ],
          [ENGLISH]: [
            "Balcony with sea view",
            "Washing machine",
            "Gym",
            "Jacuzzi",
            "Pool",
            "Direct access to the sea",
          ],
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
      ],
      gallery: [],
    },
  },
  {
    id: "H21",
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: HOSTING[languaje],
    isAvailable: false,
    info: {
      name: HOUSES[languaje],
      location: "Cholon",
      type: HOUSES[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Camas dobles",
            "Camas sencillas",
            "Terraza con vista a Cholon",
            "BBQ",
            "Generador electrico",
            "Mayordomo",
          ],
          [ENGLISH]: [
            "Double beds",
            "Single beds",
            "Terrace with a view of Cholon",
            "BBQ",
            "Electric generator",
            "Butler",
          ],
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
      ],
      gallery: [],
    },
  },
];
