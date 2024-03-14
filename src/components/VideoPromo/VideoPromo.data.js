import { AiOutlineStar } from "react-icons/ai";
import { ENGLISH, SPANISH } from "../../utils/constants";
import { FiUsers } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiCastleTurret } from "react-icons/pi";

export const cartagenaInfo = {
  [SPANISH]: [
    {
      icon: <FiUsers />,
      label: "+624.000",
      name: "Visitantes",
    },
    {
      icon: <AiOutlineStar />,
      label: "1.306",
      name: "4.5 Estrellas",
    },
    {
      icon: <PiCastleTurret />,
      label: "+50",
      name: "Lugares turísticos",
    },
    {
      icon: <IoRestaurantOutline />,
      label: "+1.000",
      name: "Restaurantes",
    },
  ],
  [ENGLISH]: [
    {
      icon: <FiUsers />,
      label: "+624.000",
      name: "Visitors",
    },
    {
      icon: <AiOutlineStar />,
      label: "1.306",
      name: "4.5 Stars",
    },
    {
      icon: <PiCastleTurret />,
      label: "+50",
      name: "Tourist places",
    },
    {
      icon: <IoRestaurantOutline />,
      label: "+1.000",
      name: "Restaurants",
    },
  ],
};

export const videoUrl =
  "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4";
