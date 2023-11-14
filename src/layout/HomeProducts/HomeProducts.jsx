import React, { useState, useEffect, useContext } from "react";
import ChipsContainer from "../../components/ChipsContainer";
import CardPresentation from "../../components/CardPresentation";
import { CiWarning } from "react-icons/ci";
import { chips, emptyTab, items, title } from "./data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./HomeProducts.style.scss";

const HomeProducts = () => {
  const { languaje } = useContext(PreferencesAppContext);
  const [actualData, setActualData] = useState([]);
  const [chipActive, setChipActive] = useState("");

  const handlerActiveChips = (item) => {
    if (chipActive !== item) setChipActive(item);
  };

  useEffect(() => {
    setChipActive(chips[languaje][0]);
  }, [languaje]);

  useEffect(() => {
    setActualData(items[languaje].filter((card) => card.tag === chipActive));
  }, [chipActive, languaje]);

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
      <button>View All</button>
    </section>
  );
};

export default HomeProducts;
