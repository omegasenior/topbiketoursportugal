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

export const ToursListTemplate = ({ tours }) => (
  <>
    {tours &&
      tours.map(tour => (
        <div
          key={tour.id}
          className="row tour"
          onClick={event => {
            event.preventDefault();
            navigate(tour.path);
          }}
        >
          <div className="col-12 col-sm-4 no-gutter">
            <Img fluid={tour.image.src.childImageSharp.fluid} />
          </div>
          <div className="col-12 col-sm-8 tourBody">
            <div className="row h-100">
              <div className="col-8">
                <h2>{tour.title}</h2>
              </div>
              <div className="col-4 priceContainer text-center">
                {tour.price && (
                  <>
                    <div>From</div>
                    <div className="priceDiscount">{tour.discount}</div>
                    <div className="price">€ {tour.price}</div>
                    <Rating
                      style={{ color: "#fa7500" }}
                      value={tour.rating}
                      total={5}
                      size={16}
                    />
                  </>
                )}
                <div className="action">
                  <Link to={tour.path} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  // console.log(JSON.stringify(data.page.frontmatter.meta));
  return (
    <Layout
      language={data.page.frontmatter.language}
      meta={data.page.frontmatter.meta || false}
    >
      <Helmet titleTemplate="%s | `City tours hollidays`">
        <title>{data.page.frontmatter.meta.title}</title>
        <meta
          name="description"
          content={data.page.frontmatter.meta.description}
        />
        <meta name="keywords" content={data.page.frontmatter.meta.keywords} />
      </Helmet>
      <CityToursTemplate
        tours={data.allTourJson.nodes}
        body={data.page.html}
        {...data.page.frontmatter}
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
    allTourJson {
      nodes {
        id
        title
        subTitle
        description
        slug
        difficulty
        distance
        duration
        minAge
        language
        image {
          name
          src {
            childImageSharp {
              fluid(quality: 60, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        distanceUnit
        durationUnit
        groupSizeMax
        groupSizeMin
        highlight
        price
        discountPrice
        rating
        ratingCount
        ratingLink
        itinerary {
          day
          description
          title
        }
        path
        physicality
        skillLevel
        tags
      }
    }
  }
`;
