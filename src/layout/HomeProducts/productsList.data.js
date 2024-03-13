import { cabinsItems } from "./list/hosting/cabins";
import { farmHousesItems } from "./list/hosting/farmHouses";
import { hostingItems } from "./list/hosting/hosting";
import { hotelsItems } from "./list/hosting/hotels";
import { housesItems } from "./list/hosting/houses";
import { toursItems } from "./list/tours/tours";
import { transportsAndShipsItems } from "./list/transportsAndShips/transportsAndShips";

export const items = (languaje) => [
  ...hostingItems(languaje),
  ...hotelsItems(languaje),
  ...cabinsItems(languaje),
  ...housesItems(languaje),
  ...farmHousesItems(languaje),
  ...toursItems(languaje),
  ...transportsAndShipsItems(languaje),
];
