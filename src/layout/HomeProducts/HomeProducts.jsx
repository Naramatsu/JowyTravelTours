import React, { useState, useEffect } from "react";
import ChipsContainer from "../../components/ChipsContainer";
import Grid from "../../layout/Grid";
import CardPresentation from "../../components/CardPresentation";
import { CiWarning } from "react-icons/ci";
import { btnShowMore, chips, emptyTab, subChips, title } from "./data";
import "./HomeProducts.style.scss";
import { items } from "./productsList.data";

const isHiddenButton = (val) => (val ? "hidden" : "");

const HomeProducts = ({ languaje }) => {
  const [actualData, setActualData] = useState([]);
  const [chipActive, setChipActive] = useState("");
  const [subChipActive, setSubChipActive] = useState("");
  const [actualPage, setActualPage] = useState(1);

  const isHiddenBtn = () => {
    if (subChipActive) {
      return isHiddenButton(
        actualData.length ===
          items(languaje).filter((card) => card.info.type === subChipActive)
            .length
      );
    } else {
      return isHiddenButton(
        actualData.length ===
          items(languaje).filter((card) => card.type === chipActive).length
      );
    }
  };

  const handlerActiveChips = (item) => {
    if (chipActive !== item) {
      setChipActive(item);
    } else {
      handlerClearChips();
    }
  };

  const handlerActiveSubChips = (item) => {
    if (subChipActive !== item) setSubChipActive(item);
  };

  const handlerClearChips = () => {
    setChipActive("");
    setSubChipActive("");
  };

  useEffect(() => {
    handlerClearChips();
    setActualPage(1);
  }, [languaje]);

  useEffect(() => {
    if (chipActive) {
      if (subChipActive) {
        setActualData(
          items(languaje)
            .filter((card) => card.info.type === subChipActive)
            .slice(0, actualPage * 8)
        );
      } else {
        setActualData(
          items(languaje)
            .filter((card) => card.type === chipActive)
            .slice(0, actualPage * 8)
        );
      }
    } else {
      setActualData(items(languaje).slice(0, actualPage * 8));
    }
  }, [languaje, chipActive, actualPage, subChipActive]);

  return (
    <section className="app__home__products">
      {title[languaje]}
      <ChipsContainer
        chips={chips[languaje]}
        chipActive={chipActive}
        subChipActive={subChipActive}
        onSelectChip={handlerActiveChips}
        onSelectSubChip={handlerActiveSubChips}
        subChips={subChips[languaje]}
      />
      <Grid columns={4} className="app__home__products__container container">
        {actualData.length ? (
          actualData.map((item, index) => (
            <CardPresentation
              key={index}
              img={item.img}
              name={item.info.name}
              location={item.info.location}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <section className="empty__label">
            <CiWarning />
            <p>{emptyTab[languaje]}</p>
          </section>
        )}
      </Grid>
      <button
        className={isHiddenBtn()}
        onClick={() => setActualPage(actualPage + 1)}
      >
        {btnShowMore[languaje]}
      </button>
    </section>
  );
};

export default HomeProducts;
