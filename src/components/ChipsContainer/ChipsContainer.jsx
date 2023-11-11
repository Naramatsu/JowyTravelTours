import React, { useContext } from "react";
import { BiAward } from "react-icons/bi";
import { isActiveTab } from "../../utils";
import { PreferencesAppContext } from "../../context/Preferences";
import "./ChipsContainer.style.scss";

const ChipsContainer = ({ chips, chipActive, onSelectChip }) => {
  const { theme } = useContext(PreferencesAppContext);

  return (
    <section className={`chip__container ${theme}`}>
      {chips.map((item, index) => (
        <section
          key={index}
          className={`app__chip ${isActiveTab(item, chipActive)}`}
          onClick={() => onSelectChip(item)}
        >
          <BiAward />
          {item}
        </section>
      ))}
    </section>
  );
};

export default ChipsContainer;
