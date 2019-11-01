import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { graphql, Link, navigate } from "gatsby";
import Layout from "../layout/Layout";
import Rating from "../components/Rating";
import { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Col, Row, Container } from "@bootstrap-styled/v4";
import { Time } from "styled-icons/boxicons-regular/Time";
import { Mountain } from "styled-icons/fa-solid/Mountain";
import { Road } from "styled-icons/fa-solid/Road";
// import { display } from "@material-ui/system";
// import { CenterFocusStrong } from "styled-icons/material";
import "./city-tours.scss";
/*https://www.gatsbyjs.org/docs/adding-pagination*/

export const TourTemplate = ({
  image,
  path,
  title,
  price,
  discount,
  rating,
  html,
  excerpt
}) => (
  <div
    className="row tour"
    onClick={event => {
      event.preventDefault();
      navigate(path);
    }}
  >
    <div className="col-12 col-sm-4 no-gutter tourImageContainer">
      <Img fluid={image.childImageSharp.fluid} />
    </div>
    <div className="col-12 col-sm-8 tourBody">
      <div className="row h-100">
        <div className="col-8">
          <h2>{title}</h2>
          <HTMLContent content={excerpt} />
        </div>
        <div className="col-4 priceContainer text-center">
          {price && (
            <>
              <div>From</div>
              <div className="priceDiscount">{discount}</div>
              <div className="price">€ {price}</div>
              <Rating
                style={{ color: "#fa7500" }}
                value={rating}
                total={5}
                size={16}
              />
            </>
          )}
          <div className="action">
            <Link to={path} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ToursListTemplate = ({ tours }) => (
  <>
    {tours &&
      tours.map((tour, index) => (
        <TourTemplate key={`t` + index} {...tour} {...tour.frontmatter} />
      ))}
  </>
);

export const CityToursTemplate = ({ tours, body, afterList }) => (
  <section className="tourList">
    <HTMLContent className="row" content={body} />
    <ToursListTemplate tours={tours} />
    {afterList && <HTMLContent content={afterList} />}
  </section>
);

export const CityToursPage = ({ data }) => {
  const { page, tours } = data;

  // console.log(JSON.stringify(data.page.frontmatter.meta));
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      feature={page.frontmatter.feature}
    >
      <CityToursTemplate
        tours={tours.nodes}
        body={page.html}
        {...page.frontmatter}
      />
    </Layout>
  );
};

CityToursPage.propTypes = {
  data: PropTypes.any
};

export default CityToursPage;

export const pageQuery = graphql`
  query CityToursPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage
      html
      frontmatter {
        title
        templateKey
        language
        subtitle
        afterList
        featuredImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    tours: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/.+/tours/.+/" }
        frontmatter: { packagetype: { eq: "SingleTour" } }
      }
    ) {
      nodes {
        ...Meta
        ...Itinerary
        ...TourSkill
        ...TourPricing
        frontmatter {
          templateKey
          key
          title
          path
          subtitle
          description
          code
          packagetype
          tourtype
          tourcategory
          tags
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          lang
          language
          langKey
          languagePages {
            language
            path
          }
          rating
          ratingCount
          ratingLink
          slug
        }
        html
        excerpt(truncate: true, pruneLength: 100)
      }
    }
  }
`;
