import React from "react";
import Img from "gatsby-image";
import "./tourhighlights.mod.scss";
import { Col, Row, Container } from "@bootstrap-styled/v4";
import * as Style from "./Tourhighlights.styled";
// import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, navigate, graphql } from "gatsby";

const Tourhighlights = ({ tours }) => (
  <StaticQuery
    query={graphql`
      query featuredToursQuery {
        tours: allMarkdownRemark(
          filter: {
            frontmatter: {
              packagetype: { eq: "PackageTour" }
              featured: { eq: true }
            }
          }
        ) {
          nodes {
            id
            excerpt(truncate: true, pruneLength: 200)
            fields {
              slug
              localizedPath
            }
            frontmatter {
              title
              path
              image {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="tourHighlights">
        <h2 className="tourHeaderTitle">Popular Tours</h2>
        <p className="subtitle">
          We have a unique way of meeting your adventurous expectations!
        </p>
        <div className="container">
          <div className="row">
            {data &&
              data.tours &&
              data.tours.nodes &&
              data.tours.nodes.map((tour, index) => (
                <div
                  key={"featured" + tour.id}
                  className="col col-12 col-md-4"
                  onClick={event => {
                    event.preventDefault();
                    navigate(
                      tour.frontmatter.path ||
                        tour.fields.localizedPath ||
                        tour.fields.slug
                    );
                  }}
                >
                  <Style.Tour>
                    <Style.ToursImageContainer>
                      <Img
                        fluid={tour.frontmatter.image.childImageSharp.fluid}
                      />
                    </Style.ToursImageContainer>
                    <Style.TourTitle>{tour.frontmatter.title}</Style.TourTitle>
                    <Style.TourResume>{tour.excerpt}</Style.TourResume>
                  </Style.Tour>
                </div>
              ))}
          </div>
        </div>
      </div>
    )}
  ></StaticQuery>
);

export default Tourhighlights;
