import React, { useContext } from "react";
import BannerPage from "../../components/BannerPage";
import Container from "../../layout/Container";
import { PreferencesAppContext } from "../../context/Preferences";
import {
  howItWorks,
  outstandingInfo,
  pageTitle,
  panelDescription,
  panelTitle,
  steps,
  whyChooseUs,
  whyPanelTitle,
} from "./data";
import PanelImage from "../../components/PanelImage";
import Shape from "../../components/Shape";
import Arrow from "../../assets/arrow.png";
import "./AboutUs.style.scss";
import { imgBanner } from "../../utils/constants";

const AboutUs = () => {
  const { theme, languaje } = useContext(PreferencesAppContext);
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
