import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./Slider.style.scss";

const Slider = ({
  width = "100%",
  title,
  isFullWidth = false,
  size,
  children,
}) => {
  const refSlider = useRef(null);
  const percentaje = parseFloat(width) / 100;
  const [sliderLeft, setSliderLeft] = useState(0);
  const [sliderLeftPixel, setSliderLeftPixel] = useState("0px");
  const [actualWidth, setActualWidth] = useState(
    window.innerWidth * percentaje
  );
  const isFullWidthClassName = isFullWidth ? "fullwidth" : "";

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

  const showControls = () => (actualWidth >= size * 270 ? false : true);

  const leftActive = () => (sliderLeft < 0 ? "active" : "");

  const rightActive = () => {
    const panelWidth = refSlider?.current?.offsetWidth || actualWidth;
    return (size + sliderLeft) * 270 > panelWidth ? "active" : "";
  };

  return (
    <section className="app__slider">
      <Container className="app__slider__title" width="70%">
        <h2>{title}</h2>
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
      <Container
        className={`app__slider__items ${isFullWidthClassName}`}
        width={width}
      >
        <section
          ref={refSlider}
          className="app__slider__section"
          style={{ left: sliderLeftPixel }}
        >
          {children}
        </section>
      </Container>
    </section>
  );
};

export default Slider;
