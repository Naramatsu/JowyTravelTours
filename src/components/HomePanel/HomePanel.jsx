import React from "react";
import Grid from "../../layout/Grid";
import TableHeader from "../TableHeader";
import { btnSearch, hospedajeForm } from "./data";
import "./HomePanel.style.scss";

const classNamePrefixComponent = "home__panel";

const HomePanel = ({ languaje }) => (
  <section className={`${classNamePrefixComponent}`}>
    <TableHeader />
    <section className={`${classNamePrefixComponent}__container`}>
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
      <section className={`${classNamePrefixComponent}__button`}>
        <button>
          {btnSearch.icon}
          {btnSearch[languaje].label}
        </button>
      </section>
    </section>
  </section>
);

export default HomePanel;
