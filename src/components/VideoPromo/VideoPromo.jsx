import React, { useRef, useState, useContext } from "react";
import Grid from "../../layout/Grid";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { cartagenaInfo } from "./data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./VideoPromo.style.scss";

const videoUrl =
  "https://res.cloudinary.com/dxg9gszax/video/upload/v1643900779/kromac-ui/Avenged_Sevenfold_-_Wish_You_Were_Here_g2vaqu.mp4";

const VideoPromo = () => {
  const { languaje } = useContext(PreferencesAppContext);
  const [onPlayPause, setOnPlayPause] = useState(false);
  const videoRef = useRef(null);

  const handlerPLayer = () => {
    setOnPlayPause(!onPlayPause);
    if (!onPlayPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const isPaused = onPlayPause ? "paused" : "";

  return (
    <section className="app__video__section">
      <section className="app__video__section__video" onClick={handlerPLayer}>
        <video src={videoUrl} ref={videoRef} autoPlay={onPlayPause} muted />
        <button onClick={handlerPLayer} className={isPaused}>
          {onPlayPause ? <BsPauseFill /> : <BsPlayFill />}
        </button>
      </section>
      <section className="app__video__section__info">
        <Grid columns={4}>
          {cartagenaInfo[languaje].map((info, index) => (
            <section
              key={index}
              className="app__video__section__info__icon__container"
            >
              <section>
                {info.icon}
                <label>{info.label}</label>
              </section>
              <p>{info.name}</p>
            </section>
          ))}
        </Grid>
      </section>
    </section>
  );
};

export default VideoPromo;
