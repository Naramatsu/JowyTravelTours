import React, { useContext, useState, useEffect } from "react";
import { BiAward } from "react-icons/bi";
import { isActiveTab } from "../../utils";
import { IoMdCloseCircle } from "react-icons/io";
import { PreferencesAppContext } from "../../context/Preferences";
import "./ChipsContainer.style.scss";

const ChipsContainer = ({
  chips,
  chipActive,
  onSelectChip,
  subChips,
  subChipActive,
  onSelectSubChip,
}) => {
  const { theme } = useContext(PreferencesAppContext);
  const [subProductList, setSubProductList] = useState([]);

  useEffect(() => {
    if (chipActive) setSubProductList(subChips[chipActive] || []);
  }, [chips, subChips, chipActive]);

  const isVisibleMainList = chipActive ? "visible" : "hidden";

  return (
    <section className={`chip__container ${theme} ${isVisibleMainList}`}>
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
      <section className="chip__sublist">
        {subProductList.map((subCip, index) => (
          <section
            key={index}
            className={`app__chip ${isActiveTab(subCip, subChipActive)}`}
            onClick={() => onSelectSubChip(subCip)}
          >
            <BiAward />
            {subCip}
          </section>
        ))}
        <section className={"app__chip close"} onClick={() => onSelectChip("")}>
          <IoMdCloseCircle />
        </section>
      </section>
    </section>
  );
};

export default ChipsContainer;
