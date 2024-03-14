import React, { useContext, useEffect } from "react";
import Container from "../../layout/Container";
import HostingPreview from "../../components/HostingPreview/HostingPreview";
import Grid from "../../layout/Grid";
import { FaAngleLeft } from "react-icons/fa6";
import { items } from "../../layout/HomeProducts/productsList.data";
import { SHIPS, TOURS, TRANSPORTS } from "../../utils/constants";
import { ourGallery, pageTitle, subTitle } from "./ProductDetails.data";
import { PreferencesAppContext } from "../../context/Preferences";
import { ROUTES } from "../../utils/routes";
import { useHistory } from "react-router-dom";
import "./ProductDetails.style.scss";

const ProductDetails = () => {
  const { languaje } = useContext(PreferencesAppContext);

  const componentClassNamePrefix = "product__detail";
  const history = useHistory();
  const route = history?.location?.search;
  const idRoute = route.replace("?id=", "");

  const product = items(languaje).find((item) => item.id === idRoute);
  if (!product.id) history.push(ROUTES.HOME);

  const { img, type } = product;
  const { name, mainDescription, description, gallery } = product.info;

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]} | ${name}`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productRender = () => {
    switch (type) {
      case TOURS[languaje]:
        return (
          <>
            <section className="container__caption__main__info">
              {product.info.outstanding.map(({ icon, label }, index) => (
                <section key={index}>
                  {icon}
                  {label}
                </section>
              ))}
            </section>
            <Grid
              columns={2}
              className="product__detail__container__caption__details"
            >
              {product.info.properties[languaje].map((property, index) => (
                <p key={index}>{property}</p>
              ))}
            </Grid>
          </>
        );
      case TRANSPORTS[languaje]:
      case SHIPS[languaje]:
        return (
          <>
            <section className="container__caption__main__info">
              {product.info.outstanding.map(({ icon, label }, index) => (
                <section key={index}>
                  {icon}
                  {label}
                </section>
              ))}
            </section>
            <Grid
              columns={2}
              className="product__detail__container__caption__details"
            >
              {product.info.properties[languaje].map((property, index) => (
                <p key={index}>{property}</p>
              ))}
            </Grid>
          </>
        );

      default:
        return <HostingPreview info={product?.info} languaje={languaje} />;
    }
  };

  return (
    <section className={componentClassNamePrefix}>
      <section className={`${componentClassNamePrefix}__banner`}>
        <img src={img} alt="banner" />
        <section className={`${componentClassNamePrefix}__banner__caption`}>
          <h1>{name}</h1>
          <h4>{subTitle[languaje]}</h4>
          <label className="goback" onClick={() => history.goBack()}>
            <FaAngleLeft />
            Go back
          </label>
        </section>
      </section>
      <Container
        width="70%"
        className={`${componentClassNamePrefix}__container`}
      >
        <section className={`${componentClassNamePrefix}__container__caption`}>
          <h3>{mainDescription[languaje]}</h3>
          <p>{description[languaje]}</p>
          {productRender(type)}
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
