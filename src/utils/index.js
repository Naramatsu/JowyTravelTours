import { FaRegStar, FaRegUser, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  ACTIVE,
  DARK,
  additionalWarning,
  beds,
  people,
  upToPeople,
} from "./constants";
import { LuBedDouble, LuBedSingle } from "react-icons/lu";

export const columnsGenerator = (columns) => {
  let fractionsGenerates = "1fr";
  for (let i = 1; i < columns; i++) fractionsGenerates += " 1fr";
  return fractionsGenerates;
};

export const isActiveTab = (currentTab, activeTab) =>
  currentTab === activeTab ? ACTIVE : "";

export const isDarkTheme = (theme) => (theme === DARK ? DARK : "");

export const isDarkThemeFront = (theme) =>
  theme === DARK ? `${DARK} front` : "";

export const builRateStars = (rate) => {
  const result = [];
  const residue = rate - Math.trunc(rate);
  for (let i = 1; i <= rate; i++) {
    result.push(<FaStar />);
  }
  residue && result.push(<FaStarHalfAlt />);
  for (let i = result.length; i < 5; i++) {
    result.push(<FaRegStar />);
  }
  return result;
};

export const detailsPersonGenerator = ({
  rooms,
  kingBeds,
  singleBeds,
  from,
  to,
  upTo,
  warningNro,
  languaje,
  isOutstanding = true,
  personList,
}) => ({
  rooms,
  warning: additionalWarning(warningNro, languaje),
  outstanding: isOutstanding
    ? [
        {
          label: kingBeds ? `${kingBeds} ${beds("King", languaje)}` : null,
          icon: kingBeds ? <LuBedDouble /> : null,
        },
        {
          label: singleBeds
            ? `${singleBeds} ${beds("Single", languaje)}`
            : null,
          icon: singleBeds ? <LuBedSingle /> : null,
        },
        {
          label: upTo
            ? upToPeople(upTo, languaje)
            : `${from} - ${to} ${people(languaje)}`,
          icon: <FaRegUser />,
        },
      ]
    : personList.map((list) => ({
        label: `${list} ${people(languaje)}`,
        icon: <FaRegUser />,
      })),
  persons: upTo ? [upTo] : [from, to],
});
