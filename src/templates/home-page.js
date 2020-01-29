import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HTMLContent } from "../components/Content";
import Layout from "../layout/LayoutBootstrap";
import Scroll from "../components/Scroll";
import Tourhighlights from "../components/Tourhighlights/index";
import ReviewsHighlights from "../components/ReviewsHighlights";
// import Partners from "../components/Partners";
import { ChevronCircleDown } from "styled-icons/fa-solid/ChevronCircleDown";
import "./home-page.mod.scss";

export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  toursection,
  language
}) => {
  // const PageContent = contentComponent || Content;

  return (
    <>
      <Scroll type="class" element="home" offset={-100}>
        <div className="scrollButtonContainer">
          <button
            className="scrollButton animatedScrollButton"
            aria-label="Go to tourhighlights"
            role="navigation"
            resource="scroll.nav.gototourhighlights"
          >
            <ChevronCircleDown />
          </button>
        </div>
      </Scroll>
      <div className="container">
        <HTMLContent className="home" content={content} />
      </div>
      <Scroll type="class" element="tourHighlights" offset={-95}>
        <button
          className="scrollButton"
          aria-label="Go to tourhighlights"
          role="navigation"
        >
          <ChevronCircleDown />
        </button>
      </Scroll>

      <Tourhighlights
        language={language}
        className="tourHighlights"
        {...toursection}
      />

      {/* <Scroll type="class" element="home" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
      {/* <Scroll type="class" element="comments" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
      <ReviewsHighlights className="reviewsHighlights" />
      {/* <Partners className="partners" /> */}
    </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  toursection: PropTypes.any,
  language: PropTypes.string
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;
  const language = post.frontmatter.language || `en`;
  return (
    <Layout language={language} meta={post.frontmatter.meta || false}>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        toursection={post.frontmatter.toursection}
        language={language}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        language
        meta {
          title
          description
        }
        toursection {
          description
          descriptionafter
          heading
        }
      }
    }
  }
`;
