import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import styled from "styled-components";
import {
  TourInformation,
  TourGallery,
  // TourLocations,
  TourPlan,
  TourReviews,
  TourPricing
} from "../components/Tour/index";
import Helmet from "react-helmet";
// import BackgroundImage from "gatsby-background-image";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Container } from "styled-container-component";
import { HTMLContent } from "../components/Content";
import { CheckCircle } from "styled-icons/boxicons-regular/CheckCircle";
// import scrollTo from "gatsby-plugin-smoothscroll";
import { Waypoint } from "react-waypoint";
import ScrollableAnchor, {
  goToAnchor,
  configureAnchors
} from "react-scrollable-anchor";
import { Clock } from "styled-icons/fa-solid/Clock";
import { Mountain } from "styled-icons/fa-solid/Mountain";
import { Road } from "styled-icons/fa-solid/Road";
import { Tag } from "styled-icons/fa-solid/Tag";

import "./tour-gen.scss";

// import { CancelCircle } from "styled-icons/icomoon/CancelCircle";

// import { Youtube } from "styled-icons/boxicons-regular/CheckCircle";

// import Box from "@material-ui/core/Box";
// import { UserCheck } from "styled-icons/icomoon";
configureAnchors({ offset: -140, scrollDuration: 200 });

const StyledPaper = styled(Paper)`
  border-radius: 0;

  &.sticky {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 9999;
    width: 100%;
  }
`;
const StyledContainer = styled(Container)`
  display: block;
  margin: 50px auto;
  margin-top: 0;
  padding: 15px;
`;

// const StyledBackgroundImage = styled(BackgroundImage)`
//   min-height: 300px;
// `;

