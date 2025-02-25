import { MdOutlineDoorFront } from "react-icons/md";

import {
  CABINS,
  ENGLISH,
  HOSTING,
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
    "Camas",
    "Abanicos",
    "Restaurante",
    "Vista al mar",
    ...additional[SPANISH],
  ],
  [ENGLISH]: ["Beds", "Fans", "Restaurant", "Sea view", ...additional[ENGLISH]],
});

export const cabinsItems = (languaje) => [
  {
    id: "H17",
    img: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: CABINS[languaje],
      location: "Barú",
      type: CABINS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Cabañas naturales"],
          [ENGLISH]: ["Natural cabins"],
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
            personList: [2, 4],
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
        },
        {
          url: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
        },
      ],
    },
  },
  {
    id: "H18",
    img: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: CABINS[languaje],
      location: "Playa tranquila",
      type: CABINS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: {
        ...defaultHostingProperties(),
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
          url: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
        },
        {
          url: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
        },
      ],
    },
  },
];
