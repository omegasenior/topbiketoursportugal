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
configureAnchors({ offset: -140, scrollDuration: 200 });
// import { CancelCircle } from "styled-icons/icomoon/CancelCircle";

// import { Youtube } from "styled-icons/boxicons-regular/CheckCircle";

// import Box from "@material-ui/core/Box";
// import { UserCheck } from "styled-icons/icomoon";

const StyledPaper = styled(Paper)`
  border-radius: 0;

  &.sticky {
    position: fixed;
    top: 101px;
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
    /*"reviews",*/ "pricing"
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

  return (
    <Layout
      language={tour.language}
      meta={tour.meta || false}
      title={tour.title || false}
      feature={tour.feature}
    >
      <Waypoint onEnter={_handleWaypointEnter} onLeave={_handleWaypointLeave} />
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
        </Tabs>
      </StyledPaper>

      <ScrollableAnchor id={"information"}>
        <HTMLContent className="container" content={tour.html} />
      </ScrollableAnchor>

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
        <div className="container"></div>
      </ScrollableAnchor>
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
        pricing {
          discount
          en {
            package
            packageContents {
              icon
              title
              value
            }
          }
          highSeasonPriceSupplement
          price
          type
        }
      }
    }
  }
`;
