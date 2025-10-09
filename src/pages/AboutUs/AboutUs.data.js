import { ENGLISH, SPANISH } from "../../utils/constants";

export const pageTitle = {
  [SPANISH]: "Sobre Nosotros",
  [ENGLISH]: "About Us",
};

export const panelTitle = {
  [SPANISH]: (
    <h2>
      Sobre <br /> Jowy Travel & Tours
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      About <br /> Jowy Travel & Tours
    </h2>
  ),
};

export const panelDescription = {
  [SPANISH]: (
    <>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta)
      </p>
      <p>
        desconocido usó una galería de textos y los mezcló de tal manera que
        logró hacer un libro de textos especimen. No sólo sobrevivió 500 años
      </p>
    </>
  ),
  [ENGLISH]: (
    <>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta)
      </p>
      <p>
        desconocido usó una galería de textos y los mezcló de tal manera que
        logró hacer un libro de textos especimen. No sólo sobrevivió 500 años
      </p>
    </>
  ),
};

export const outstandingInfo = [
  {
    cuantity: "10",
    label: {
      [SPANISH]: "Años de experiencia",
      [ENGLISH]: "Years of experience",
    },
  },
  { cuantity: "10+", label: { [SPANISH]: "Hoteles", [ENGLISH]: "Hotels" } },
  {
    cuantity: "3",
    label: {
      [SPANISH]: "Ciudades disponibles",
      [ENGLISH]: "Cities availables",
    },
  },
];

export const whyPanelTitle = {
  [SPANISH]: <h2>¿Por qué elegirnos?</h2>,
  [ENGLISH]: (
    <h2>
      Why <br /> choose uS?
    </h2>
  ),
};

export const whyChooseUs = [
  {
    cuantity: "01",
    label: {
      [SPANISH]: "Nos ajustamos a tu presupuesto",
      [ENGLISH]: "We fit your budget",
    },
    description: {
      [SPANISH]:
        "Creamos experiencias únicas para todos los gustos y bolsillos, ofreciendo planes flexibles sin sacrificar calidad ni diversión.",
      [ENGLISH]:
        "We create unique experiences for every taste and budget, offering flexible plans without compromising quality or fun.",
    },
  },
  {
    cuantity: "02",
    label: {
      [SPANISH]: "Somos confiables",
      [ENGLISH]: "We are trustworthy",
    },
    description: {
      [SPANISH]:
        "Tu tranquilidad es nuestra prioridad. Cumplimos lo que prometemos, brindándote seguridad, puntualidad y servicio de primera.",
      [ENGLISH]:
        "Your peace of mind is our priority. We deliver what we promise, providing safety, punctuality, and top-quality service.",
    },
  },
  {
    cuantity: "03",
    label: {
      [SPANISH]: "Nos importas demasiado",
      [ENGLISH]: "You truly matter to us",
    },
    description: {
      [SPANISH]:
        "Cada viajero es parte de nuestra familia. Escuchamos tus necesidades y cuidamos cada detalle para que tu experiencia sea inolvidable.",
      [ENGLISH]:
        "Every traveler is part of our family. We listen to your needs and take care of every detail to make your experience unforgettable.",
    },
  },
  {
    cuantity: "04",
    label: {
      [SPANISH]: "Queremos que disfrutes Cartagena",
      [ENGLISH]: "We want you to enjoy Cartagena",
    },
    description: {
      [SPANISH]:
        "Más que un destino, es una experiencia que queremos que vivas al máximo —con alegría, cultura y el encanto del Caribe.",
      [ENGLISH]:
        "More than just a destination, Cartagena is an experience we want you to live to the fullest —with joy, culture, and Caribbean charm.",
    },
  },
];

export const steps = [
  {
    index: 1,
    label: {
      [SPANISH]: "Me Contactas",
      [ENGLISH]: "Contact me",
    },
    description: {
      [SPANISH]: "Te damos asesoría",
      [ENGLISH]: "We give you advice",
    },
  },
  {
    index: 2,
    label: {
      [SPANISH]: "Nos amoldamos a tu presupuesto",
      [ENGLISH]: "We adapt to your budget",
    },
    description: {
      [SPANISH]: "Buscamos de acuerdo a tus necesidades",
      [ENGLISH]: "We search according to your needs",
    },
  },
  {
    index: 3,
    label: {
      [SPANISH]: "Generamos la reserva",
      [ENGLISH]: "We generate the reservation",
    },
    description: {
      [SPANISH]: "Para que disfrutes de tus vacaciones",
      [ENGLISH]: "We search according to your needs",
    },
  },
];

export const howItWorks = {
  [SPANISH]: {
    title: "¿Cómo funciona?",
    description: (
      <p>
        desconocido usó una galería de textos y los mezcló de tal manera que
        logró hacer un libro de textos especimen
      </p>
    ),
  },
  [ENGLISH]: {
    title: "How it Works",
    description: (
      <p>
        desconocido usó una galería de textos y los mezcló de tal manera que
        logró hacer un libro de textos especimen
      </p>
    ),
  },
};
