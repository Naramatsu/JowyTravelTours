import React, { useContext, useEffect, useState } from "react";
import { activeTabInitialState, tableHeaders } from "./data";
import { PreferencesAppContext } from "../../context/Preferences";
import { isActiveTab } from "../../utils";
import "./TableHeader.style.scss";

const TableHeader = () => {
  const { languaje } = useContext(PreferencesAppContext);
  const [activeTab, setActiveTab] = useState(activeTabInitialState[languaje]);

  useEffect(() => {
    setActiveTab(activeTabInitialState[languaje]);
  }, [languaje]);

  return (
    <table cellPadding={0}>
      <thead className="table__header">
        <tr>
          {tableHeaders[languaje].map((tableHeader, index) => (
            <th
              key={index}
              className={isActiveTab(tableHeader, activeTab)}
              onClick={() => setActiveTab(tableHeader)}
            >
              {tableHeader}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default TableHeader;
