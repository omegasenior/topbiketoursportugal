import React from "react";
import PropTypes from "prop-types";

const TourReviews = ({ tour: { title, subtitle, description } }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>{description}</p>
  </div>
);

TourReviews.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string
  })
};

export default TourReviews;
