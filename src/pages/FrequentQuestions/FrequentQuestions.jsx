import React, { useContext, useEffect } from "react";
import BannerPage from "../../components/BannerPage";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import Question from "../../components/Question/Question";
import { imgBanner } from "../../utils/constants";
import {
  pageTitle,
  questions,
  subTitle,
  title,
} from "./FrequentQuestions.data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./FrequentQuestions.style.scss";

const FrequentQuestions = () => {
  const { theme, languaje } = useContext(PreferencesAppContext);

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="frequentquestions">
      <BannerPage title={pageTitle[languaje]} img={imgBanner} />
      <Container width="70%" className="frequentquestions__container">
        <section className="title">
          <h3>{title[languaje]}</h3>
          <p>{subTitle[languaje]}</p>
        </section>
        <Grid columns={2} className="frequentquestions__panel">
          <img src={imgBanner} alt="main" />
          <section className={`frequentquestions__list ${theme}`}>
            {questions[languaje].map(({ question, response }, index) => (
              <Question
                key={index}
                index={index + 1}
                question={question}
                description={response}
              />
            ))}
          </section>
        </Grid>
      </Container>
    </section>
  );
};

export default FrequentQuestions;
