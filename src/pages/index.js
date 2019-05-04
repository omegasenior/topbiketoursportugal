import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Scroll from '../components/Scroll';
import Tourhighlights from '../components/Tourhighlights';
import ReviewsHighlights from '../components/ReviewsHighlights';
import Partners from '../components/Partners';
import { ChevronCircleDown } from 'styled-icons/fa-solid/ChevronCircleDown';
import styled from "styled-components"
import { Container } from 'styled-container-component'

// 

// const StyledChevronCircleDown = styled(ChevronCircleDown)`
//   width: 30px;
// `

const ScrollButtonContainer = styled.div`
    margin-top: -100px;
    width: 100%;
    text-align: center;
    z-index: 999;
    color: #fff;
    position: absolute;
`

const ScrollButton = styled.button`
    width: 70px;
    border: none;
    background-color:transparent;
    transition: all 100ms linear 100ms; 
    display: block;
    margin:20px auto;
    &:focus{
      border: none;
      outline: none;
    }
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
      animation:none;
    }
`

const AnimatedScrollButton = styled(ScrollButton)`
    color: #fff;
    animation: bounce 2s infinite;
`

const Home = styled(Container)`
    display:block;
    margin: 50px auto ;
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Scroll type="class" element="home" offset={-100}>
          <ScrollButtonContainer>
            <AnimatedScrollButton aria-label="Go to tourhighlights" role="navigation">
              <ChevronCircleDown />
            </AnimatedScrollButton>
          </ScrollButtonContainer>  
        </Scroll>
        <Home className="home">
        <h2>Why Choose Us</h2>
        <p>Visit all around Portugal in a bicycle with our expertise guides.</p>
        <p>Our mission is to provide a relaxing bike tour, full of fun and knowledge. Historical points will be explained, good food and gastronomy challenges are some of the highlights of our trips.</p>
        <p>The cycling tours we offer are designed for recreational cyclists and we use mostly touring bicycles. Road bikes are also available  for harder challenges.</p>
        <p>The packages are offered in self guided or guided bike tours. Mechanical assistance will be always guaranteed, and the luggage will be transported every day of your week tour. Van support is mostly offered in guided bike tours where you can find water and snacks.</p>
        <p>Safety is our priority and we will be always near to help.</p>
        <p>We choose the best restaurants and hotels for your needs. Lunch and dinner when not included in our guided packages will also be organized for your group.</p>
        <p>Our store is in Porto city where we also do city bike tours. Although our base is in the North of Portugal we operate in all around the country.</p>
        </Home>

        <Scroll type="class" element="tourHighlights" offset={-95}>
            <ScrollButton aria-label="Go to tourhighlights" role="navigation">
              <ChevronCircleDown />
            </ScrollButton>
        </Scroll>
        
        <Tourhighlights className="tourHighlights" />

<Container>


Here are reasons you should plan trip with us


Handpicked Hotels
Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa



World Class Service
Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa



Best Price Guarantee
Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
</Container>

        {/* <Scroll type="class" element="home" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
        {/* <Scroll type="class" element="comments" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
        <ReviewsHighlights className="reviewsHighlights" />
        <Partners className="partners" />
       
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date] },
            filter: {frontmatter: {templateKey: {eq: "blog-post" } }}
    ) {
          edges {
        node {
          excerpt(pruneLength: 400)
        id
          fields {
          slug
        }
        frontmatter {
          title
            templateKey
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
}
`
