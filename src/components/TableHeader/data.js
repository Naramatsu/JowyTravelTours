import { ENGLISH, SPANISH } from "../../utils/constants";

export const tableHeaders = {
  [SPANISH]: ["Hospedaje", "Pasadias", "Tours", "Transportes", "Embarcaciones"],
  [ENGLISH]: ["Hosting", "Day-pass", "Tours", "Transports", "Ships"],
};

export const activeTabInitialState = {
  [SPANISH]: "Hospedaje",
  [ENGLISH]: "Hosting",
};
