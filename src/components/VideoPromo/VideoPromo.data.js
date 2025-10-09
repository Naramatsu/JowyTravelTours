import { AiOutlineStar } from "react-icons/ai";
import { ENGLISH, SPANISH } from "../../utils/constants";
import { FiUsers } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiCastleTurret } from "react-icons/pi";

export const cartagenaInfo = [
  {
    icon: <FiUsers />,
    label: "+624.000",
    name: {
      [SPANISH]: "Visitantes",
      [ENGLISH]: "Visitors",
    },
  },
  {
    icon: <AiOutlineStar />,
    label: "1.306",
    name: {
      [SPANISH]: "4.5 Estrellas",
      [ENGLISH]: "4.5 Stars",
    },
  },
  {
    icon: <PiCastleTurret />,
    label: "+50",
    name: {
      [SPANISH]: "Lugares",
      [ENGLISH]: "Places",
    },
  },
  {
    icon: <IoRestaurantOutline />,
    label: "+100",
    name: {
      [SPANISH]: "Restaurantes",
      [ENGLISH]: "Restaurants",
    },
  },
];

export const videoUrl =
  "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4";
