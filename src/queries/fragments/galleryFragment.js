import { graphql } from "gatsby";
export const query = graphql`
  fragment Gallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image
      }
    }
  }
`;
