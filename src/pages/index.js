import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Scroll from '../components/Scroll';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Banner></Banner>
       <Scroll type="class" element="tourHighlights" offset={-100}>
          <button>Click me</button>
       </Scroll>
       <div className="tourHighlights">Tours destaque<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
       <Scroll type="class" element="home" offset={-100}>
          <button>Click me</button>
       </Scroll>
       <div className="home">Home Body MD<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
       <Scroll type="class" element="comments" offset={-100}>
          <button>Click me</button>
       </Scroll>
       <div className="comments">Widget comments<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
       <Scroll>
          <button>Click me</button>
       </Scroll>
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
