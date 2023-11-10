import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";

import { BsArrowLeftShort, BsArrowRightShort, BsGeoAlt } from "react-icons/bs";
import "./Slider.style.scss";

const data = Array(6).fill({
  img: "https://www.civitatis.com/f/colombia/cartagena-de-indias/excursion-playa-blanca-589x392.jpg",
  info: {
    name: "Playa blanca",
    location: "Cartagena - Baru",
  },
});

const Slider = ({ width = "70%" }) => {
  const refSlider = useRef(null);
  const percentaje = parseFloat(width) / 100;
  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderLeftPixel, setSliderLeftPixel] = useState("0px");
  const [actualWidth, setActualWidth] = useState(
    window.innerWidth * percentaje
  );
  const itemsWidth = width ? width : "";

  useEffect(() => {
    const handlerWindowSize = () => {
      setActualWidth(window.innerWidth * percentaje);
    };
    window.addEventListener("resize", handlerWindowSize);
    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, [percentaje]);

  useEffect(() => {
    setSliderLeftPixel(`${sliderLeft * 270}px`);
  }, [sliderLeft]);

  const handlerShowNext = () => {
    if (sliderLeft < 0) setSliderLeft(sliderLeft + 1);
  };

  const handlerShowPrevious = () => {
    if (rightActive()) setSliderLeft(sliderLeft - 1);
  };

  const showControls = () => (actualWidth >= data.length * 270 ? false : true);

  const leftActive = () => (sliderLeft < 0 ? "active" : "");

  const rightActive = () => {
    const panelWidth = refSlider?.current?.offsetWidth || actualWidth;
    return (data.length + sliderLeft) * 270 > panelWidth ? "active" : "";
  };

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
