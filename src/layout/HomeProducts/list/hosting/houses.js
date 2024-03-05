import { MdOutlineDoorFront } from "react-icons/md";

import {
  HOSTING,
  HOUSES,
  bedrooms,
  defaultHostingProperties,
  description1,
  mainDescription1,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const housesItems = (languaje) => [
  {
    id: "H19",
    img: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: HOUSES[languaje],
      location: "Centro histórico",
      type: HOUSES[languaje],
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
              label: bedrooms(4, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 4,
            },
            upTo: 12,
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
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(9, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 9,
            },
            upTo: 27,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
        },
        {
          url: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://files.lafm.com.co/assets/public/2020-10/panoramica_cartagena_1_0.jpeg",
        },
      ],
    },
  },
  {
    id: "H20",
    img: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: HOUSES[languaje],
      location: "Morros",
      type: HOUSES[languaje],
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
      ],
      gallery: [
        {
          url: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
        },
        {
          url: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://estaticos.elcolombiano.com/documents/10157/0/1200x801/0c87/1200d627/none/11101/DVAS/image_content_34817935_20191213090959.jpg",
        },
      ],
    },
  },
  {
    id: "H21",
    img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: HOUSES[languaje],
      location: "Cholon",
      type: HOUSES[languaje],
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
      ],
      gallery: [
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-isla-chol%C3%B3n.jpg",
        },
      ],
    },
  },
];
