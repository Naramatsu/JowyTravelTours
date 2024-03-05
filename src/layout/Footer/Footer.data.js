import { LiaFacebook } from "react-icons/lia";
import { ENGLISH, SPANISH } from "../../utils/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ROUTES } from "../../utils/routes";

export const footerDescription = {
  [SPANISH]: (
    <p className="title__description">
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500
    </p>
  ),
  [ENGLISH]: (
    <p className="title__description">
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500
    </p>
  ),
};

export const usefulLinks = {
  [SPANISH]: "Links utiles",
  [ENGLISH]: "Useful links",
};

export const usefulLinksItems = {
  [SPANISH]: [
    {
      link: ROUTES.HOME,
      label: "Inicio",
    },
    {
      link: ROUTES.CONTACTUS,
      label: "Contactenos",
    },
    {
      link: ROUTES.ABOUTUS,
      label: "Sobre Nosotros",
    },
    {
      link: ROUTES.FREQUENTQUESTIONS,
      label: "Preguntas Frecuentes",
    },
  ],
  [ENGLISH]: [
    {
      link: ROUTES.HOME,
      label: "Home",
    },
    {
      link: ROUTES.CONTACTUS,
      label: "Contact Us",
    },
    {
      link: ROUTES.ABOUTUS,
      label: "About Us",
    },
    {
      link: ROUTES.FREQUENTQUESTIONS,
      label: "Frequents Questions",
    },
  ],
};

export const ourSocialMedia = {
  [SPANISH]: "Redes sociales",
  [ENGLISH]: "Social media",
};

export const ourSocialMediaItems = [
  {
    link: "/",
    icon: <LiaFacebook />,
  },
  {
    link: "/",
    icon: <FaInstagram />,
  },
  {
    link: "/",
    icon: <FaWhatsapp />,
  },
];

export const copyRightText = {
  [SPANISH]: <p>Todos los derechos reservados Jowy Travel & Tours @2023</p>,
  [ENGLISH]: <p>Copyright Jowy Travel & Tours @2023</p>,
};
