import React from "react";
import PropTypes from "prop-types";
import "./tourInformation.scss";

const TourInformation = ({ tour: { title, subTitle, description } }) => (
  <div className="container">
    <div className="row tourInfo">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{description}</p>
    </div>
  </div>
);

TourInformation.propTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default TourInformation;