function TabPanel({ children, value, index, ...other }) {
  // const  = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function TourGen({ data }) {
  const tour = { ...data.tour, ...data.tour.frontmatter };
  const { settings } = data;
  const [value, setValue] = React.useState(0);
  const [stickyNav, setNavState] = React.useState(false);

  const anchors = [
    "information",
    "tour-plan",
    "gallery",
    /*"reviews",*/ "pricing",
    "the-fine-print"
  ];

  function handleChange(_, newValue) {
    setValue(newValue);
    goToAnchor(anchors[newValue]);
  }

  function _handleWaypointEnter(_, newValue) {
    setNavState(false);
  }

  function _handleWaypointLeave(_, newValue) {
    setNavState(true);
  }

  const difficultyText = [
    "Easy",
    "Easy to moderate",
    "Moderate",
    "Moderate to hard",
    "Hard"
  ];
  // const difficultyText = ["Fácil", "Fácil a moderado", "Moderado", "Moderade a dificil"];

  return (
    <Layout
      language={tour.language}
      meta={tour.meta || false}
      title={tour.title || false}
      feature={tour.feature}
    >
      {tour && tour.duration && tour.distance && tour.difficulty && (
        <div className="container specs">
          <div className="row">
            {tour.frontmatter.duration && (
              <div className="col text-center">
                <Clock size="24" />
                <span>{` ${tour.duration} ${tour.durationUnit}`}</span>
              </div>
            )}
            {tour.difficulty && (
              <div className="col text-center">
                <Mountain size="24" />
                <span alt="Difficulty">{` ${tour.difficulty}/5`}</span>
                <span>{`  ` + difficultyText[tour.difficulty]}</span>
              </div>
            )}
            {tour.distance && (
              <div className="col text-center">
                <Road size="24" />
                <span>{` ${tour.distance} ${tour.distanceUnit}`}</span>
              </div>
            )}
          </div>
        </div>
      )}
      <Waypoint onEnter={_handleWaypointEnter} onLeave={_handleWaypointLeave} />
      <div className="container">
        <StyledPaper className={stickyNav ? "sticky" : ""}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Information" {...a11yProps(0)} />
            {tour.itinerary && <Tab label="Tour Plan" {...a11yProps(1)} />}
            {tour.gallery && <Tab label="Gallery" {...a11yProps(2)} />}
            {/* <Tab label="Reviews" {...a11yProps(3)} /> */}
            {tour.pricing && tour.pricing.length > 0 && (
              <Tab label="Pricing" {...a11yProps(4)} />
            )}

            <Tab label="The fine print" {...a11yProps(5)} />
          </Tabs>
        </StyledPaper>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <ScrollableAnchor id={"information"}>
              <HTMLContent className="container" content={tour.html} />
            </ScrollableAnchor>
          </div>
          <div className="col-3 tour-booking-overlay">
            <div className="tour-booking">
              <div className="tour-booking-header-price-wrap">
                <div className="tour-booking-header-price-overlay"></div>
                {tour && tour.pricing && tour.pricing.length > 0 && (
                  <div className="tour-booking-tour-price-wrap tour-booking-discount">
                    <span className="tour-booking-tour-price">
                      <span className="tour-booking-head">
                        <Tag size={24} className="price" />
                        From{" "}
                      </span>
                      <span
                        className={
                          tour.pricing[0] &&
                          tour.pricing[0].discount &&
                          tour.pricing[0].discount > 0
                            ? "tour-booking-tail hasDiscount"
                            : "tour-booking-tail"
                        }
                      >
                        {tour.pricing[0].price} €
                      </span>
                    </span>
                    {tour.pricing[0].discount > 0 && (
                      <span className="tour-booking-tour-discount-price">
                        {tour.pricing[0].discount} €
                      </span>
                    )}
                    <span
                      className="fa fa-info-circle tour-booking-tour-price-info"
                      data-rel="tipsy"
                      original-title="The initial price based on 1 adult with the lowest price in low season"
                    ></span>
                  </div>
                )}
              </div>
              <div className="tour-booking-form">
                <form
                  action="https://airform.io/info@topbiketoursportugal.com"
                  method="post"
                  className="tour-booking-enquiry-form tour-booking-form-field tour-booking-with-border"
                  id="tour-booking-enquiry-form"
                >
                  <input
                    type="hidden"
                    name="product-code"
                    value={tour.productcode}
                  />

                  <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
                    <div className="tour-booking-head">
                      Full Name<span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <input type="text" name="full-name" required />
                    </div>
                  </div>

                  <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
                    <div className="tour-booking-head">
                      Country <span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <input type="text" name="country" required />
                    </div>
                  </div>
                  <div className="tour-booking-enquiry-field tour-booking-enquiry-field-email-address tour-booking-type-email">
                    <div className="tour-booking-head">
                      Email Address<span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <input type="email" name="email-address" required />
                    </div>
                  </div>
                  <div className="tour-booking-enquiry-field tour-booking-enquiry-field-full-name tour-booking-type-text">
                    <div className="tour-booking-head">Phone</div>
                    <div className="tour-booking-tail">
                      <input type="text" name="phone" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="tour-booking-head">Tour Type</div>
                    <div className="tour-booking-tail">
                      <div className="tour-booking-combobox-wrap">
                        <select
                          name="package"
                          data-required=""
                          className="form-control"
                        >
                          <option value="" selected="">
                            -
                          </option>
                          <option value="Guided">Guided</option>
                          <option value="Unguided">Unguided</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tour-booking-enquiry-field tour-booking-enquiry-field-travel-date tour-booking-type-datepicker">
                    <div className="tour-booking-head">
                      Travel Date<span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <input
                        type="text"
                        className="tour-booking-datepicker hasDatepicker"
                        name="travel-date"
                        value=""
                        id="dp1573393342902"
                      />
                      <i className="fa fa-calendar"></i>
                    </div>
                  </div> */}
                  <div className="form-group">
                    <div className="tour-booking-head">Person</div>
                    <div className="tour-booking-tail">
                      <div className="tour-booking-combobox-wrap">
                        <select
                          name="person"
                          data-required=""
                          className="form-control"
                        >
                          <option value="" selected="">
                            -
                          </option>
                          <option value="1-4">1-4</option>
                          <option value="5-9">5-9</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="tour-booking-enquiry-field tour-booking-enquiry-field-your-enquiry tour-booking-type-textarea">
                    <div className="tour-booking-head">
                      Your Enquiry<span className="tour-booking-req">*</span>
                    </div>
                    <div className="tour-booking-tail">
                      <textarea name="your-enquiry" required></textarea>
                    </div>
                  </div>
                  {/* <div className="tour-booking-enquiry-term">
                    <input
                      type="checkbox"
                      name="tour-booking-require-acceptance"
                    />
                    * Creating an account means you're okay with our{" "}
                    <a href="#" target="_blank">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" target="_blank">
                      Privacy Statement
                    </a>
                    .
                    <div className="tour-booking-enquiry-term-message tour-booking-enquiry-form-message tour-booking-failed">
                      Please agree to all the terms and conditions before
                      proceeding to the next step
                    </div>
                  </div> */}
                  <div className="tour-booking-enquiry-form-message"></div>
                  <input type="hidden" name="tour-id" value="4646" />
                  <input
                    type="submit"
                    className="btn btn-primary tour-booking-button"
                    value="Submit Enquiry"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {tour.itinerary && (
              <ScrollableAnchor id={"tour-plan"}>
                <div className="container">
                  <TourPlan tour={tour} {...settings}></TourPlan>
                </div>
              </ScrollableAnchor>
            )}
            {tour.pricing && (
              <ScrollableAnchor id={"pricing"}>
                <div className="container">
                  <TourPricing tour={tour}></TourPricing>
                </div>
              </ScrollableAnchor>
            )}

            {/* <TourReviews tour={tour}></TourReviews> */}

            {tour.gallery && (
              <ScrollableAnchor id={"gallery"}>
                <div className="container">
                  <TourGallery tour={tour} />
                </div>
              </ScrollableAnchor>
            )}

            <ScrollableAnchor id={"the-fine-print"}>
              <div className="container">fine print</div>
            </ScrollableAnchor>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TourGen;

export const tourGenQuery = graphql`
  query TourGenByID($id: String!) {
    settings: settingsYaml {
      googleApiKey
      googleTrackingId
      location {
        lat
        lng
      }
    }
    tour: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Itinerary
      ...TourSkill
      ...TourPricing
      ...FeatureImage
      html
      frontmatter {
        title
        subtitle
        description
        slug
        difficulty
        distance
        duration
        productcode
        distanceUnit
        durationUnit
        groupSizeMax
        groupSizeMin
        highlight
        path
        physicality
        skillLevel
        tags
        templateKey
        gallery {
          alt
          image {
            childImageSharp {
              fluid(quality: 60, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
