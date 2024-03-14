import React from "react";
import Container from "../../layout/Container";
import { FaAngleLeft } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import "./BannerPage.style.scss";

const componentClassNamePrefix = "banner__page";

const BannerPage = ({ img, title }) => {
  const history = useHistory();
  return (
    <section className={componentClassNamePrefix}>
      <img src={img} alt="banner" />
      <Container
        width="70%"
        className={`${componentClassNamePrefix}__container`}
      >
        <section className={`${componentClassNamePrefix}__caption`}>
          <label className="goback" onClick={() => history.goBack()}>
            <FaAngleLeft />
            Go back
          </label>
          <h3>{title}</h3>
        </section>
      </Container>
    </section>
  );
};

export default BannerPage;
