import React, { useState, useEffect } from "react";
import ChipsContainer from "../../components/ChipsContainer";
import CardPresentation from "../../components/CardPresentation";
import { CiWarning } from "react-icons/ci";
import { btnShowMore, chips, emptyTab, items, title } from "./data";
import "./HomeProducts.style.scss";

const isHiddenButton = (val) => (val ? "hidden" : "");

const HomeProducts = ({ languaje }) => {
  const [actualData, setActualData] = useState([]);
  const [chipActive, setChipActive] = useState("");
  const [actualPage, setActualPage] = useState(1);

  const isHiddenBtn = isHiddenButton(
    actualData.length ===
      items[languaje].filter((card) => card.tag === chipActive).length
  );

  const handlerActiveChips = (item) => {
    if (chipActive !== item) setChipActive(item);
  };

  useEffect(() => {
    setChipActive(chips[languaje][0]);
  }, [languaje]);

  useEffect(() => {
    setActualData(
      items[languaje]
        .filter((card) => card.tag === chipActive)
        .slice(0, actualPage * 4)
    );
  }, [chipActive, languaje, actualPage]);

  return (
    <section className="app__home__products">
      {title[languaje]}
      <ChipsContainer
        chips={chips[languaje]}
        chipActive={chipActive}
        onSelectChip={handlerActiveChips}
      />
      <section className="app__home__products__container">
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
      </section>
      <button
        className={isHiddenBtn}
        onClick={() => setActualPage(actualPage + 1)}
      >
        {btnShowMore[languaje]}
      </button>
    </section>
  );
};

export default HomeProducts;
