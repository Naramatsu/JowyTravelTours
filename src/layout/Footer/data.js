import { LiaFacebook } from "react-icons/lia";
import { ENGLISH, SPANISH } from "../../utils/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
      link: "/",
      label: "Inicio",
    },
    {
      link: "/contactus",
      label: "Contactenos",
    },
    {
      link: "/aboutus",
      label: "Sobre Nosotros",
    },
    {
      link: "/frequentsquestions",
      label: "Preguntas Frecuentes",
    },
  ],
  [ENGLISH]: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/contactus",
      label: "Contact Us",
    },
    {
      link: "/aboutus",
      label: "About Us",
    },
    {
      link: "/frequentsquestions",
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
