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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="aboutus">
      <BannerPage title={pageTitle[languaje]} img={imgBanner} />
      <Container width="70%" className="aboutus__panel">
        <PanelImage
          img={imgBanner}
          theme={theme}
          title={panelTitle[languaje]}
          className="aboutus__panel__container"
          description={panelDescription[languaje]}
        >
          <section className="shape__container__list">
            {outstandingInfo[languaje].map(({ cuantity, label }, index) => (
              <Shape key={index} cuantity={cuantity} label={label} />
            ))}
          </section>
        </PanelImage>
        <section className="how-it-works">
          <section className="how-it-works__title">
            <h3>{howItWorks[languaje].title}</h3>
            {howItWorks[languaje].description}
          </section>
          <section className="how-it-works__steps">
            {steps[languaje].map(({ index, label, description }) => (
              <React.Fragment key={index}>
                <section className="whyUs__panel">
                  <Shape cuantity={index} />
                  <section className="whyUs__panel__caption">
                    <h4>{label}</h4>
                    {description}
                  </section>
                </section>
                <img className={`arrow ${theme}`} src={Arrow} alt="arrow" />
              </React.Fragment>
            ))}
          </section>
        </section>
        <PanelImage
          img={imgBanner}
          theme={theme}
          title={whyPanelTitle[languaje]}
          className="whyUs__panel__container"
          side="right"
        >
          <section className="whyUs__container__list">
            {whyChooseUs[languaje].map(
              ({ cuantity, label, description }, index) => (
                <section key={index} className={`whyUs__panel ${theme}`}>
                  <Shape cuantity={cuantity} />
                  <section className="whyUs__panel__caption">
                    <h4>{label}</h4>
                    {description}
                  </section>
                </section>
              )
            )}
          </section>
        </PanelImage>
      </Container>
    </section>
  );
};

export default AboutUs;
