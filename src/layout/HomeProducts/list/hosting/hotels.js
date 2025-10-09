import { MdOutlineDoorFront } from "react-icons/md";

import {
  BOCAGRANDE,
  ENGLISH,
  HOSTING,
  HOTELS,
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
    "Piscina",
    ...additional[SPANISH],
  ],
  [ENGLISH]: ["Air-conditioning", "Wifi", "TV", "Pool", ...additional[ENGLISH]],
});

export const hotelsItems = (languaje) => [
  {
    id: "H15",
    img: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Ibatama",
      location: BOCAGRANDE,
      type: HOTELS[languaje],
      mainDescription: {
        [SPANISH]: "Comodidad y encanto caribeño con vista al mar",
        [ENGLISH]: "Comfort and Caribbean charm with a sea view",
      },
      description: {
        [SPANISH]:
          "Disfruta de una estadía inolvidable en el Edificio Ibatama, un lugar ideal para quienes buscan comodidad, ubicación y el auténtico ambiente del Caribe. Situado en una de las zonas más turísticas de Cartagena, ofrece apartamentos amplios, bien equipados y con hermosas vistas hacia el mar o la ciudad. Relájate en su piscina, camina unos pasos hasta la playa o disfruta de los mejores restaurantes y comercios cercanos. Perfecto para familias, parejas o grupos que desean vivir Cartagena con confort y estilo.",
        [ENGLISH]:
          "Enjoy an unforgettable stay at the Ibatama Building, the perfect place for those seeking comfort, location, and the true Caribbean atmosphere. Located in one of Cartagena’s most touristic areas, it offers spacious, well-equipped apartments with beautiful views of the sea or the city. Relax by the pool, take a short walk to the beach, or explore the nearby restaurants and shops. Perfect for families, couples, or groups who want to experience Cartagena with comfort and style.",
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
              label: bedrooms(1, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 1,
            },
            isOutstanding: false,
            personList: [2, 4, 6, 8],
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187486/Jowy%20Travels%20y%20Tour/Ibatama/3_xaahhv.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187485/Jowy%20Travels%20y%20Tour/Ibatama/1_enwvuk.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187504/Jowy%20Travels%20y%20Tour/Ibatama/12_kyryi9.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187502/Jowy%20Travels%20y%20Tour/Ibatama/10_whw0dr.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187493/Jowy%20Travels%20y%20Tour/Ibatama/4_kghsgk.jpg",
        },

        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715187493/Jowy%20Travels%20y%20Tour/Ibatama/5_uerbl5.jpg",
        },
      ],
    },
  },
  {
    id: "H16",
    img: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Marbella",
      location: "Marbella",
      type: HOTELS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Frente a la playa"],
          [ENGLISH]: ["In front of the beach"],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(1, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 1,
            },
            isOutstanding: false,
            personList: [2, 4, 6, 8],
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
];
