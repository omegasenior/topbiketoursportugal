import React from "react";
import PropTypes from "prop-types";

const TourLocations = ({ tour: { title, subTitle, description } }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    <p>{description}</p>
  </div>
);

TourLocations.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    description: PropTypes.string
  })
};

export default TourLocations;
