import React from "react";
import Container from "../../layout/Container";
import "./BannerPage.style.scss";

const BannerPage = ({ img, title }) => {
  return (
    <section className="banner__page">
      <img src={img} alt="banner" />
      <Container width="70%" className="banner__page__container">
        <section className="banner__page__caption">
          <h3>{title}</h3>
        </section>
      </Container>
    </section>
  );
};

export default BannerPage;
