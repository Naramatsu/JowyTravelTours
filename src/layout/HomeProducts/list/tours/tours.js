import { FaRegClock } from "react-icons/fa";
import { IoBoatOutline } from "react-icons/io5";

import {
  CARTAGENA,
  DAYPASS,
  ENGLISH,
  SPANISH,
  TOURS,
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
      name: "Tierra Bomba - Punta Arena",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      mainDescription: {
        [SPANISH]: "Playa, sabor local y vistas increíbles",
        [ENGLISH]: "Beach, local flavor, and amazing views",
      },
      description: {
        [SPANISH]:
          "Disfruta de un día inolvidable en Punta Arena, una de las playas más encantadoras de la isla de Tierra Bomba, ubicada a pocos minutos en lancha desde Cartagena. Relájate en sus aguas cristalinas, contempla la vista panorámica de la bahía y disfruta de la mejor gastronomía local con mariscos frescos y cócteles tropicales. Este tour combina descanso, cultura y diversión en un entorno paradisíaco. Ideal para quienes desean escapar del bullicio de la ciudad y vivir una experiencia auténtica del Caribe colombiano.",
        [ENGLISH]:
          "Enjoy an unforgettable day at Punta Arena, one of the most charming beaches on Tierra Bomba Island, located just a few minutes by boat from Cartagena. Relax in its crystal-clear waters, take in the panoramic view of the bay, and savor delicious local seafood and tropical cocktails. This tour perfectly combines relaxation, culture, and fun in a paradisiacal setting. Ideal for those looking to escape the city and experience the authentic spirit of the Colombian Caribbean.",
      },
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
      gallery: [],
    },
  },
  {
    id: "T02",
    img: "https://livevacationstours.com/cdn/shop/products/IMG-20210918-WA0011_eec69c14-a49c-4988-be0d-33054a04cc8e_1445x.jpg?v=1639668230",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Playa linda - Punta Arena",
      location: "Punta Arena",
      type: DAYPASS[languaje],
      mainDescription: {
        [SPANISH]: "Relájate frente al paraíso",
        [ENGLISH]: "Relax in front of paradise",
      },
      description: {
        [SPANISH]:
          "Descubre la serenidad del Caribe en Playa Linda, un paraíso escondido en la isla de Tierra Bomba, a solo unos minutos en lancha desde Cartagena. Sus aguas turquesas, arena suave y ambiente tranquilo la convierten en el lugar perfecto para desconectarte y disfrutar del sol. Durante el tour podrás nadar, degustar platos típicos de mar y disfrutar de una atención cálida frente al mar. Ideal para parejas, familias o grupos que buscan un día de descanso, paisajes hermosos y el auténtico sabor isleño del Caribe colombiano.",
        [ENGLISH]:
          "Experience Caribbean serenity at Playa Linda, a hidden paradise on Tierra Bomba Island, just a few minutes by boat from Cartagena. Its turquoise waters, soft sand, and peaceful atmosphere make it the perfect place to unwind and soak up the sun. During the tour, you’ll enjoy swimming, tasting traditional seafood dishes, and friendly service right by the sea. Perfect for couples, families, or groups looking for a relaxing day, beautiful scenery, and the authentic island flavor of the Colombian Caribbean.",
      },
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
      gallery: [],
    },
  },
  {
    id: "T03",
    img: "https://i0.wp.com/scratchyourmapa.com/wp-content/uploads/2021/01/playa-blanca-isla-baru-drone-2.jpg?fit=828%2C782&ssl=1",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Playa blanca - Barú",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: {
        [SPANISH]: "El paraíso más famoso de Cartagena",
        [ENGLISH]: "Cartagena’s most famous paradise",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia inolvidable en Playa Blanca, el destino más reconocido de la isla de Barú y uno de los lugares más paradisíacos del Caribe colombiano. Disfruta de sus aguas cristalinas, arenas blancas y un ambiente tropical perfecto para relajarte y desconectarte del ritmo de la ciudad. El tour incluye transporte en lancha o terrestre, tiempo libre para nadar, descansar bajo el sol y degustar la deliciosa gastronomía local frente al mar. Ideal para quienes buscan un día de playa inolvidable rodeado de belleza natural y energía caribeña.",
        [ENGLISH]:
          "Enjoy an unforgettable experience at Playa Blanca, the most famous destination on Barú Island and one of the most stunning beaches in the Colombian Caribbean. Dive into its crystal-clear waters, walk along its white sands, and relax in a tropical paradise just a short trip from Cartagena. The tour includes boat or land transportation, free time to swim and unwind, and a delicious local lunch by the sea. Perfect for travelers seeking a memorable beach day surrounded by natural beauty and Caribbean vibes.",
      },
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
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "Aventura y relax en el paraíso",
        [ENGLISH]: "Adventure and relaxation in paradise",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia inolvidable explorando las Islas del Rosario y disfrutando de un día perfecto en Playa Blanca – Barú. Comienza tu aventura navegando por el mar Caribe, admirando los paisajes de la bahía y el color turquesa del agua. Durante el recorrido podrás practicar snorkel, conocer el Oceanario (opcional), y descubrir los encantos naturales del archipiélago. Luego, relájate en las suaves arenas de Playa Blanca, disfruta de un delicioso almuerzo típico y del cálido ambiente isleño. Un tour ideal para quienes desean combinar naturaleza, diversión y descanso en un solo día.",
        [ENGLISH]:
          "Experience an unforgettable adventure exploring the Rosario Islands and relaxing on Playa Blanca – Barú. Start your journey sailing through the Caribbean Sea, admiring the bay’s landscapes and the turquoise waters. Along the way, you’ll have the chance to snorkel, visit the Oceanarium (optional), and discover the natural wonders of the islands. Afterward, unwind on the white sands of Playa Blanca, enjoy a delicious local lunch, and soak up the island vibes. The perfect tour for travelers seeking a mix of nature, adventure, and relaxation in a single experience.",
      },
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
      gallery: [],
    },
  },
  {
    id: "T05",
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: TOURS[languaje],
    isAvailable: false,
    info: {
      name: "Cholón - Barú",
      location: "Barú",
      type: DAYPASS[languaje],
      mainDescription: {
        [SPANISH]: "Fiesta, sol y diversión en el mar",
        [ENGLISH]: "Party, sun, and fun on the sea",
      },
      description: {
        [SPANISH]:
          "Vive el espíritu alegre del Caribe en el Tour a Cholón, el destino más animado de la isla de Barú. Disfruta de un día lleno de sol, música y diversión en medio del mar, rodeado de embarcaciones, amigos y un ambiente inigualable. Aquí podrás nadar en aguas cristalinas, degustar mariscos frescos, disfrutar de cócteles tropicales y bailar al ritmo del verano colombiano. Ideal para quienes buscan combinar la belleza natural del Caribe con la mejor energía de Cartagena.",
        [ENGLISH]:
          "Feel the vibrant Caribbean spirit with the Cholón Tour, the liveliest destination on Barú Island. Spend the day surrounded by sunshine, music, and fun in the middle of the sea, with boats, friends, and a unique festive atmosphere. Swim in crystal-clear waters, savor fresh seafood, sip tropical cocktails, and dance to the rhythms of the Colombian summer. Perfect for travelers who want to mix natural beauty with Cartagena’s famous party vibe.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
      description: {
        [SPANISH]: "",
        [ENGLISH]: "",
      },
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
      name: "Citytour - Cartagena",
      location: CARTAGENA,
      type: TOURS[languaje],
      mainDescription: {
        [SPANISH]: "Vive la historia, cultura y encanto de la ciudad",
        [ENGLISH]: "Discover the city’s history, culture, and charm",
      },
      description: {
        [SPANISH]:
          "Explora la magia de Cartagena de Indias en un recorrido lleno de historia, color y cultura. Acompañado por un guía local experto (¡yo mismo!), descubrirás los lugares más emblemáticos de la ciudad, desde el majestuoso Castillo de San Felipe de Barajas hasta las pintorescas calles del Centro Histórico y Getsemaní. Aprenderás sobre la fascinante historia colonial, las tradiciones cartageneras y los secretos que solo un habitante local puede contarte. Durante el tour podrás disfrutar de vistas panorámicas, arquitectura colonial, murales vibrantes y una experiencia auténtica del alma caribeña. Perfecto para quienes desean conocer Cartagena de una manera diferente, cercana y llena de vida.",
        [ENGLISH]:
          "Explore the magic of Cartagena de Indias on a tour filled with history, color, and culture. Guided by a local expert (that’s me!), you’ll discover the city’s most iconic landmarks — from the majestic San Felipe de Barajas Castle to the charming streets of the Historic Center and Getsemaní. Learn about Cartagena’s fascinating colonial past, local traditions, and hidden gems that only a true local can reveal. Enjoy panoramic views, colonial architecture, vibrant street art, and an authentic taste of Caribbean life. Perfect for travelers who want to experience Cartagena in a personal, engaging, and memorable way.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "La noche cartagenera sobre ruedas",
        [ENGLISH]: "Cartagena’s nightlife on wheels",
      },
      description: {
        [SPANISH]:
          "Vive una noche inolvidable con la tradicional Rumba en Chiva, una experiencia llena de música, baile y alegría al mejor estilo cartagenero. Súbete a la colorida chiva —el icónico autobús típico del Caribe colombiano— y recorre los puntos más emblemáticos de la ciudad mientras disfrutas de música en vivo, bebidas, animación y el ambiente festivo que hace única a Cartagena. Durante el recorrido tendrás la oportunidad de compartir con personas de todo el mundo, visitar lugares turísticos iluminados y culminar la noche en una discoteca local. ¡Una experiencia perfecta para quienes quieren vivir la verdadera rumba caribeña sobre ruedas!",
        [ENGLISH]:
          "Enjoy an unforgettable night with the traditional Chiva Party Tour, an experience full of music, dance, and joy in true Cartagena style. Hop aboard the colorful “chiva,” the iconic party bus of the Colombian Caribbean, and ride through the city’s main landmarks while enjoying live music, drinks, entertainment, and the lively atmosphere that defines Cartagena's nightlife. During the tour, you’ll meet people from all over the world, visit illuminated sights, and end the night at a local nightclub. The perfect experience for travelers who want to feel the rhythm, color, and energy of the Caribbean night!",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "Relájate en un baño natural de lodo volcánico",
        [ENGLISH]: "Relax in a natural volcanic mud bath",
      },
      description: {
        [SPANISH]:
          "Vive una experiencia única en el Volcán del Totumo, uno de los atractivos naturales más sorprendentes cerca de Cartagena. Sumérgete en su cálido barro volcánico, famoso por sus propiedades rejuvenecedoras y terapéuticas, mientras disfrutas de una vista espectacular del entorno natural. El tour incluye transporte hasta el volcán, guía local y tiempo libre para relajarte, bañarte en el lodo y luego en la laguna cercana. Además, podrás conocer un poco de la cultura y las tradiciones de las comunidades que viven alrededor de este increíble lugar. Ideal para quienes buscan una actividad diferente, divertida y saludable durante su estadía en Cartagena.",
        [ENGLISH]:
          "Experience something truly unique at the Totumo Volcano, one of the most fascinating natural attractions near Cartagena. Immerse yourself in its warm volcanic mud, known for its rejuvenating and healing properties, while enjoying the beautiful natural scenery. The tour includes transportation to the volcano, a local guide, and free time to relax, soak in the mud, and rinse off in the nearby lagoon. You’ll also get to learn about the culture and traditions of the local communities that surround this amazing site. Perfect for travelers seeking a fun, relaxing, and one-of-a-kind experience in Cartagena.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "Cultura, sabor y alegría caribeña",
        [ENGLISH]: "Culture, flavor, and Caribbean joy",
      },
      description: {
        [SPANISH]:
          "Descubre la esencia de la Arenosa con este tour desde Cartagena hacia Barranquilla, una ciudad vibrante, llena de historia, música y sabor. Durante el recorrido conocerás los lugares más emblemáticos como el Malecón del Río, el Museo del Carnaval, la Casa del Carnaval, y los coloridos murales que decoran sus calles. Aprende sobre el famoso Carnaval de Barranquilla, Patrimonio Cultural de la Humanidad, y disfruta de la hospitalidad y alegría de su gente. El tour incluye transporte, guía acompañante y tiempo libre para recorrer, tomar fotos y disfrutar de la gastronomía local. Ideal para quienes desean vivir una jornada diferente, descubriendo el corazón cultural del Caribe colombiano.",
        [ENGLISH]:
          "Discover the spirit of “La Arenosa” with this tour from Cartagena to Barranquilla, a vibrant city full of history, music, and flavor. During the trip, you’ll visit iconic spots such as the Malecón del Río, the Carnival Museum, the Casa del Carnaval, and the colorful murals that bring the streets to life. Learn about the world-famous Barranquilla Carnival, recognized by UNESCO as a Cultural Heritage of Humanity, and experience the warmth and joy of its people. The tour includes transportation, a guide, and free time to explore, take photos, and taste the local cuisine. Perfect for travelers who want to discover the cultural heart of the Colombian Caribbean.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
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
      mainDescription: {
        [SPANISH]: "Historia, naturaleza y encanto caribeño",
        [ENGLISH]: "History, nature, and Caribbean charm",
      },
      description: {
        [SPANISH]:
          "Embárcate en una experiencia inolvidable desde Cartagena hasta Santa Marta, la ciudad más antigua de Colombia y una de las más encantadoras del Caribe. Durante el recorrido conocerás sitios emblemáticos como la Quinta de San Pedro Alejandrino, donde vivió sus últimos días el Libertador Simón Bolívar; el Centro Histórico con su arquitectura colonial; y la famosa Bahía de Santa Marta, ideal para relajarte y disfrutar de sus paisajes. El tour incluye transporte, guía profesional y tiempo libre para explorar, tomar fotografías o disfrutar de un almuerzo frente al mar. Una experiencia perfecta para quienes desean conectar con la historia, la cultura y la belleza natural del Caribe colombiano.",
        [ENGLISH]:
          "Set out on an unforgettable journey from Cartagena to Santa Marta, Colombia’s oldest city and one of the Caribbean’s most charming destinations. During the trip, you’ll visit iconic landmarks such as the Quinta de San Pedro Alejandrino, where Simón Bolívar spent his final days; the Historic Center with its colonial architecture; and the beautiful Santa Marta Bay, perfect for relaxing and enjoying the view. The tour includes transportation, a professional guide, and free time to explore, take photos, or enjoy lunch by the sea. An ideal experience for travelers seeking to connect with the history, culture, and natural beauty of the Colombian Caribbean.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
    },
  },
  {
    id: "T12",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
    type: TOURS[languaje],
    isAvailable: true,
    info: {
      name: "Cartagena a San Basilio de Palenque",
      location: "Cartagena - Palenque",
      type: TOURS[languaje],
      mainDescription: {
        [SPANISH]: "Cultura, historia y raíces africanas",
        [ENGLISH]: "Culture, history, and African heritage",
      },
      description: {
        [SPANISH]:
          "Adéntrate en la historia viva de Colombia con este tour cultural a San Basilio de Palenque, el primer pueblo libre de América y reconocido por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad. Durante la visita, conocerás la historia de resistencia de los africanos que escaparon de la esclavitud y fundaron este símbolo de libertad. Recorrerás sus calles llenas de color, escucharás su lengua única, el “palenquero”, y disfrutarás de su música, tambores y gastronomía tradicional. Acompañado por un guía local, vivirás una experiencia auténtica que combina aprendizaje, cultura y emoción. Ideal para quienes desean descubrir el alma del Caribe más allá de las playas y conectar con las raíces profundas de su gente.",
        [ENGLISH]:
          "Immerse yourself in Colombia’s living history with this cultural tour to San Basilio de Palenque, the first free town in the Americas and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity. During your visit, you’ll learn about the powerful story of the Africans who escaped slavery and founded this symbol of freedom. Walk through its colorful streets, hear the unique Palenquero language, and experience its music, drums, and traditional cuisine. Guided by a local expert, you’ll enjoy an authentic experience that blends learning, culture, and emotion. Perfect for travelers who want to explore the heart of the Caribbean and connect with the deep roots of its people.",
      },
      properties: {
        [SPANISH]: [],
        [ENGLISH]: [],
      },
      outstanding: [],
      gallery: [],
    },
  },
];
