const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allTourJson {
        edges {
          node {
            id
            path
            templateKey
          }
        }
      }
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const tours = result.data.allTourJson.edges;

    tours.forEach(edge => {
      const {
        node: { templateKey, path: uri, id }
      } = edge;
      createPage({
        path: uri,
        component: path.resolve(`src/templates/${String(templateKey)}.js`),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.frontmatter.path || edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images
  // console.log(node.internal.type);
  // if (node.internal.type === `json`) {
  //   const value2 = createFilePath({ node, getNode });
  // }
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type BannersJsonBanners implements node{
//       image: File
//     }
//   `;
//   createTypes(typeDefs);
// };
// exports.sourceNodes = ({actions}) => {
//   const {createTypes} = actions
//   const typeDefs = `

//   type Banner implements Node {
//     image: File
//   }

//   type BannersJson implements Node {
//     banners: [Banner]
//   }
//   `
//   createTypes(typeDefs)
// }

// function createTourPages(tours, createPage) {
//   tours.forEach(edge => {
//     edge.node.tours.forEach(tour => {
//       const id = edge.node.id;
//       // const id = tour.Id;
//       createPage({
//         path: tour.path || tour.slug,
//         component: path.resolve(`src/templates/${String(tour.TemplateKey)}.js`),
//         // additional data can be passed via context
//         context: {
//           id,
//           ...tour
//         }
//       });
//     });
//   });
// }
