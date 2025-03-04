import React, { useContext, useEffect } from "react";
import Arrow from "../../assets/arrow.png";
import BannerPage from "../../components/BannerPage";
import Container from "../../layout/Container";
import PanelImage from "../../components/PanelImage";
import Shape from "../../components/Shape";
import { imgBanner } from "../../utils/constants";

import {
  howItWorks,
  outstandingInfo,
  pageTitle,
  panelDescription,
  panelTitle,
  steps,
  whyChooseUs,
  whyPanelTitle,
} from "./AboutUs.data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./AboutUs.style.scss";

const AboutUs = () => {
  const { theme, languaje } = useContext(PreferencesAppContext);

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]}`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="aboutus">
      <BannerPage
        title={pageTitle[languaje]}
        img="https://cloudfront-us-east-1.images.arcpublishing.com/semana/E4PC43N2KRFZTKCEBUSVY3XETU.jpg"
      />
      <Container width="70%" className="aboutus__panel">
        <PanelImage
          img={imgBanner}
          theme={theme}
          title={panelTitle[languaje]}
          className="aboutus__panel__container"
          description={panelDescription[languaje]}
        >
          <section className="shape__container__list">
            {outstandingInfo.map(({ cuantity, label }, index) => (
              <Shape key={index} cuantity={cuantity} label={label[languaje]} />
            ))}
          </section>
        </PanelImage>
        <section className="how-it-works">
          <section className="how-it-works__title">
            <h3>{howItWorks[languaje].title}</h3>
            {howItWorks[languaje].description}
          </section>
          <section className="how-it-works__steps">
            {steps.map(({ index, label, description }) => (
              <React.Fragment key={index}>
                <section className="whyUs__panel">
                  <Shape cuantity={index} />
                  <section className="whyUs__panel__caption">
                    <h4>{label[languaje]}</h4>
                    <p>{description[languaje]}</p>
                  </section>
                </section>
                <img className={`arrow ${theme}`} src={Arrow} alt="arrow" />
              </React.Fragment>
            ))}
          </section>
        </section>
        <PanelImage
          img="https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydGFnZW5hfGVufDB8fDB8fHww"
          theme={theme}
          title={whyPanelTitle[languaje]}
          className="whyUs__panel__container"
          side="right"
        >
          <section className="whyUs__container__list">
            {whyChooseUs.map(({ cuantity, label, description }, index) => (
              <section key={index} className={`whyUs__panel ${theme}`}>
                <Shape cuantity={cuantity} />
                <section className="whyUs__panel__caption">
                  <h4>{label[languaje]}</h4>
                  <p>{description[languaje]}</p>
                </section>
              </section>
            ))}
          </section>
        </PanelImage>
      </Container>
    </section>
  );
};

export default AboutUs;
