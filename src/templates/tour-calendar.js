import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TourCalendarTemplate = ({ title, description, ...other }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export const TourCalendarPage = ({ data: { tourCalendar } }) => {
  //   console.log(JSON.stringify(tourCalendar));
  return (
    <Layout
      meta={tourCalendar.frontmatter.meta || false}
      title={tourCalendar.frontmatter.title || false}
    >
      <TourCalendarTemplate {...tourCalendar.frontmatter} />
    </Layout>
  );
};

export default TourCalendarPage;

export const pageQuery = graphql`
  query TourCalendarPageByID($id: String!) {
    tourCalendar: markdownRemark(id: { eq: $id }) {
      ...Meta
      id
      frontmatter {
        title
        description
      }
    }
  }
`;
