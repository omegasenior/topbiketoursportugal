import { graphql } from "gatsby";
export const query = graphql`
  fragment Gallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image {
          childImageSharp {
            fluid(quality: 60, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
