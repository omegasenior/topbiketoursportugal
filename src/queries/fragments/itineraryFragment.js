import { graphql } from "gatsby";
export const query = graphql`
  fragment Itinerary on MarkdownRemark {
    frontmatter {
      itinerary {
        day
        description
        location
        title
      }
    }
  }
`;
