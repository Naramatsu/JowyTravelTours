import { MdOutlineDoorFront } from "react-icons/md";

import {
  CABINS,
  ENGLISH,
  HOSTING,
  SPANISH,
  bedrooms,
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
      mainDescription: {
        [SPANISH]: "Naturaleza, mar y descanso en el paraíso",
        [ENGLISH]: "Nature, sea, and relaxation in paradise",
      },
      description: {
        [SPANISH]:
          "Escápate del ruido y vive la tranquilidad del Caribe en las Cabañas en Barú, un rincón paradisíaco rodeado de playas de arena blanca y aguas cristalinas. Disfruta del encanto natural de este destino único, donde cada amanecer y atardecer se convierten en una postal. Las cabañas ofrecen comodidad, frescura y un ambiente perfecto para descansar, desconectarte y disfrutar de la naturaleza. Ideal para parejas, familias o grupos que buscan una experiencia auténtica frente al mar, con el toque local y la calidez del pueblo barulero.",
        [ENGLISH]:
          "Escape the noise and embrace the tranquility of the Caribbean at the Cabins in Barú, a paradisiacal retreat surrounded by white-sand beaches and crystal-clear waters. Enjoy the natural beauty of this unique destination, where every sunrise and sunset feels like a postcard. The cabins offer comfort, freshness, and a perfect atmosphere to relax, disconnect, and enjoy nature. Ideal for couples, families, or groups seeking an authentic seaside experience with the local charm and warmth of Barú.",
      },
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
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "Descanso y naturaleza frente al mar",
        [ENGLISH]: "Rest and nature by the sea",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia auténtica del Caribe en las Cabañas de Playa Tranquila, un paraíso escondido en la isla de Barú donde el mar turquesa y la arena blanca invitan a desconectarte por completo. Aquí el tiempo pasa despacio y cada momento se disfruta al ritmo de las olas y la brisa marina. Las cabañas ofrecen comodidad básica, ambiente natural y la oportunidad de convivir con la tranquilidad del entorno. Perfectas para viajeros que buscan paz, contacto con la naturaleza y una escapada frente al mar lejos del bullicio de la ciudad.",
        [ENGLISH]:
          "Live an authentic Caribbean experience at the Cabins in Playa Tranquila, a hidden paradise on Barú Island where turquoise waters and white sands invite you to completely unwind. Here, time slows down and every moment is enjoyed to the rhythm of the waves and sea breeze. The cabins offer simple comfort, a natural atmosphere, and the chance to connect with the peaceful surroundings. Perfect for travelers seeking calm, nature, and a beachfront escape away from the city’s noise.",
      },
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
      gallery: [],
    },
  },
];
