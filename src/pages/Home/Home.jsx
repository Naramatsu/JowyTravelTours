import React, { useContext, useEffect } from "react";
import CardCity from "../../components/CardCity";
import CardClientsTestimonials from "../../components/CardClientsTestimonials";
import CardPresentation from "../../components/CardPresentation";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import HomeProducts from "../../layout/HomeProducts";
import PanelImage from "../../components/PanelImage";
import Slider from "../../components/Slider";
import VideoPromo from "../../components/VideoPromo";
import { PreferencesAppContext } from "../../context/Preferences";
import {
  citiesButtonText,
  citiesItems,
  citiesTitle,
  clientsTestimonials,
  clientsTestimonialsItems,
  contactUsPanelButtonText,
  contactUsPanelDescription,
  contactUsPanelImg,
  contactUsPanelTitle,
  mainSlogan,
  popularPlaces,
  popularPlacesItems,
} from "./Home.data";
import "./Home.style.scss";

const Home = () => {
  const { languaje, theme } = useContext(PreferencesAppContext);
  useEffect(() => {
    document.title = "Jowy Travel & Tours | Home";
  }, []);
  return (
    <>
      <Container
        width="70%"
        className="home__container"
        style={{
          "--bg":
            "url(https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydGFnZW5hJTIwY29sb21iaWF8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <Grid columns={2} className="home__grid">
          <section className="home__main__section left">
            {mainSlogan[languaje]}
          </section>
          <section className="home__main__section right">
            <img
              src="https://i.pinimg.com/736x/9a/43/c3/9a43c3eb5e90f97c235fc7b6efc2aa5d.jpg"
              alt="banner"
            />
          </section>
        </Grid>
      </Container>
      <Slider
        width="70%"
        title={popularPlaces[languaje]}
        size={popularPlacesItems.length}
      >
        {popularPlacesItems.map((place, index) => (
          <CardPresentation
            key={index}
            img={place.img}
            name={place.info.name[languaje]}
            location={place.info.location}
            languaje={languaje}
            rating={place.info.rating}
          />
        ))}
      </Slider>
      <Container width="70%">
        <VideoPromo languaje={languaje} />
        <HomeProducts languaje={languaje} />
      </Container>
      <Slider
        title={clientsTestimonials[languaje]}
        width="70%"
        size={clientsTestimonialsItems.length}
      >
        {clientsTestimonialsItems.map((testimonial, index) => (
          <CardClientsTestimonials
            key={index}
            items={testimonial}
            languaje={languaje}
            theme={theme}
          />
        ))}
      </Slider>
      {false && (
        <Slider
          title={citiesTitle[languaje]}
          size={citiesItems.length}
          width="70%"
          itemSize={370}
        >
          {citiesItems.map(({ img, city, title }, index) => (
            <CardCity
              key={index}
              img={img}
              city={city}
              title={title[languaje]}
              buttonText={citiesButtonText[languaje]}
            />
          ))}
        </Slider>
      )}
      <Container width="70%">
        <PanelImage
          img={contactUsPanelImg}
          title={contactUsPanelTitle[languaje]}
          description={contactUsPanelDescription[languaje]}
          buttonText={contactUsPanelButtonText[languaje]}
          theme={theme}
        />
      </Container>
      <iframe
        title="cartagena map"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62788.30360321109!2d-75.50852545!3d10.40019875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1710424558401!5m2!1ses!2sco"
        width="600"
        height="700"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Home;
