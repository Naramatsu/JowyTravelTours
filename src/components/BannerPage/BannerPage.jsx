import React from "react";
import Container from "../../layout/Container";
import "./BannerPage.style.scss";

const componentClassNamePrefix = "banner__page";

const BannerPage = ({ img, title }) => (
  <section className={componentClassNamePrefix}>
    <img src={img} alt="banner" />
    <Container width="70%" className={`${componentClassNamePrefix}__container`}>
      <section className={`${componentClassNamePrefix}__caption`}>
        <h3>{title}</h3>
      </section>
    </Container>
  </section>
);

export default BannerPage;
