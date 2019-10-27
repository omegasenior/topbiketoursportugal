import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import { Timeline } from "../components/Timeline";
import "./tour-calendar.scss";

export const TourCalendarTemplate = ({ title, description, ...other }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{description}</div>
    </>
  );
};

export const TourCalendarPage = ({ data: { tourCalendar } }) => {
  //   console.log(JSON.stringify(tourCalendar));
  return (
    <Layout
      meta={tourCalendar.frontmatter.meta || false}
      title={tourCalendar.frontmatter.title || false}
    >
      <div className="container tourCalendar">
        <TourCalendarTemplate {...tourCalendar.frontmatter} />
        <Timeline></Timeline>
      </div>
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
