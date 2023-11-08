import React, { useContext } from "react";
import Grid from "../../layout/Grid";
import TableHeader from "../TableHeader";
import { btnSearch, hospedajeForm } from "./data";
import { PreferencesAppContext } from "../../context/Preferences";
import "./HomePanel.style.scss";

const HomePanel = () => {
  const { languaje } = useContext(PreferencesAppContext);
  return (
    <section className="home__panel">
      <TableHeader />
      <section className="home__panel__container">
        <Grid columns={2}>
          {hospedajeForm[languaje].map(({ label, name, icon }, index) => (
            <section className="input__control" key={index}>
              <label>{label}</label>
              <section className="input__control__field">
                <input name={name} placeholder={label} />
                {icon}
              </section>
            </section>
          ))}
        </Grid>
        <section className="home__panel__button">
          <button>
            {btnSearch.icon}
            {btnSearch[languaje].label}
          </button>
        </section>
      </section>
    </section>
  );
};

export default HomePanel;
