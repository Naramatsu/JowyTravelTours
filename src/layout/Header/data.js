import { BsBrightnessHigh, BsFillMoonFill } from "react-icons/bs";
import { DARK, ENGLISH, LIGHT, SPANISH } from "../../utils/constants";

export const routeTabs = {
  [SPANISH]: [
    {
      link: "/hosting",
      label: "Hospedaje",
    },
    +{
      link: "/tours",
      label: "Tours",
    },
    {
      link: "/transports",
      label: "Transportes",
    },
    {
      link: "/ships",
      label: "Embarcaciones",
    },
  ],
  [ENGLISH]: [
    {
      link: "/hosting",
      label: "Hosting",
    },
    {
      link: "/daypass",
      label: "Day-pass",
    },
    {
      link: "/tours",
      label: "Tours",
    },
    {
      link: "/transports",
      label: "Transports",
    },
    {
      link: "/ships",
      label: "Ships",
    },
  ],
};

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
