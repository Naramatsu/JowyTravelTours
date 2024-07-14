import React, { useContext, useEffect, useState } from "react";
import BannerPage from "../../components/BannerPage";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import Question from "../../components/Question/Question";
import { ACTIVE } from "../../utils/constants";
import {
  pageTitle,
  questions,
  subTitle,
  title,
} from "./FrequentQuestions.data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./FrequentQuestions.style.scss";

const FrequentQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const { theme, languaje } = useContext(PreferencesAppContext);

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]}`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isActive = (index) => (activeQuestion === index ? ACTIVE : "");

  const handlerActive = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="frequentquestions">
      <BannerPage
        title={pageTitle[languaje]}
        img="https://aeropuerto.cartagena-hotels.net/data/Photos/OriginalPhoto/15008/1500840/1500840184.JPEG"
      />
      <Container width="70%" className="frequentquestions__container">
        <section className="title">
          <h3>{title[languaje]}</h3>
          <p>{subTitle[languaje]}</p>
        </section>
        <Grid columns={2} className="frequentquestions__panel">
          <img
            src="https://www.olamtravelers.co/wp-content/uploads/2018/03/315701673_509987071172081_128451.jpg"
            alt="main"
          />
          <section className={`frequentquestions__list ${theme}`}>
            {questions[languaje].map(({ question, response }, index) => (
              <Question
                key={index}
                index={index + 1}
                question={question}
                description={response}
                isActive={isActive(index)}
                onClick={handlerActive}
              />
            ))}
          </section>
        </Grid>
      </Container>
    </section>
  );
};

export default FrequentQuestions;
