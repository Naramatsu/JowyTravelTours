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

export const popularPlacesItems = Array(6).fill({
  img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
  info: {
    name: "Playa blanca",
    location: "Cartagena - Baru",
  },
});

export const clientsTestimonials = {
  [SPANISH]: "Testimonios de clientes",
  [ENGLISH]: "Clients Testimonials",
};

export const clientsTestimonialsItems = Array(8).fill({
  img: "https://ipaperds.com/wp-content/uploads/2023/03/spider-man-miles-morales-wallpaper-4k-1024x1024.png",
  name: "Jonathan Doe",
  rate: 4.5,
  testimonial:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)",
});
