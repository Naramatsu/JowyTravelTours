import { BsBrightnessHigh, BsFillMoonFill } from "react-icons/bs";
import {
  DARK,
  ENGLISH,
  HOSTING,
  LIGHT,
  SHIPS,
  SPANISH,
  TOURS,
  TRANSPORTS,
} from "../../utils/constants";
import { ROUTES } from "../../utils/routes";

export const routeTabs = [
  {
    link: ROUTES.HOSTING,
    label: HOSTING,
  },
  {
    link: ROUTES.TOURS,
    label: TOURS,
  },
  {
    link: ROUTES.TRANSPORTS,
    label: TRANSPORTS,
  },
  {
    link: ROUTES.SHIPS,
    label: SHIPS,
  },
];

export const appLanguaje = {
  [ENGLISH]: "En",
  [SPANISH]: "Es",
};

export const appTheme = {
  [DARK]: {
    className: "Dark",
    icon: <BsFillMoonFill />,
  },
  [LIGHT]: {
    className: "Light",
    icon: <BsBrightnessHigh />,
  },
};
