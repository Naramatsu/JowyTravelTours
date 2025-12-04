import React, { useContext, useEffect } from "react";
import BannerPage from "../../components/BannerPage/BannerPage";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import {
  celphone,
  hours,
  showSection,
  whatsAppLink,
} from "../../utils/constants";
import { PreferencesAppContext } from "../../context/Preferences";
import {
  btnSend,
  formInputs,
  pageTitle,
  reachOutUs,
  requiredHolder,
  title,
  workingHours,
} from "./ConctactUs.data";
import "./ConctactUs.style.scss";

const ConctactUs = () => {
  const { theme, languaje } = useContext(PreferencesAppContext);

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]}`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAskMe = () => {
    const url = new URL(whatsAppLink);
    const message = "";
    url.searchParams.set("text", message);
    window.open(url.href, "_blank");
  };

  return (
    <section className="contactus">
      <BannerPage
        title={pageTitle[languaje]}
        img="https://wallpapercave.com/wp/wp7676892.jpg"
      />
      <Container width="70%" className="contactus__container">
        <section className="contactus__container__title">
          <h3>{reachOutUs[languaje]}</h3>
          <section className="working__hours">
            <p>{workingHours[languaje].plan}</p>
            <h5>{workingHours[languaje].hours}</h5>
            <p>{workingHours[languaje].days}</p>
            <p>{hours}</p>
          </section>
          <h3 className="title__color phone" onClick={onAskMe}>
            {celphone}
          </h3>
        </section>

        {showSection && (
          <section className="contactus__container__form">
            {title[languaje]}
            <Grid
              columns={2}
              className={`contactus__container__form__panel ${theme}`}
            >
              {formInputs[languaje].inputs.map((input, index) => (
                <section className="form__input" key={index}>
                  <p>
                    {input.label} {input.required && requiredHolder[languaje]}
                  </p>
                  <input name={input.name} placeholder={input.placeholder} />
                </section>
              ))}
              <section className="form__input textfield__message">
                <p>
                  {formInputs[languaje].message.label}
                  {formInputs[languaje].message.required &&
                    requiredHolder[languaje]}
                </p>
                <textarea
                  name={formInputs[languaje].message.name}
                  placeholder={formInputs[languaje].message.placeholder}
                ></textarea>
              </section>
              <section className="form__input textfield__message btn">
                <button className="sendmessage__btn">
                  {btnSend[languaje]}
                </button>
              </section>
            </Grid>
          </section>
        )}
      </Container>
    </section>
  );
};

export default ConctactUs;
