import { MdOutlineDoorFront } from "react-icons/md";
import {
  APARTMENTS,
  BOCAGRANDE,
  BOQUILLA,
  HOSTING,
  LAGUITO,
  SANTAMARTA,
  bedrooms,
  defaultHostingProperties,
  description1,
  mainDescription1,
} from "../../../../utils/constants";

import { detailsPersonGenerator } from "../../../../utils";

export const hostingItems = (languaje) => [
  {
    id: "HO-01",
    img: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Portofino",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            warningNro: 9,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/09/EdifPortofino-4.jpg",
        },
      ],
    },
  },
  {
    id: "HO-02",
    img: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto 1",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
        },
        {
          url: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://assets.easybroker.com/property_images/414530/20001920/EB-AO4530.jpg?version=1574125448",
        },
      ],
    },
  },
  {
    id: "HO-03",
    img: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Eliptic",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://reservacartagena.com/wp-content/uploads/2019/10/8ab7f64f-689e-4f1f-8226-2f2c42ed1157.jpg",
        },
      ],
    },
  },
  {
    id: "HO-04",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Beach",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404738536.jpg?k=30923091f39e75ac427d12b1f65fd94bf359803ddb9edb2f5efbe6166c8062cb&o=&hp=1",
        },
      ],
    },
  },
  {
    id: "HO-05",
    img: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Palmetto Sunset",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
        },
        {
          url: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://eswindows.com/wp-content/uploads/2020/09/PalmettoSunset-04.jpg",
        },
      ],
    },
  },
  {
    id: "HO-06",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Poseidon",
      location: LAGUITO,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
        },
        {
          url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/66223969.jpg?k=09108a05d955b74ae2df041b110b424166844f45c8cda4c63e238e305b87264c&o=",
        },
      ],
    },
  },
  {
    id: "HO-07",
    img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Penthouse",
      location: LAGUITO,
      type: APARTMENTS[languaje],
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
            kingBeds: 3,
            singleBeds: 3,
            upTo: 8,
            warningNro: 8,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
        },
      ],
    },
  },
  {
    id: "HO-08",
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Las 3 carabelas",
      location: LAGUITO,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=400x1920:format=jpg:rotate=90/path/s3e233c3063ff9116/image/i87bac9595403a81f/version/1554762641/image.jpg",
        },
      ],
    },
  },
  {
    id: "HO-09",
    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Edificio Atlantis",
      location: LAGUITO,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 10,
            warningNro: 10,
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
            kingBeds: 4,
            singleBeds: 4,
            upTo: 15,
            warningNro: 15,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s3e233c3063ff9116/image/i496bbd9547ef1db9/version/1493236838/image.jpg",
        },
      ],
    },
  },
  {
    id: "HO-10",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Torre centauro",
      location: LAGUITO,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79489010.jpg?k=4723fb5281d9cc37bf30241b7d9cbd0379f8db5eb043ac48646022c320f6ed03&o=&hp=1",
        },
      ],
    },
  },
  {
    id: "HO-11",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Morros 3",
      location: BOQUILLA,
      type: APARTMENTS[languaje],
      mainDescription: { ...mainDescription1 },
      description: { ...description1 },
      properties: { ...defaultHostingProperties },
      details: [
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/296808962.jpg?k=67f8586cfa8011593c435d76a724609b76385663268ff86aa245dc2673d2341a&o=&hp=1",
        },
      ],
    },
  },
  {
    id: "HO-12",
    img: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Turipaná",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 4,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
        },
        {
          url: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://i.ytimg.com/vi/3E6nk22FQ18/maxresdefault.jpg",
        },
      ],
    },
  },
  {
    id: "HO-13",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "El Escape",
      location: BOCAGRANDE,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 3,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            from: 2,
            to: 6,
            warningNro: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            warningNro: 9,
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
            kingBeds: 4,
            singleBeds: 4,
            upTo: 12,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://cf.bstatic.com/xdata/images/hotel/max500/339652784.jpg?k=b6ac6846a69923ea65c12ca14cf01def17ad68ff68425797ec0f9ee70e6d551b&o=&hp=1",
        },
      ],
    },
  },
  {
    id: "HO-14",
    img: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
    type: HOSTING[languaje],
    isAvailable: true,
    info: {
      name: "Rodadero",
      location: SANTAMARTA,
      type: APARTMENTS[languaje],
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
            kingBeds: 1,
            singleBeds: 1,
            from: 1,
            to: 4,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(2, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 2,
            },
            kingBeds: 2,
            singleBeds: 2,
            upTo: 6,
            languaje,
          }),
        },
        {
          ...detailsPersonGenerator({
            rooms: {
              label: bedrooms(3, languaje),
              icon: <MdOutlineDoorFront />,
              mount: 3,
            },
            kingBeds: 3,
            singleBeds: 3,
            upTo: 9,
            languaje,
          }),
        },
      ],
      gallery: [
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridRow: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
          span: { gridColumn: "span 2" },
        },
        {
          url: "https://dynamc-media-cdn.tripadvisor.com/media/photo-o/1a/5a/bf/e2/caption.jpg?w=1200&h=-1&s=1",
        },
      ],
    },
  },
];
