import React, { useContext } from "react";
import CardClientsTestimonials from "../../components/CardClientsTestimonials";
import CardPresentation from "../../components/CardPresentation";
import Container from "../../components/Container";
import Grid from "../../layout/Grid";
import HomePanel from "../../components/HomePanel";
import HomeProducts from "../../layout/HomeProducts";
import Slider from "../../components/Slider";
import VideoPromo from "../../components/VideoPromo";
import { PreferencesAppContext } from "../../context/Preferences";
import {
  clientsTestimonials,
  clientsTestimonialsItems,
  mainSlogan,
  popularPlaces,
  popularPlacesItems,
} from "./data";
import "./Home.style.scss";

const Home = () => {
  const { languaje } = useContext(PreferencesAppContext);
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
        <Grid columns={2}>
          <section className="home__main__section left">
            {mainSlogan[languaje]}
            <br />
            <HomePanel />
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
            name={place.info.name}
            location={place.info.location}
          />
        ))}
      </Slider>
      <Container width="70%">
        <VideoPromo />
        <HomeProducts />
      </Container>
      <Slider
        title={clientsTestimonials[languaje]}
        isFullWidth
        size={clientsTestimonialsItems.length}
      >
        {clientsTestimonialsItems.map((testimonial, index) => (
          <CardClientsTestimonials key={index} items={testimonial} />
        ))}
      </Slider>
    </>
  );
};

export default Home;
