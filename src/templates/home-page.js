import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import Layout from "../components/LayoutHome";
import Scroll from "../components/Scroll";
import Tourhighlights from "../components/Tourhighlights/index";
import ReviewsHighlights from "../components/ReviewsHighlights";
import Partners from "../components/Partners";
import { ChevronCircleDown } from "styled-icons/fa-solid/ChevronCircleDown";
import { Container } from "styled-container-component";

const ScrollButtonContainer = styled.div`
  margin-top: -100px;
  width: 100%;
  text-align: center;
  z-index: 999;
  color: #fff;
  position: absolute;
`;

const ScrollButton = styled.button`
  width: 70px;
  border: none;
  background-color: transparent;
  transition: all 100ms linear 100ms;
  display: block;
  margin: 20px auto;

  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    cursor: pointer;
    transform: scale3d(1.1);
    animation: none;
  }
`;

const AnimatedScrollButton = styled(ScrollButton)`
  color: #fff;
  animation: bounce 2s infinite;
`;

const Home = styled(Container)`
  display: block;
  margin: 50px auto;
  margin-top: 0;
  padding: 15px;
`;

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Scroll type="class" element="home" offset={-100}>
        <ScrollButtonContainer>
          <AnimatedScrollButton
            aria-label="Go to tourhighlights"
            role="navigation"
            resource="scroll.nav.gototourhighlights"
          >
            <ChevronCircleDown />
          </AnimatedScrollButton>
        </ScrollButtonContainer>
      </Scroll>
      <Home
        className="home"
        dangerouslySetInnerHTML={{ __html: content }}
      ></Home>

      <Scroll type="class" element="tourHighlights" offset={-95}>
        <ScrollButton aria-label="Go to tourhighlights" role="navigation">
          <ChevronCircleDown />
        </ScrollButton>
      </Scroll>

      <Tourhighlights className="tourHighlights" />

      <Container>
        Here are reasons you should plan trip with us Handpicked Hotels Lorem
        ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula
        eget dolor. Aenean massa World Class Service Lorem ipsum dolor sit amet,
        consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
        Best Price Guarantee Lorem ipsum dolor sit amet, consect adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa
      </Container>

      {/* <Scroll type="class" element="home" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
      {/* <Scroll type="class" element="comments" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
      <ReviewsHighlights className="reviewsHighlights" />
      <Partners className="partners" />
    </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout language={post.frontmatter.language || `en`}>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`;
