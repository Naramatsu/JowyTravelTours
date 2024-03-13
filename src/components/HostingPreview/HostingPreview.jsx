import React, { useEffect, useState } from "react";
import Grid from "../../layout/Grid";
import { isActiveTab } from "../../utils";

const HostingPreview = ({ info, languaje }) => {
  const [actualRooms, setActualRooms] = useState(0);
  const { details, properties } = info;

  useEffect(() => {
    if (!actualRooms) setActualRooms(details.at(0).rooms.mount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailItems = () =>
    details.filter((item) => item.rooms.mount === actualRooms);

  return (
    <section>
      <section className="container__caption__main__info">
        {details.map((item, index) => (
          <section
            key={index}
            className={`rooms ${isActiveTab(actualRooms, item.rooms.mount)}`}
            onClick={() => setActualRooms(item.rooms.mount)}
          >
            {item.rooms.icon}
            {item.rooms.label}
          </section>
        ))}
      </section>
      <br />
      <section className="container__caption__main__info">
        {getDetailItems().map((item, index) => (
          <section key={index}>
            {item.outstanding.map(({ icon, label }, index2) => (
              <React.Fragment key={index2}>
                {icon}
                {label}
              </React.Fragment>
            ))}
          </section>
        ))}
      </section>
      <Grid
        columns={2}
        className="product__detail__container__caption__details"
      >
        {properties[languaje].map((property, index) => (
          <p key={index}>{property}</p>
        ))}
      </Grid>
    </section>
  );
};

export default HostingPreview;
