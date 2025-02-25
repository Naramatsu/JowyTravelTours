import React, { useContext, useEffect, useState } from "react";
import Container from "../../layout/Container";
import Grid from "../../layout/Grid";
import ModalGallery from "../../components/ModalGallery";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  askFor,
  pageTitle,
  scheduleLabel,
  whatsAppMessage,
} from "./Products.data";
import { PreferencesAppContext } from "../../context/Preferences";
import { items } from "../../layout/HomeProducts/productsList.data";
import { ROUTES } from "../../utils/routes";
import { videoNotAllowedByBrowser, whatsAppLink } from "../../utils/constants";
import "./Products.style.scss";

const Products = () => {
  const [showModalGallery, setShowModalGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { languaje } = useContext(PreferencesAppContext);

  const history = useHistory();
  const route = history?.location?.search;
  const idRoute = route.replace("?id=", "");

  const product = items(languaje).find((item) => item.id === idRoute);
  if (!product.id) history.push(ROUTES.HOME);

  const { img, type } = product;
  const { name, mainDescription, description, gallery } = product.info;
  const schedule = product?.info?.schedule || null;
  const warnings = product?.info?.warnings || null;

  useEffect(() => {
    document.title = `Jowy Travel & Tours | ${pageTitle[languaje]} | ${name}`;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onShowModal = (indexItem) => {
    setGalleryIndex(indexItem);
    setShowModalGallery(true);
  };

  const onAskProduct = () => {
    const url = new URL(whatsAppLink);
    const message = `${whatsAppMessage[languaje]} 
    (${type} - ${name})
    ${product.id} - ${name}
    Link: ${window.location.href}`;
    url.searchParams.set("text", message);
    window.open(url.href, "_blank");
  };

  return (
    <section className="products">
      <Container width="70%" className="products-container">
        <Grid columns={2} className="products-wrapper">
          <img src={img} className="main-banner" alt="main-banner" />
          <article className="products-caption">
            <h1>{name}</h1>
            <h3>{mainDescription[languaje]}</h3>
            <p>{description[languaje]}</p>
            <Grid columns={2} className="products-outstanding">
              {product.info.properties[languaje].map((property, index) => (
                <p key={index}>{property}</p>
              ))}
            </Grid>
            {schedule && (
              <section className="schedule">
                <h4>{scheduleLabel[languaje]}</h4>
                <ul>
                  {schedule[languaje].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            {warnings && (
              <section className="warnings">
                <h4>{warnings[languaje].title}</h4>
                <ul>
                  {warnings[languaje].items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            <button className="btn-order" onClick={onAskProduct}>
              <FaWhatsapp />
              {askFor[languaje]} {type}
            </button>
            <Grid columns={4} className="products__gallery">
              {gallery.slice(0, 4).map((images, index) => {
                if (images.type === "video")
                  return (
                    <video
                      key={index}
                      src={images.url}
                      autoPlay
                      controls={false}
                      muted
                      loop={true}
                      onClick={() => onShowModal(index)}
                      alt={`video-${index}`}
                    >
                      {videoNotAllowedByBrowser[languaje]}
                    </video>
                  );
                return (
                  <img
                    key={index}
                    src={images.url}
                    alt={`img-${index}`}
                    onClick={() => onShowModal(index)}
                  />
                );
              })}
              {gallery.length > 4 && (
                <section className="gallery-compressed">
                  <p>+{gallery.length - 4}</p>
                </section>
              )}
            </Grid>
          </article>
        </Grid>
      </Container>
      {showModalGallery && (
        <ModalGallery
          show={showModalGallery}
          gallery={gallery}
          onClose={() => setShowModalGallery(false)}
          activeIndex={galleryIndex}
          languaje={languaje}
        />
      )}
    </section>
  );
};

export default Products;
