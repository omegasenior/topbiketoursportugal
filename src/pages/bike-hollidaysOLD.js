import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Rating from "../components/Rating";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Time } from "styled-icons/boxicons-regular/Time";
import { User } from "styled-icons/boxicons-solid/User";
import { Group } from "styled-icons/typicons/Group";
import { Mountain } from "styled-icons/fa-solid/Mountain";
import { Road } from "styled-icons/fa-solid/Road";
// import { display } from "@material-ui/system";
// import { CenterFocusStrong } from "styled-icons/material";

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const StyledContainer = styled(Container)`
  justify-content: space-around;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 50px;
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
  box-shadow: 0px 0px 25px rgba(10, 10, 10, 0.08);
  background: #fff;
  margin-bottom: 30px;

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

const Label = styled.span`
  color: #aaa;
  margin-left: 28px;
`;

//https://www.gatsbyjs.org/docs/adding-pagination/
function ToursListPage2({ data }) {
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
              <Column xs={1} sm={4} md={3} my={10}>
                <Tour key={tour.id}>
                  <TourImageContainer>
                    <Img fluid={tour.image.src.childImageSharp.fluid} />
                  </TourImageContainer>
                  <div style={{ padding: "25px" }}>
                    <h2 style={{ margin: "0", fontSize: "1rem" }}>
                      {tour.title}
                    </h2>
                    <Row>
                      <Column xs={6} md={6} p={0}>
                        <Time size="24" />
                        <span>{` ${tour.duration} ${tour.durationUnit}`}</span>
                        <br />
                        {/* <Label>Duration</Label> */}
                      </Column>
                      {/* <Column xs={6} md={6} p={0}>
                          <User size="24" /> <span>{tour.minAge}</span>
                          <br />
                          <Label>Age</Label>
                        </Column> */}
                      {/* <Column xs={6} md={6} p={0}>
                          <Group size="24" />
                          <span>
                            {` ${tour.groupSizeMin}-${tour.groupSizeMax}`}
                          </span>
                          <br />
                          <Label>Group size</Label>
                        </Column> */}
                      <Column xs={6} md={6} p={0}>
                        <Mountain size="24" />
                        <span alt="Difficulty"> {tour.difficulty}/10</span>
                        {/* <br /> */}
                        {/* <Label>Difficulty</Label> */}
                      </Column>
                      {/* <Column xs={6} md={6} p={0}>
                          <Mountain size="24" />
                          <span> {tour.physicality}/10</span>
                          <br />
                          <Label>Physicality</Label>
                        </Column> */}
                      <Column xs={6} md={6} p={0}>
                        <Road size="24" />
                        <span>{` ${tour.distance} ${tour.distanceUnit}`}</span>
                        {/* <br /> */}
                        {/* <Label>Distance</Label> */}
                      </Column>
                    </Row>
                    <Row>
                      <Column xs={1} sm={6}>
                        <Rating value={tour.rating} total={5} size={24} />
                        {` (${tour.ratingCount} reviews)`}
                      </Column>
                      <Column xs={1} sm={6}>
                        {tour.discountPrice && (
                          <>
                            <span style={{ textTransform: "line-through" }}>
                              {tour.discountPrice}€
                            </span>
                            <br />
                          </>
                        )}
                        <span>{tour.price}€</span>
                      </Column>
                    </Row>
                  </div>
                </Tour>
              </Column>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

ToursListPage2.propTypes = {
  data: PropTypes.any
};

export default ToursListPage2;

export const pageQuery = graphql`
  query Tours2Query {
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

// # {
//   #   childImageSharp {
//   #     fluid(maxWidth: 980) {
//   #       ...GatsbyImageSharpFluid
//   #     }
//   #   }
//   # }
