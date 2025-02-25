import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import "./ModalGallery.style.scss";
import { videoNotAllowedByBrowser } from "../../utils/constants";

const ModalGallery = ({ show, onClose, gallery, activeIndex, languaje }) => {
  const [cursor, setCursor] = useState(activeIndex);

  const modalClassName = show ? "show" : "";

  const onSile = (direction = "right") => {
    if (direction === "right" && cursor < gallery.length - 1)
      setCursor((prevState) => prevState + 1);
    if (direction === "left" && cursor > 0)
      setCursor((prevState) => prevState - 1);
  };

  const isCursorDisabled = (side) => {
    if (side === "right" && cursor === gallery.length - 1) return "disabled";
    if (side === "left" && cursor === 0) return "disabled";
  };

  const leftCursor = `${cursor * -100}%`;
  return (
    <main role="dialog" className={`modal ${modalClassName}`}>
      <section className="modal-bg-blur" onClick={onClose} />
      <section className="modal-container">
        <IoCloseOutline
          className="modal-btn-close"
          size="30"
          onClick={onClose}
        />
        <FaAngleLeft
          onClick={() => onSile("left")}
          className={`selector left ${isCursorDisabled("left")}`}
          size="30"
        />
        <FaAngleLeft
          onClick={() => onSile("right")}
          className={`selector right ${isCursorDisabled("right")}`}
          size="30"
        />
        <section className="modal-gallery-list" style={{ left: leftCursor }}>
          {gallery.map((images, index) => {
            if (images.type === "video")
              return (
                <video
                  src={images.url}
                  autoPlay
                  controls={false}
                  muted
                  loop={true}
                  style={{ ...images.span }}
                >
                  {videoNotAllowedByBrowser[languaje]}
                </video>
              );
            return (
              <img
                key={index}
                src={images.url}
                alt={`img-${index}`}
                style={{ ...images.span }}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default ModalGallery;
