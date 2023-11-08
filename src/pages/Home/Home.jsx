import React from "react";
import Container from "../../components/Container";
import Grid from "../../layout/Grid";
import HomePanel from "../../components/HomePanel";
import "./Home.style.scss";

const Home = () => {
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
            <h1>
              Life is short, <br />
              the world is wide
            </h1>
            <p className="subtitle">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto.
            </p>
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
    </>
  );
};

export default Home;
