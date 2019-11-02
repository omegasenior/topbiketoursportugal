import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
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
import {HTMLContent} from "../components/Content"
import { CheckCircle } from "styled-icons/boxicons-regular/CheckCircle";
// import { CancelCircle } from "styled-icons/icomoon/CancelCircle";

// import { Youtube } from "styled-icons/boxicons-regular/CheckCircle";

// import Box from "@material-ui/core/Box";
// import { UserCheck } from "styled-icons/icomoon";

const StyledPaper = styled(Paper)`
  border-radius: 0;
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
  const [value, setValue] = React.useState(0);

  function handleChange(_, newValue) {
    setValue(newValue);
  }

  return (
    <Layout
      language={tour.language}
      meta={tour.meta || false}
      title={tour.title || false}
      feature={tour.feature}
    >
      <StyledPaper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Information" {...a11yProps(0)} />
          <Tab label="Tour Plan" {...a11yProps(1)} />
          <Tab label="Gallery" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
          <Tab label="Pricing" {...a11yProps(4)} />
          {/* <Tab label="Locations" {...a11yProps(4)} /> */}
        </Tabs>
      </StyledPaper>

      <HTMLContent className="container" content={tour.html} />

      <div className="container">
        <TourPlan tour={tour}></TourPlan>
      </div>
      <TourPricing tour={tour}></TourPricing>
      {/* <TourReviews tour={tour}></TourReviews> */}
      <TourGallery tour={tour}>1</TourGallery>
      <StyledContainer fluid>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1} tour={tour}></TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
        <TabPanel value={value} index={3}></TabPanel>
        <TabPanel value={value} index={4}></TabPanel>
        {/* <TabPanel value={value} index={4}>
          <TourLocations tour={tour}></TourLocations>
        </TabPanel> */}
      </StyledContainer>
    </Layout>
  );
}

export default TourGen;

export const tourGenQuery = graphql`
  query TourGenByID($id: String!) {
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
