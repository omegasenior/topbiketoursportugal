export const query = graphql`
  fragment FeatureImage on MarkdownRemark {
    frontmatter {
      feature {
        title
        textcolor
        align
        image {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
