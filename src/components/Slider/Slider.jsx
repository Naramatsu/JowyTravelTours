import React, { useState, useEffect, useRef } from "react";
import Container from "../../layout/Container";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "./Slider.style.scss";
import { ACTIVE } from "../../utils/constants";

const Slider = ({
  width = "100%",
  title,
  isFullWidth = false,
  size,
  itemSize = 270,
  children,
}) => {
  const refSlider = useRef(null);
  const percentaje = parseFloat(width) / 100;
  const [sliderLeft, setSliderLeft] = useState(0);
  const [showControls, setShowControls] = useState(false);
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
    setSliderLeftPixel(`${sliderLeft * itemSize}px`);
  }, [sliderLeft, itemSize]);

  useEffect(() => {
    setShowControls(
      refSlider?.current?.offsetWidth >= size * itemSize ? false : true
    );
  }, [refSlider, size, itemSize, actualWidth]);

  const handlerShowNext = () => {
    if (sliderLeft < 0) setSliderLeft(sliderLeft + 1);
  };

  const handlerShowPrevious = () => {
    if (rightActive()) setSliderLeft(sliderLeft - 1);
  };

  const leftActive = () => (sliderLeft < 0 ? ACTIVE : "");

  const rightActive = () => {
    const panelWidth = refSlider?.current?.offsetWidth || actualWidth;
    return (size + sliderLeft) * itemSize > panelWidth ? ACTIVE : "";
  };

  return (
    <section className="app__slider">
      <Container className="app__slider__title" width="70%">
        {title}
        <aside className="app__slider__title__controls">
          {showControls && (
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
