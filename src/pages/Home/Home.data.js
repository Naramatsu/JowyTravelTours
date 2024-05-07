import { ENGLISH, SPANISH } from "../../utils/constants";

export const pageTitle = {
  [SPANISH]: "Inicio",
  [ENGLISH]: "Home",
};

export const mainSlogan = {
  [SPANISH]: (
    <>
      <h1>
        Descubre
        <span> Cartagena</span>
        <br />
        con <span> nosotros</span>.
      </h1>
      <p className="subtitle">
        Cada viaje es una oportunidad para descubrir, explorar y crear recuerdos
        inolvidables. Cartagena de Indias es un lugar perfecto para conocer y
        disfrutar de todas las maravillas que contiene esta bella ciudad.
      </p>
    </>
  ),
  [ENGLISH]: (
    <>
      <h1>
        Discover
        <span> Cartagena</span>
        <br />
        with us
      </h1>
      <p className="subtitle">
        Every trip is an opportunity to discover, explore and create
        unforgettable memories. Cartagena de Indias is a perfect place to
        discover and enjoy all the wonders that this beautiful city contains.
      </p>
    </>
  ),
};

export const popularPlaces = {
  [SPANISH]: (
    <h2>
      <span>Lugares </span>Populares
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      <span>Popular </span>Places
    </h2>
  ),
};

export const popularPlacesItems = [
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710365331/Jowy%20Travels%20y%20Tour/sanfelipe_zobqr2.jpg",
    info: {
      name: {
        [SPANISH]: "Castillo San Felipe",
        [ENGLISH]: "San Felipe Castle",
      },
      location: "Cartagena",
      rating: 4.7,
    },
  },
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710366044/Jowy%20Travels%20y%20Tour/playatranquila_uznshm.webp",
    info: {
      name: {
        [SPANISH]: "Playa blanca",
        [ENGLISH]: "White beach",
      },
      location: "Barú",
      rating: 4.2,
    },
  },
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710366205/Jowy%20Travels%20y%20Tour/palenque_uy8m6i.webp",
    info: {
      name: {
        [SPANISH]: "Palenque",
        [ENGLISH]: "Palenque",
      },
      location: "Mahates",
      rating: 4,
    },
  },
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710366359/Jowy%20Travels%20y%20Tour/volcantotumo_eqocjc.jpg",
    info: {
      name: {
        [SPANISH]: "Volcán del Totumo",
        [ENGLISH]: "Volcano of totumo",
      },
      location: "Santa Catalina",
      rating: 4.3,
    },
  },
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710366449/Jowy%20Travels%20y%20Tour/tayrona_oldgw8.jpg",
    info: {
      name: {
        [SPANISH]: "Parque Tayrona",
        [ENGLISH]: "Tayrona Park",
      },
      location: "Santa Marta",
      rating: 4.5,
    },
  },
  {
    img: "https://res.cloudinary.com/drn7dmjkz/image/upload/v1710366514/Jowy%20Travels%20y%20Tour/marrosado_anxznb.jpg",
    info: {
      name: {
        [SPANISH]: "Mar rosado",
        [ENGLISH]: "Pink sea",
      },
      location: "Barranquilla",
      rating: 4,
    },
  },
];

export const clientsTestimonials = {
  [SPANISH]: (
    <h2>
      <span>Testimonios </span>de clientes
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      <span>Clients </span>Testimonials
    </h2>
  ),
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
      Reserva tu hospedaje, <br />
      tour o transporte y déjate llevar.
    </h2>
  ),
  [ENGLISH]: (
    <h2>
      Book a hosting, <br />
      tour o transport & just leave
    </h2>
  ),
};

export const contactUsPanelDescription = {
  [SPANISH]: (
    <p>
      Hospédate con nosotros y vive la experiencia completa, disfruta de Tours
      personalizados para explorar cada rincón de la ciudad y transportate
      seguro y cómodo por toda la ciudad sin preocupaciones.
      <br />
      <br />
      ¡Reserva ahora y disfruta de descuentos exclusivos!
    </p>
  ),
  [ENGLISH]: (
    <p>
      Stay with us and live the complete experience, enjoy personalized Tours to
      explore every corner of the city and transport yourself safely and
      comfortably throughout the city without worries.
      <br />
      <br />
      Book now and enjoy exclusive discounts!
    </p>
  ),
};

export const contactUsPanelButtonText = {
  [SPANISH]: "Pregúntame",
  [ENGLISH]: "Ask me",
};
