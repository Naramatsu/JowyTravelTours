import React, { useRef, useState } from "react";
import Grid from "../../layout/Grid";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { cartagenaInfo, videoUrl } from "./VideoPromo.data";
import { PAUSED } from "../../utils/constants";
import "./VideoPromo.style.scss";

const componentClassNamePrefix = "app__video__section";

const VideoPromo = ({ languaje }) => {
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
  const isPaused = onPlayPause ? PAUSED : "";

  return (
    <section className={componentClassNamePrefix}>
      <section
        className={`${componentClassNamePrefix}__video`}
        onClick={handlerPLayer}
      >
        <video src={videoUrl} ref={videoRef} autoPlay={onPlayPause} muted />
        <button onClick={handlerPLayer} className={isPaused}>
          {onPlayPause ? <BsPauseFill /> : <BsPlayFill />}
        </button>
      </section>
      <section className={`${componentClassNamePrefix}__info`}>
        <Grid columns={4}>
          {cartagenaInfo.map((info, index) => (
            <section
              key={index}
              className={`${componentClassNamePrefix}__info__icon__container`}
            >
              <section>
                {info.icon}
                <label>{info.label}</label>
              </section>
              <p>{info.name[languaje]}</p>
            </section>
          ))}
        </Grid>
      </section>
    </section>
  );
};

export default VideoPromo;
