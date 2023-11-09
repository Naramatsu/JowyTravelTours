import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";

import { BsArrowLeftShort, BsArrowRightShort, BsGeoAlt } from "react-icons/bs";
import "./Slider.style.scss";

const data = Array(5).fill({
  img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
  info: {
    name: "Playa blanca",
    location: "Cartagena - Baru",
  },
});

const Slider = ({ width = "70%" }) => {
  const refSlider = useRef(null);
  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderLeftPixel, setSliderLeftPixel] = useState("0px");
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  const itemsWidth = width ? width : "";

  useEffect(() => {
    const handlerWindowSize = () => {
      setActualWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlerWindowSize);
    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, []);

  useEffect(() => {
    setSliderLeftPixel(`${sliderLeft * 270}px`);
  }, [sliderLeft]);

  const handlerShowNext = () => {
    if (sliderLeft < 0) setSliderLeft(sliderLeft + 1);
  };

  const handlerShowPrevious = () => {
    setSliderLeft(sliderLeft - 1);
  };

  // todo: improve
  const showControls = () => {
    if (actualWidth <= 1899 && data.length >= 5) return true;
    if (actualWidth <= 1500 && data.length >= 4) return true;
    if (actualWidth <= 1140 && data.length >= 3) return true;
    if (actualWidth <= 350 && data.length >= 1) return true;
    return false;
  };

  const leftActive = () => (sliderLeft < 0 ? "active" : "");

  // todo: fix
  const rightActive = () =>
    (data.length - sliderLeft) * 270 < refSlider?.current?.offsetWidth || 0
      ? "active"
      : "";

  return (
    <section className="app__slider">
      <Container className="app__slider__title" width="70%">
        <h2>Popular Places</h2>
        <aside className="app__slider__title__controls">
          {showControls() && (
            <>
              <BsArrowLeftShort
                onClick={handlerShowNext}
                className={leftActive()}
              />
              <BsArrowRightShort
                className={rightActive()}
                onClick={handlerShowPrevious}
              />
            </>
          )}
        </aside>
      </Container>

      <Container className="app__slider__items" width={itemsWidth}>
        <section
          ref={refSlider}
          className="app__slider__section"
          style={{ left: sliderLeftPixel }}
        >
          {data.map((place, index) => (
            <section key={index} className="app__slider__section__item">
              <img src={place.img} alt={place.info.name} />
              <section className="brightness" />
              <section className="app__slider__section__item__caption">
                <b>{place.info.name}</b>
                <p>
                  <BsGeoAlt />
                  {place.info.location}
                </p>
              </section>
            </section>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Slider;
