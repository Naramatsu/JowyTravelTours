import React, { useContext, useState, useEffect } from "react";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import { isActiveTab } from "../../utils";
import { items } from "../../layout/HomeProducts/productsList.data";
import { ourGallery, subTitle } from "./ProductDetails.data";
import { PreferencesAppContext } from "../../context/Preferences";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";
import "./ProductDetails.style.scss";

const ProductDetails = () => {
  const { languaje } = useContext(PreferencesAppContext);
  const [actualRooms, setActualRooms] = useState(0);
  const componentClassNamePrefix = "product__detail";

  const history = useHistory();
  const route = history?.location?.search;
  const idRoute = route.replace("?id=", "");

  const product = items(languaje).find((item) => item.id === idRoute);
  if (!product.id) history.push(ROUTES.HOME);

  const { img } = product;
  const { name, mainDescription, description, details, gallery, properties } =
    product.info;

  useEffect(() => {
    document.title = `Jowy Travel & Tours | Products | ${name}`;
    window.scrollTo(0, 0);
    if (!actualRooms) setActualRooms(details.at(0).rooms.mount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailItems = () =>
    details.filter((item) => item.rooms.mount === actualRooms);

  return (
    <section className={componentClassNamePrefix}>
      <section className={`${componentClassNamePrefix}__banner`}>
        <img src={img} alt="banner" />
        <section className={`${componentClassNamePrefix}__banner__caption`}>
          <h1>{name}</h1>
          <h4>{subTitle[languaje]}</h4>
        </section>
      </section>
      <Container
        width="70%"
        className={`${componentClassNamePrefix}__container`}
      >
        <section className={`${componentClassNamePrefix}__container__caption`}>
          <h3>{mainDescription[languaje]}</h3>
          <p>{description[languaje]}</p>
          <section
            className={`${componentClassNamePrefix}__container__caption__main__info`}
          >
            {details.map((item, index) => (
              <section
                key={index}
                className={`rooms ${isActiveTab(
                  actualRooms,
                  item.rooms.mount
                )}`}
                onClick={() => setActualRooms(item.rooms.mount)}
              >
                {item.rooms.icon}
                {item.rooms.label}
              </section>
            ))}
          </section>
          <br />
          <section
            className={`${componentClassNamePrefix}__container__caption__main__info`}
          >
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
      </Container>
      <section className="product__detail__gallery">
        <h4 className="title__color">{ourGallery[languaje]}</h4>
        <Grid columns={4} className="product__detail__gallery__container">
          {gallery.map((images, index) => (
            <img
              key={index}
              src={images.url}
              alt={`img-${index}`}
              style={{ ...images.span }}
            />
          ))}
        </Grid>
      </section>
    </section>
  );
};

export default ProductDetails;
