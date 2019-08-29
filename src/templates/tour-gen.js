import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import {
  TourInformation,
  TourGallery,
  TourLocations,
  TourPlan,
  TourReviews
} from "../components/Tour/index";
import Helmet from "react-helmet";
import BackgroundImage from "gatsby-background-image";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Container } from "styled-container-component";
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

const StyledBackgroundImage = styled(BackgroundImage)`
  min-height: 300px;
`;

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
  const { tour } = data;
  const [value, setValue] = React.useState(0);

  function handleChange(_, newValue) {
    setValue(newValue);
  }

  return (
    <Layout>
      <Helmet titleTemplate={`%s | ${tour.title}`}>
        <title>{tour.title}</title>
        <meta name="description" content={tour.description} />
      </Helmet>
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
          {/* <Tab label="Locations" {...a11yProps(4)} /> */}
        </Tabs>
      </StyledPaper>
      <StyledContainer fluid>
        <TabPanel value={value} index={0}>
          <TourInformation tour={tour}></TourInformation>
        </TabPanel>
        <TabPanel value={value} index={1} tour={tour}>
          <TourPlan tour={tour}></TourPlan>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TourGallery tour={tour}>1</TourGallery>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TourReviews tour={tour}></TourReviews>
        </TabPanel>
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
    tour: tourJson(id: { eq: $id }) {
      title
      subTitle
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
      itinerary {
        day
        description
        title
      }
      path
      physicality
      skillLevel
      tags
      templateKey
      gallery {
        name
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
`;
