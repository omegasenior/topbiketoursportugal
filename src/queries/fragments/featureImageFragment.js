import { graphql } from "gatsby";
export const query = graphql`
  fragment FeatureImage on MarkdownRemark {
    frontmatter {
      feature {
        title
        textcolor
        align
        bokunLink
        bokunLinkText
        image {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        imageAlign
      }
    }
  }
`;
