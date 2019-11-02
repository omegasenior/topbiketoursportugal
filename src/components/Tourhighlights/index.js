import React from "react";
import Img from "gatsby-image";
import { Col, Row, Container } from "@bootstrap-styled/v4";
import * as Style from "./Tourhighlights.styled";
// import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, navigate, graphql } from "gatsby";
import { HTMLContent } from "../Content";
import showdown from "showdown";
import "./tourhighlights.scss";

const Tourhighlights = ({ description, descriptionafter, heading }) => {
  const converter = new showdown.Converter();

  return (
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
          <HTMLContent
            className="container tourTitle"
            content={converter.makeHtml(heading)}
          />
          <HTMLContent
            className="container  subtitle"
            content={converter.makeHtml(description)}
          />
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
                      <Style.TourTitle>
                        {tour.frontmatter.title}
                      </Style.TourTitle>
                      <Style.TourResume>{tour.excerpt}</Style.TourResume>
                    </Style.Tour>
                  </div>
                ))}
            </div>
          </div>
          <HTMLContent
            className="container subtitle after"
            content={converter.makeHtml(descriptionafter)}
          />
        </div>
      )}
    ></StaticQuery>
  );
};

export default Tourhighlights;
