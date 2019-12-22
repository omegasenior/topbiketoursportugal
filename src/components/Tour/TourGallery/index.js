import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./tourgallery.scss";
//https://blog.usejournal.com/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
const TourGallery = ({ tour: { gallery } }) => (
  <div className="container">
    {gallery && <h2 className="row col-12">Gallery</h2>}
    <div className="row">
      {gallery &&
        gallery.map((item, index) => (
          <div className="col-xs-1 col-4 imgwrapper" key={`tg${index}`}>
            <Img
              key={item.image.childImageSharp.id}
              fluid={item.image.childImageSharp.fluid}
              alt={item.image.title}
            />
          </div>
        ))}
    </div>
  </div>
);

TourGallery.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.any,
        name: PropTypes.string
      })
    )
  })
};

export default TourGallery;
