import { MdOutlineDoorFront } from "react-icons/md";

import {
  BOCAGRANDE,
  HOSTING,
  HOTELS,
  bedrooms,
  defaultHostingProperties,
  description1,
  mainDescription1,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const hotelsItems = (languaje) => [
  {
    id: "H15",
    img: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Ibatama",
      location: BOCAGRANDE,
      type: HOTELS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(1, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 1,
            },
            isOutstanding: false,
            personList: [2, 4, 6, 8],
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
        },
        {
          url: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://hotel-ibatama-cartagena.hotelmix.es/data/Photos/OriginalPhoto/10370/1037077/1037077378/Hotel-Ibatama-Cartagena-Exterior.JPEG",
        },
      ],
    },
  },
  {
    id: "H16",
    img: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Marbella",
      location: "Marbella",
      type: HOTELS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(1, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 1,
            },
            isOutstanding: false,
            personList: [2, 4, 6, 8],
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
        },
        {
          url: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cartagenadeindias.travel/wp-content/uploads/2022/11/marbella-2.webp",
        },
      ],
    },
  },
];
