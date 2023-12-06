import { ENGLISH, SPANISH } from "../../utils/constants";

export const mainSlogan = {
  [SPANISH]: (
    <>
      <h1>
        La vida es corta, <br />
        el mundo es grande
      </h1>
      <p className="subtitle">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto.
      </p>
    </>
  ),
  [ENGLISH]: (
    <>
      <h1>
        Life is short, <br />
        the world is wide
      </h1>
      <p className="subtitle">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto.
      </p>
    </>
  ),
};

export const popularPlaces = {
  [SPANISH]: "Lugares Populares",
  [ENGLISH]: "Popular Places",
};

export const popularPlacesItems = {
  [SPANISH]: [
    {
      img: "https://www.cartagena-indias.com/Lugares/Images/castillo-san-felipe.jpg",
      info: {
        name: "Castillo San Felipe",
        location: "Cartagena",
      },
    },
    {
      img: "https://www.baytours.com.co/wp-content/uploads/2019/01/playa-blanca-baru.jpg",
      info: {
        name: "Playa blanca",
        location: "Barú",
      },
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg/640px-Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
      info: {
        name: "Palenque",
        location: "Mahates",
      },
    },
    {
      img: "https://weekend-bucket.s3.amazonaws.com/Desde_Bucaramanga_Parque_Tayrona_1_52ca91e004.jpg",
      info: {
        name: "Parque Tayrona",
        location: "Santa Marta",
      },
    },
    {
      img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-Salinas-de-Galerazamba-mar-rosado-en-colombia.jpg",
      info: {
        name: "Mar rosado",
        location: "Barranquilla",
      },
    },
  ],
  [ENGLISH]: [
    {
      img: "https://www.cartagena-indias.com/Lugares/Images/castillo-san-felipe.jpg",
      info: {
        name: "San Felipe Castle",
        location: "Cartagena",
      },
    },
    {
      img: "https://www.baytours.com.co/wp-content/uploads/2019/01/playa-blanca-baru.jpg",
      info: {
        name: "Playa blanca",
        location: "Barú",
      },
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg/640px-Plaza_de_San_Roque%2C_Mahates_Bol%C3%ADvar.jpg",
      info: {
        name: "Palenque",
        location: "Mahates",
      },
    },
    {
      img: "https://weekend-bucket.s3.amazonaws.com/Desde_Bucaramanga_Parque_Tayrona_1_52ca91e004.jpg",
      info: {
        name: "Tayrona Park",
        location: "Santa Marta",
      },
    },
    {
      img: "https://expotur-eco.com/wp-content/uploads/2019/08/cropped-Salinas-de-Galerazamba-mar-rosado-en-colombia.jpg",
      info: {
        name: "Mar rosado",
        location: "Barranquilla",
      },
    },
  ],
};

export const clientsTestimonials = {
  [SPANISH]: "Testimonios de clientes",
  [ENGLISH]: "Clients Testimonials",
};

export const clientsTestimonialsItems = Array(8).fill({
  img: "https://ipaperds.com/wp-content/uploads/2023/03/spider-man-miles-morales-wallpaper-4k-1024x1024.png",
  name: "Jonathan Doe",
  rate: 4.5,
  testimonial: {
    [SPANISH]:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)",
    [ENGLISH]:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)",
  },
});

export const citiesItems = Array(3).fill({
  img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
  city: "Santa Marta",
  title: {
    [SPANISH]: (
      <>
        <h3>Our clients said about our services.</h3>
        <h4>Said about our services.</h4>
      </>
    ),
    [ENGLISH]: (
      <>
        <h3>Our clients said about our services.</h3>
        <h4>Said about our services.</h4>
      </>
    ),
  },
});

export const citiesTitle = {
  [SPANISH]: "Ciudades para visitar",
  [ENGLISH]: "Cities to visit",
};

export const citiesButtonText = {
  [SPANISH]: "Leer Más",
  [ENGLISH]: "Read More",
};

export const contactUsPanelImg =
  "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydGFnZW5hJTIwY29sb21iaWF8ZW58MHx8MHx8fDA%3D";

export const contactUsPanelTitle = {
  [SPANISH]: (
    <h2>
      Recerva un <br />
      ticket y dejate llevar
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      Book a <br />
      ticket & just leave
    </h2>
  ),
};

export const contactUsPanelDescription = {
  [SPANISH]: (
    <p>
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se
      dedica a la imprenta)
    </p>
  ),
  [ENGLISH]: (
    <p>
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se
      dedica a la imprenta)
    </p>
  ),
};

export const contactUsPanelButtonText = {
  [SPANISH]: "Preguntame",
  [ENGLISH]: "Ask me",
};
