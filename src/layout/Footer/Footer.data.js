import { LiaFacebook } from "react-icons/lia";
import { ENGLISH, SPANISH } from "../../utils/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ROUTES } from "../../utils/routes";

export const footerDescription = {
  [SPANISH]: (
    <p className="title__description">
      Cada viaje es una oportunidad para descubrir, explorar y crear recuerdos
      inolvidables. Cartagena de indias es un lugar perfecto para conocer y
      disfrutar de todas las maravillas que contiene esta bella ciudad.
    </p>
  ),
  [ENGLISH]: (
    <p className="title__description">
      Every trip is an opportunity to discover, explore and create unforgettable
      memories. Cartagena de Indias is a perfect place to discover and enjoy all
      the wonders that this beautiful city contains.
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
