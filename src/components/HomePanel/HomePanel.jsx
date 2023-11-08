import React from "react";
import Grid from "../../layout/Grid";
import TableHeader from "../TableHeader";
import { btnSearch, hospedajeForm } from "./data";
import "./HomePanel.style.scss";

const HomePanel = () => {
  return (
    <section className="home__panel">
      <TableHeader />
      <section className="home__panel__container">
        <Grid columns={2}>
          {hospedajeForm.map(({ label, name, icon }, index) => (
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
            {btnSearch.label}
          </button>
        </section>
      </section>
    </section>
  );
};

export default HomePanel;
