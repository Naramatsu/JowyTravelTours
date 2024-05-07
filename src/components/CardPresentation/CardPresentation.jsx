import React from "react";
import notAvailable from "../../assets/NOT_AVAILABLE.png";
import { BsFillStarFill, BsGeoAlt } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { viewGalleryLabel } from "./CardPresentation.data";
import "./CardPresentation.style.scss";

const componentClassNamePrefix = "card__presentation";

const CardPresentation = ({
  id,
  img,
  name,
  location,
  price,
  rating,
  viewDetails,
  isAvailable = true,
  languaje,
}) => {
  const viewDetailsBuilder = () => {
    if (viewDetails)
      return (
        <Link
          to={{
            pathname: ROUTES.PRODUCTS,
            search: `id=${id}`,
          }}
          className={`${componentClassNamePrefix}__caption`}
        >
          <b>{name}</b>
          <p className="location">
            {location ? <BsGeoAlt /> : <br />}
            {location}
          </p>
          {price && (
            <label className={`${componentClassNamePrefix}__caption__price`}>
              ${price}
            </label>
          )}
          {viewDetails && (
            <p className={`${componentClassNamePrefix}__caption__price`}>
              {viewGalleryLabel[languaje]}
            </p>
          )}
        </Link>
      );
    return (
      <section className={`${componentClassNamePrefix}__caption`}>
        <b>{name}</b>
        <p className="location">
          {location ? <BsGeoAlt /> : <br />}
          {location}
        </p>
        {price && (
          <label className={`${componentClassNamePrefix}__caption__price`}>
            ${price}
          </label>
        )}
      </section>
    );
  };

  return (
    <section className={componentClassNamePrefix}>
      {rating && (
        <section className={`${componentClassNamePrefix}__rating`}>
          <BsFillStarFill />
          {rating}
        </section>
      )}
      {!isAvailable && (
        <img src={notAvailable} alt="not_available" className="not_available" />
      )}
      <img src={img} alt={name} />
      <section className="brightness" />
      {viewDetailsBuilder()}
      {/* <section className={`${componentClassNamePrefix}__caption`}>
        <b>{name}</b>
        <p>
          {location ? <BsGeoAlt /> : <br />}
          {location}
        </p>
        {price && (
          <label className={`${componentClassNamePrefix}__caption__price`}>
            ${price}
          </label>
        )}
        {viewDetails && (
          <Link
            to={{
              pathname: ROUTES.PRODUCTS,
              search: `id=${id}`,
            }}
            className={`${componentClassNamePrefix}__caption__price`}
          >
            {viewGalleryLabel[languaje]}
          </Link>
        )}
      </section> */}
    </section>
  );
};

export default CardPresentation;
