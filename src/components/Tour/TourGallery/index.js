import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33%;

  .gatsby-image-wrapper {
    margin: 25px 10px 5px 10px;
  }

  @media only screen and (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
  }
`;

//https://blog.usejournal.com/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
const TourGallery = ({ tour: { gallery } }) => (
  <GalleryContainer>
    {gallery.map(item => (
      <ImageWrapper>
        <Img
          key={item.image.childImageSharp.id}
          fluid={item.image.childImageSharp.fluid}
        />
      </ImageWrapper>
    ))}
  </GalleryContainer>
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
