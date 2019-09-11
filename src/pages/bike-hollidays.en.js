import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Rating from "../components/Rating";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Time } from "styled-icons/boxicons-regular/Time";
import { Mountain } from "styled-icons/fa-solid/Mountain";
import { Road } from "styled-icons/fa-solid/Road";
// import { display } from "@material-ui/system";
// import { CenterFocusStrong } from "styled-icons/material";

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const TourLink = styled(Link)`
  &:active {
    text-decoration: none;
    color: #000;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &:link {
    text-decoration: none;
    color: #000;
  }
  &:active {
    text-decoration: none;
    color: #000;
  }
`;

const TourColumn = styled(Column)`
  padding-bottom: 30px;
`;

const TourImageContainer = styled.div`
  overflow: hidden;
  max-height: 200px;

  img {
    transition: opacity 500ms ease 0s, transform 500ms ease 0s !important;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

const Tour = styled.article`
  box-shadow: 0 0 10px rgb(220, 220, 220);
  background: #fff;
  height: 100%;

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

const TourTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 15px;
`;

const TourSpecificationContainer = styled.div`
  display: flex;
`;

const TourSpecification = styled.div`
  display: flex;
  flex: 0 0 33%;
  margin-bottom: 15px;

  span {
    color: #898686;
  }
  svg {
    color: #fa7500;
    margin-right: 5px;
  }
`;

const TourSpecPrice = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
`;

const TourPrice = styled.span`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  width: 100%;
  text-align: right;
`;

const TourDiscountPrice = styled.div`
  font-size: 1.5rem;
  text-decoration: line-through;
  text-align: right;
  color: #aaa;
`;

/*https://www.gatsbyjs.org/docs/adding-pagination*/
function ToursListPage({ data }) {
  const tours = data.allTourJson.nodes;
  return (
    <Layout>
      <Helmet titleTemplate="%s | `Bike hollidays`">
        <title>Bike hollidays</title>
        <meta name="description" content="Bike Hollidays" />
      </Helmet>

      <section>
        <SectionTitle>Our Tours</SectionTitle>
        <Container>
          <Row>
            {tours.map(tour => (
              <TourColumn xs={1} sm={4} md={3} my={10}>
                <TourLink to={tour.path}>
                  <Tour key={tour.id}>
                    <TourImageContainer>
                      <Img fluid={tour.image.src.childImageSharp.fluid} />
                    </TourImageContainer>
                    <div style={{ padding: "25px" }}>
                      <TourTitle>{tour.title}</TourTitle>
                      <TourSpecificationContainer>
                        <TourSpecification>
                          <Time size="24" />
                          <span>{` ${tour.duration} ${tour.durationUnit}`}</span>
                        </TourSpecification>
                        <TourSpecification>
                          <Mountain size="24" />
                          <span alt="Difficulty">{` ${tour.difficulty}/10`}</span>
                        </TourSpecification>
                        <TourSpecification>
                          <Road size="24" />
                          <span>{` ${tour.distance} ${tour.distanceUnit}`}</span>
                        </TourSpecification>
                      </TourSpecificationContainer>
                      {tour.price && tour.price > 0 && (
                        <TourSpecificationContainer>
                          <TourSpecPrice>
                            <Rating
                              style={{ color: "#fa7500" }}
                              value={tour.rating}
                              total={5}
                              size={24}
                            />
                            <span>{` (${tour.ratingCount} reviews)`}</span>
                          </TourSpecPrice>
                          <TourSpecPrice>
                            {(tour.discountPrice ||
                              tour.discountPrice >= tour.price) && (
                              <TourDiscountPrice>
                                {tour.discountPrice}€
                              </TourDiscountPrice>
                            )}
                            <TourPrice>{tour.price}€</TourPrice>
                          </TourSpecPrice>
                        </TourSpecificationContainer>
                      )}
                    </div>
                  </Tour>
                </TourLink>
              </TourColumn>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

ToursListPage.propTypes = {
  data: PropTypes.any
};

export default ToursListPage;

export const pageQuery = graphql`
  query ToursQuery {
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
        image {
          name
          src {
            childImageSharp {
              fluid(quality: 60, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
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
