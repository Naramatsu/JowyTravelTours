import { MdOutlineDoorFront } from "react-icons/md";
import {
  APARTMENTS,
  BOCAGRANDE,
  BOQUILLA,
  ENGLISH,
  HOSTING,
  LAGUITO,
  SANTAMARTA,
  SPANISH,
  bedrooms,
  defaultHostingProperties,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const hostingItems = (languaje) => [
  {
    id: "HO-01",
    img: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Portofino",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Tu refugio junto al mar en Cartagena de Indias",
        [ENGLISH]: "Your seaside retreat in Cartagena de Indias",
      },
      description: {
        [SPANISH]:
          "Vive la magia del Caribe en el Hotel Portofino, un lugar donde el confort y la buena energía se encuentran frente al mar. Ubicado en el corazón de Bocagrande, te ofrece habitaciones cómodas y luminosas, piscina, restaurante y un ambiente relajado que invita a disfrutar cada momento. Ya sea que viajes por placer o negocios, en Portofino encontrarás el equilibrio perfecto entre descanso, servicio y la alegría cartagenera.",
        [ENGLISH]:
          "Feel the magic of the Caribbean at Hotel Portofino, where comfort and good vibes meet by the sea. Located in the heart of Bocagrande, it offers cozy, bright rooms, a pool, a restaurant, and a relaxed atmosphere that invites you to enjoy every moment. Whether you’re traveling for leisure or business, Portofino offers the perfect balance of rest, service, and the joyful spirit of Cartagena.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Balcón",
            "Vista al Mar",
            "Lavandería",
            "30m de la playa",
          ],
          [ENGLISH]: ["Balcony", "Ocean View", "Laundry", "30m from the beach"],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            warningNro: 9,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208803/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230824-WA0097_wv7mkk.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208803/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0069_knb068.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208803/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0068_i7x0dw.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208800/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0076_ke762w.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208800/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0066_mdozrw.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208800/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0065_vtqcbo.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715192771/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0014_u1wwsg.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715192770/Jowy%20Travels%20y%20Tour/Portofino/IMG-20230823-WA0007_c8o8v0.jpg",
        },
      ],
    },
  },
  {
    id: "HO-02",
    img: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto 1",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Tu estadía con vista al mar en Cartagena de Indias",
        [ENGLISH]: "Your ocean-view stay in Cartagena de Indias",
      },
      description: {
        [SPANISH]:
          "Disfruta una experiencia única frente al mar en Palmetto 1, uno de los edificios más reconocidos de Bocagrande. Sus modernos apartamentos ofrecen comodidad, elegancia y una vista espectacular de la bahía y el Caribe. Aquí podrás relajarte en la piscina, disfrutar del sol en la terraza o simplemente contemplar los atardeceres que hacen de Cartagena un destino inolvidable. Perfecto para familias, parejas o grupos de amigos que buscan confort y una ubicación privilegiada cerca de todo.",
        [ENGLISH]:
          "Enjoy a unique oceanfront experience at Palmetto 1, one of the most renowned buildings in Bocagrande. Its modern apartments combine comfort, elegance, and breathtaking views of the bay and the Caribbean Sea. Relax by the pool, soak up the sun on the terrace, or simply admire the sunsets that make Cartagena unforgettable. Perfect for families, couples, or groups of friends looking for comfort and a prime location close to everything.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Balcón", "Vista al Mar", "Frente a la playa"],
          [ENGLISH]: ["Balcony", "Ocean View", "In front of the beach"],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208898/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0030_nuycqe.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208903/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0036_ivsng9.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208904/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0041_zfyank.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208902/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0040_fezl8l.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208901/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0034_o7fb3o.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208900/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0033_ogk4ab.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208899/Jowy%20Travels%20y%20Tour/Palmeto%201/IMG-20230819-WA0032_qtclp3.jpg",
        },
      ],
    },
  },
  {
    id: "HO-03",
    img: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Eliptic",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Vive el lujo y la vista más espectacular de Cartagena",
        [ENGLISH]: "Live the luxury and the most spectacular view of Cartagena",
      },
      description: {
        [SPANISH]:
          "Déjate cautivar por la elegancia y el confort de Palmetto Eliptic, un moderno edificio frente al mar que redefine la experiencia de hospedarse en Cartagena de Indias. Sus exclusivos apartamentos combinan diseño contemporáneo, amplios espacios y una vista panorámica inigualable del Caribe. Disfruta de sus piscinas, gimnasio, zona social y la cercanía a los mejores restaurantes, playas y lugares turísticos de la ciudad. Ideal para quienes buscan una estancia sofisticada, cómoda y con el encanto único del Caribe colombiano.",
        [ENGLISH]:
          "Be captivated by the elegance and comfort of Palmetto Eliptic, a modern oceanfront building that redefines the Cartagena experience. Its exclusive apartments feature contemporary design, spacious interiors, and unbeatable panoramic views of the Caribbean. Enjoy the pools, fitness center, social areas, and proximity to the city’s best restaurants, beaches, and attractions. Perfect for those seeking a sophisticated, comfortable stay with the unique charm of the Colombian Caribbean.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Vista al Mar", "Frente a la playa"],
          [ENGLISH]: ["Ocean View", "In front of the beach"],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1738608552/Jowy%20Travels%20y%20Tour/Palmetto%20Eliptic/10_xflnct.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1738608550/Jowy%20Travels%20y%20Tour/Palmetto%20Eliptic/2_rubqvn.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1738608550/Jowy%20Travels%20y%20Tour/Palmetto%20Eliptic/1_uzmuff.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1738608553/Jowy%20Travels%20y%20Tour/Palmetto%20Eliptic/11_pozsov.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1738608551/Jowy%20Travels%20y%20Tour/Palmetto%20Eliptic/8_ugac0c.jpg",
        },
      ],
    },
  },
  {
    id: "HO-04",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Beach",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Comodidad y brisa marina frente al Caribe",
        [ENGLISH]: "Comfort and sea breeze facing the Caribbean",
      },
      description: {
        [SPANISH]:
          "Vive la experiencia caribeña al máximo en Palmetto Beach, un moderno edificio frente al mar que combina confort, estilo y una ubicación privilegiada en Bocagrande. Sus apartamentos totalmente equipados te ofrecen espacios amplios, vista al océano y un ambiente tranquilo para descansar y disfrutar. Relájate en la piscina, contempla los atardeceres desde el balcón o camina unos pasos hasta la playa. Ideal para familias, parejas o grupos que buscan comodidad, seguridad y el encanto de Cartagena al alcance de todo.",
        [ENGLISH]:
          "Live the ultimate Caribbean experience at Palmetto Beach, a modern oceanfront building that combines comfort, style, and a prime location in Bocagrande. Its fully equipped apartments offer spacious interiors, ocean views, and a peaceful atmosphere to relax and enjoy. Unwind by the pool, admire the sunsets from your balcony, or take a short walk to the beach. Perfect for families, couples, or groups looking for comfort, safety, and the charm of Cartagena right at their doorstep.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Balcón", "Vista al Mar", "Frente a la playa"],
          [ENGLISH]: ["Balcony", "Ocean View", "In front of the beach"],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-05",
    img: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Sunset",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Donde el atardecer se convierte en tu mejor vist",
        [ENGLISH]: "Where the sunset becomes your best view",
      },
      description: {
        [SPANISH]:
          "Descubre el encanto de Palmetto Sunset, un moderno edificio frente al mar que te regala una de las vistas más espectaculares de Cartagena de Indias. Sus apartamentos, amplios y elegantes, están diseñados para brindarte comodidad, estilo y una experiencia inolvidable. Disfruta de su piscina, gimnasio y zonas comunes mientras contemplas los atardeceres que tiñen el cielo de tonos dorados y rosados. Ideal para quienes buscan una estadía relajante, moderna y con el auténtico espíritu del Caribe colombiano.",
        [ENGLISH]:
          "Discover the charm of Palmetto Sunset, a modern oceanfront building that offers one of the most breathtaking views in Cartagena de Indias. Its spacious and elegant apartments are designed to provide comfort, style, and an unforgettable experience. Enjoy the pool, gym, and social areas while watching sunsets that paint the sky in golden and pink hues. Perfect for those seeking a relaxing, modern stay filled with the authentic spirit of the Colombian Caribbean.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Balcón",
            "Vista al Mar",
            "Frente a la playa",
            "Vista al lago",
          ],
          [ENGLISH]: [
            "Balcony",
            "Ocean View",
            "In front of the beach",
            "Lake view",
          ],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208884/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0072_ixa7y0.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208881/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0070_i5ya58.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208880/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0069_suj4h4.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208878/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0066_mcyqxa.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208877/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0067_ng5s81.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208868/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0060_khlxhu.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208867/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0059_oz3oqq.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208865/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0058_vpl47h.jpg",
        },

        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208865/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0055_m3gnpz.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208864/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0065_a6zbkj.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208861/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0057_rqnkg2.jpg",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1715208850/Jowy%20Travels%20y%20Tour/Palmetto%20Sunset/IMG-20230922-WA0054_o7ds3g.jpg",
        },
      ],
    },
  },
  {
    id: "HO-06",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Poseidon",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Tranquilidad y encanto frente a la bahía del Laguito",
        [ENGLISH]: "Peace and charm facing the Laguito Bay",
      },
      description: {
        [SPANISH]:
          "Sumérgete en la calma y la belleza de El Laguito alojándote en el Edificio Poseidón, un lugar ideal para quienes buscan descanso, buena ubicación y una auténtica experiencia caribeña. Sus apartamentos combinan comodidad, frescura y vistas encantadoras hacia la bahía. Disfruta de su piscina, acceso rápido a la playa y cercanía a restaurantes, bares y sitios turísticos. Perfecto para parejas, familias o viajeros que desean disfrutar de Cartagena con la tranquilidad del mar y la calidez de su gente.",
        [ENGLISH]:
          "Dive into the calm and beauty of El Laguito by staying at the Poseidon Building, an ideal spot for those seeking relaxation, great location, and a truly Caribbean experience. Its apartments blend comfort, freshness, and charming views of the bay. Enjoy the pool, quick beach access, and proximity to restaurants, bars, and tourist attractions. Perfect for couples, families, or travelers who want to experience Cartagena with the peace of the sea and the warmth of its people.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Balcón",
            "Vista al Mar",
            "Vista al lago",
            "100m de la playa",
          ],
          [ENGLISH]: [
            "Balcony",
            "Ocean View",
            "Lake view",
            "100m from the beach",
          ],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-07",
    img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    type: HOSTING[languaje],
    isAvailable: false,
    info: {
      name: "Penthouse",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      description: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
        },
      ],
    },
  },
  {
    id: "HO-08",
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Las 3 carabelas",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Historia, confort y brisa marina en El Laguito",
        [ENGLISH]: "History, comfort, and sea breeze in El Laguito",
      },
      description: {
        [SPANISH]:
          "Vive la esencia de Cartagena desde el Edificio Las 3 Carabelas, un lugar donde la comodidad se combina con el encanto del mar y la tranquilidad de El Laguito. Sus acogedores apartamentos ofrecen todo lo necesario para disfrutar de una estancia relajante: piscina, cercanía a la playa y una ubicación estratégica a pocos minutos de Bocagrande y el centro histórico. Ideal para familias, parejas o grupos de amigos que buscan descansar y vivir la magia del Caribe con el mejor ambiente cartagenero.",
        [ENGLISH]:
          "Experience the essence of Cartagena at Las 3 Carabelas Building, where comfort meets the charm of the sea and the tranquility of El Laguito. Its cozy apartments offer everything you need for a relaxing stay: a pool, easy beach access, and a strategic location just minutes from Bocagrande and the historic center. Perfect for families, couples, or groups of friends looking to relax and enjoy the Caribbean magic with the best Cartagena vibes.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Vista al Mar", "Vista al lago", "100m de la playa"],
          [ENGLISH]: ["Ocean View", "Lake view", "100m from the beach"],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-09",
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Edificio Atlantis",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Comodidad moderna junto al mar en El Laguito",
        [ENGLISH]: "Modern comfort by the sea in El Laguito",
      },
      description: {
        [SPANISH]:
          "Descubre la armonía perfecta entre modernidad y descanso en el Edificio Atlantis, un lugar encantador ubicado en la zona de El Laguito, uno de los sectores más exclusivos y tranquilos de Cartagena. Sus apartamentos ofrecen espacios modernos, cómodos y con una vista espectacular al mar o a la bahía. Disfruta de su piscina, fácil acceso a la playa y proximidad a los mejores restaurantes y atracciones turísticas. Ideal para parejas, familias o viajeros que buscan una estancia cómoda, segura y con el auténtico ambiente caribeño.",
        [ENGLISH]:
          "Discover the perfect blend of modernity and relaxation at the Atlantis Building, a charming spot located in El Laguito, one of Cartagena’s most exclusive and peaceful areas. Its apartments feature modern, comfortable spaces with stunning views of the sea or the bay. Enjoy the pool, easy beach access, and closeness to the best restaurants and tourist attractions. Perfect for couples, families, or travelers seeking a comfortable, safe stay with the authentic Caribbean vibe.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["100m de la playa"],
          [ENGLISH]: ["100m from the beach"],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 10,
            warningNro: 10,
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
            kingBeds: 4,
            singleBeds: 4,
            upTo: 15,
            warningNro: 15,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://res.cloudinary.com/drn7dmjkz/video/upload/v1715209353/Jowy%20Travels%20y%20Tour/Edificio%20Atlantis/VID-20220908-WA0064_hvkydw.mp4",
          type: "video",
        },
        {
          url: "https://res.cloudinary.com/drn7dmjkz/video/upload/v1715209343/Jowy%20Travels%20y%20Tour/Edificio%20Atlantis/VID-20231202-WA0024_q7gp3x.mp4",
          type: "video",
        },
      ],
    },
  },
  {
    id: "HO-10",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Torre centauro",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Confort y estilo con vista al mar en El Laguito",
        [ENGLISH]: "Comfort and style with a sea view in El Laguito",
      },
      description: {
        [SPANISH]:
          "Disfruta de una estancia inolvidable en el Edificio Torre Centauro, un moderno complejo ubicado en el exclusivo sector de El Laguito, a pocos pasos de la playa y rodeado de la mejor oferta turística de Cartagena. Sus apartamentos ofrecen comodidad, estilo y vistas encantadoras hacia el mar o la ciudad. Relájate en la piscina, contempla los atardeceres caribeños y vive la calidez que solo Cartagena puede ofrecer. Ideal para familias, parejas o viajeros que buscan descanso, ubicación y una experiencia auténtica junto al mar.",
        [ENGLISH]:
          "Enjoy an unforgettable stay at the Torre Centauro Building, a modern complex located in the exclusive El Laguito area, just steps from the beach and surrounded by Cartagena’s best tourist attractions. Its apartments combine comfort, style, and beautiful views of the sea or the city. Relax by the pool, admire the Caribbean sunsets, and feel the warmth that only Cartagena can offer. Perfect for families, couples, or travelers seeking relaxation, great location, and an authentic seaside experience",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: [
            "Vista al Mar",
            "Frente a la playa",
            "Salida directa a la playa",
          ],
          [ENGLISH]: [
            "Ocean View",
            "In front of the beach",
            "Direct access to the beach",
          ],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-11",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Morros 3",
      location: BOQUILLA,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Elegancia y serenidad frente al mar en Cartagena",
        [ENGLISH]: "Elegance and serenity by the sea in Cartagena",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia única en Morros 3, un exclusivo edificio frente al mar que combina lujo, tranquilidad y el encanto natural de Cartagena. Ubicado en la zona norte, este moderno complejo ofrece apartamentos amplios, elegantes y totalmente equipados, perfectos para disfrutar en pareja, familia o con amigos. Relájate en la piscina, disfruta de acceso directo a la playa y contempla los atardeceres que hacen de este lugar un verdadero paraíso. Morros 3 es sinónimo de descanso, estilo y exclusividad frente al Caribe colombiano.",
        [ENGLISH]:
          "Enjoy a unique experience at Morros 3, an exclusive oceanfront building that combines luxury, tranquility, and the natural charm of Cartagena. Located in the northern area, this modern complex offers spacious, elegant, and fully equipped apartments — perfect for couples, families, or groups of friends. Relax by the pool, enjoy direct beach access, and admire the sunsets that make this place a true paradise. Morros 3 is synonymous with relaxation, style, and exclusivity by the Colombian Caribbean.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["Vista al Mar", "Frente a la playa"],
          [ENGLISH]: ["Ocean View", "In front of the beach"],
        }),
      },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-12",
    img: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Turipaná",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "Confort y buena ubicación en el corazón de Bocagrande",
        [ENGLISH]: "Comfort and great location in the heart of Bocagrande",
      },
      description: {
        [SPANISH]:
          "Vive la experiencia cartagenera desde el Edificio Turipaná, un lugar moderno y acogedor situado en el vibrante sector de Bocagrande, a solo pasos de la playa, restaurantes y zonas comerciales. Sus apartamentos ofrecen comodidad, frescura y una ubicación ideal para disfrutar de todo lo que Cartagena tiene para ofrecer. Relájate en la piscina, contempla el atardecer desde el balcón o da un paseo por la bahía. Perfecto para familias, parejas o viajeros que buscan descanso, comodidad y cercanía a los principales atractivos turísticos de la ciudad.",
        [ENGLISH]:
          "Experience Cartagena from Turipaná Building, a modern and cozy place located in the vibrant Bocagrande area — just steps from the beach, restaurants, and shopping spots. Its apartments offer comfort, freshness, and an ideal location to enjoy everything the city has to offer. Relax by the pool, watch the sunset from your balcony, or take a stroll along the bay. Perfect for families, couples, or travelers seeking comfort, convenience, and proximity to Cartagena’s main attractions.",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["100m de la playa"],
          [ENGLISH]: ["100m from the beach"],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 4,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [],
    },
  },
  {
    id: "HO-13",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: false,
    info: {
      name: "El Escape",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      description: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      properties: {
        ...defaultHostingProperties({
          [SPANISH]: ["100m de la playa", "Al lado de Mcdonalds"],
          [ENGLISH]: ["100m from the beach", "Next to McDonalds"],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            warningNro: 9,
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
            kingBeds: 4,
            singleBeds: 4,
            upTo: 12,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
        },
      ],
    },
  },
  {
    id: "HO-14",
    img: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
    type: HOSTING[languaje],
    isAvailable: false,
    info: {
      name: "Rodadero",
      location: SANTAMARTA,
      type: APARTMENTS[languaje],
      mainDescription: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      description: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(1, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 1,
            },
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 4,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
        },
      ],
    },
  },
];
