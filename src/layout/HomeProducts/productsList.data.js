import {
  APARTMENTS,
  AUTOMOBILES,
  BUSES,
  CABINS,
  CHIVAS,
  DAYPASS,
  FARM_HOUSES,
  HOSTING,
  HOTELS,
  HOUSES,
  RENTALS,
  SHIPS,
  SPANISH,
  SPORT_BOAT,
  TOURS,
  TRANSPORTS,
  VANS,
  YACHTS,
} from "../../utils/constants";

const additionalWarning = (people, languaje) => {
  if (languaje === SPANISH)
    return `+${people} personas pago adicional por persona.`;

  return `+${people} people additional payment per person.`;
};

export const people = (languaje) => {
  if (languaje === SPANISH) return `Personas.`;
  return `People.`;
};

export const bedrooms = (rooms, languaje) => {
  if (languaje === SPANISH) return `${rooms} Habitaciones.`;
  return `${rooms} Bedrooms.`;
};

export const upToPeople = (people, languaje) => {
  if (languaje === SPANISH) return `Hasta ${people} Personas.`;
  return `Up to ${people} People.`;
};

export const items = (languaje) => [
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/368381302.jpg?k=ba84de99c3b55e88383f7906dbc9b3d3eecd6c6020fea07f1fa81a37ff567408&o=&hp=1",
    type: HOSTING[languaje],
    info: {
      name: "Portofino",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 3 ${people(languaje)}`, count: [1, 3] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(9, languaje), count: [9] },
          warning: additionalWarning(9, languaje),
        },
      ],
    },
  },
  {
    img: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
    type: HOSTING[languaje],
    info: {
      name: "Palmetto 1",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Palmetto Eliptic",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
    type: HOSTING[languaje],
    info: {
      name: "Palmetto Beach",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Palmetto Sunset",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
    type: HOSTING[languaje],
    info: {
      name: "Poseidon",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Penthouse",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 3,
          persons: { label: upToPeople(8, languaje), count: [8] },
          warning: additionalWarning(8, languaje),
        },
      ],
    },
  },
  {
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Las 3 carabelas",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 3 ${people(languaje)}`, count: [1, 3] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
      ],
    },
  },
  {
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Edificio Atlantis",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 4 ${people(languaje)}`, count: [1, 4] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(10, languaje), count: [10] },
        },
        {
          rooms: 4,
          persons: { label: upToPeople(15, languaje), count: [15] },
          warning: `${additionalWarning(15, languaje)} (${upToPeople(
            17,
            languaje
          )})`,
        },
      ],
    },
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
    type: HOSTING[languaje],
    info: {
      name: "Torre centauro",
      location: "Laguito",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 4 ${people(languaje)}`, count: [1, 4] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
      ],
    },
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
    type: HOSTING[languaje],
    info: {
      name: "Morros 3",
      location: "Boquilla",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: `${additionalWarning(6, languaje)} (${upToPeople(8)})`,
        },
      ],
    },
  },
  {
    img: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
    type: HOSTING[languaje],
    info: {
      name: "Turipaná",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `${upToPeople(4, languaje)}`, count: [4] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
      ],
    },
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
    type: HOSTING[languaje],
    info: {
      name: "El Escape",
      location: "Bocagrande",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 3 ${people(languaje)}`, count: [1, 3] },
        },
        {
          rooms: 2,
          persons: {
            label: `2 - 6 ${people(languaje)}`,
            count: [2, 6],
          },
          warning: additionalWarning(6, languaje),
        },
        {
          rooms: 3,
          persons: { label: upToPeople(9, languaje), count: [9] },
          warning: additionalWarning(9, languaje),
        },
        {
          rooms: 4,
          persons: { label: upToPeople(12, languaje), count: [12] },
        },
      ],
    },
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
    type: HOSTING[languaje],
    info: {
      name: "Rodadero",
      location: "Santa Marta",
      type: APARTMENTS[languaje],
      details: [
        {
          rooms: 1,
          persons: { label: `1 - 4 ${people(languaje)}`, count: [1, 4] },
        },
        {
          rooms: 2,
          persons: {
            label: `${upToPeople(6, languaje)}`,
            count: [6],
          },
        },
        {
          rooms: 3,
          persons: { label: upToPeople(9, languaje), count: [9] },
        },
      ],
    },
  },
  {
    img: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
    type: HOSTING[languaje],
    info: {
      name: "Ibatama",
      location: "Ibatama",
      type: HOTELS[languaje],
      details: [
        `2 ${people(languaje)}`,
        `4 ${people(languaje)}`,
        `6 ${people(languaje)}`,
        `8 ${people(languaje)}`,
      ],
    },
  },
  {
    img: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
    type: HOSTING[languaje],
    info: {
      name: "Marbella",
      location: "Marbella",
      type: HOTELS[languaje],
      details: [
        `2 ${people(languaje)}`,
        `4 ${people(languaje)}`,
        `6 ${people(languaje)}`,
        `8 ${people(languaje)}`,
      ],
    },
  },
  {
    img: "https://hostal-cabana-baru.cartagena-hotels.net/data/Images/OriginalPhoto/13203/1320371/1320371086/image-cartagena-2.JPEG",
    type: HOSTING[languaje],
    info: {
      name: CABINS[languaje],
      location: "Barú",
      type: CABINS[languaje],
      details: [`1 - 2 ${people(languaje)}`, upToPeople(4, languaje)],
    },
  },
  {
    img: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/193252/48f24bf69a3fd3a59cd028af9aa4081dedd817d7.XL2.jpg",
    type: HOSTING[languaje],
    info: {
      name: CABINS[languaje],
      location: "Playa tranquila",
      type: CABINS[languaje],
      details: [`1 - 2 ${people(languaje)}`, upToPeople(4, languaje)],
    },
  },
  {
    img: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
    type: HOSTING[languaje],
    info: {
      name: HOUSES[languaje],
      location: "Centro histórico",
      type: HOUSES[languaje],
      details: [bedrooms(3), bedrooms(4), bedrooms(6), bedrooms(9)],
    },
  },
  {
    img: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
    type: HOSTING[languaje],
    info: {
      name: HOUSES[languaje],
      location: "Morros",
      type: HOUSES[languaje],
      details: [bedrooms(3)],
    },
  },
  {
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: HOSTING[languaje],
    info: {
      name: HOUSES[languaje],
      location: "Cholon",
      type: HOUSES[languaje],
      details: [bedrooms(3)],
    },
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
    type: HOSTING[languaje],
    info: {
      name: FARM_HOUSES[languaje],
      location: "Turbaco",
      type: FARM_HOUSES[languaje],
      details: [bedrooms(3), bedrooms(6)],
    },
  },
  {
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
