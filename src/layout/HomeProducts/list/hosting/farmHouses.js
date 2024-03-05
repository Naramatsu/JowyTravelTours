import { MdOutlineDoorFront } from "react-icons/md";

import {
  FARM_HOUSES,
  HOSTING,
  bedrooms,
  defaultHostingProperties,
  description1,
  mainDescription1,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const farmHousesItems = (languaje) => [
  {
    id: "H22",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: FARM_HOUSES[languaje],
      location: "Turbaco",
      type: FARM_HOUSES[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            upTo: 9,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(6, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 6,
            },
            upTo: 18,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/91/86/2c/getlstd-property-photo.jpg?w=700&h=-1&s=1",
        },
      ],
    },
  },
];
