const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: "Top Bike Tours Portugal",
    siteUrl: "https://boring-kepler-5712ff.netlify.com/",
    description: `
    Top Bike Tours Portugal is a provider of holiday’s packages and routes, which offers an incredible holiday experience, entertainment and leisure activities based on quality and value.
    `,
    canonicalUrl: "https://www.topbiketoursportugal.com",
    image: "https://www.topbiketoursportugal.com/images/jason-lengstorf.jpg",
    author: {
      name: "Top Bike Tours Portugal",
      minibio: `
      Founded in 2013, Top Bike Tours Portugal formerly Fold n 'Visit is a very young company, with experience in pedestrian and cycling tours in Porto and long distance cycling routes to the north of the Iberian Peninsula. Our activities are coordinated by tourism professionals, with a huge knowledge of heritage and sports.
      `
    },
    organization: {
      name: "Top Bike Tours Portugal",
      url: "https://www.topbiketoursportugal.com",
      logo: "https://www.topbiketoursportugal.com/android-chrome-512x512.png"
    },
    social: {
      twitter: "https://twitter.com/FoldnVisit",
      fbAppID: "",
      youtube: "https://www.youtube.com/channel/UCqryPkh_snkIAqvDXFvaK7A",
      facebook: "https://www.facebook.com/topbiketoursportugal/",
      instagram: "https://www.instagram.com/topbiketoursportugal/",
      googleplus: "https://plus.google.com/u/0/112634467779546919402"
    },
    categories: [
      {
        slug: "acting-like-a-grown-up",
        name: "Acting Like a Grown-Up"
      },
      {
        slug: "finding-direction",
        name: "Finding Direction"
      },
      {
        slug: "happiness",
        name: "Building Happiness"
      },
      {
        slug: "motivation",
        name: "Staying Motivated"
      },
      {
        slug: "remote-productivity",
        name: "Remote Productivity"
      },
      {
        slug: "remote-work",
        name: "Living & Working Remotely"
      },
      {
        slug: "storytelling",
        name: "Storytelling"
      },
      {
        slug: "impact",
        name: "Creating an Impact"
      }
    ],
    icon: ""
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     /*id: 'GTM-add_your_tag_here',*/
    //     id: 'GTM-P4RNF8D',
    //     includeInDevelopment: false
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/","/admin"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "example.com",
    //   }
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "en",
    //     prefixDefault: false,
    //     langKeyForNull: "any",
    //     useLangKeyLayout: false,
    //     markdownRemark: {
    //       postPage: "src/templates/blog-post.js",
    //       query: `
    //         {
    //           allMarkdownRemark {
    //             edges {
    //               node {
    //                 fields {
    //                   slug,
    //                   langKey
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `
    //     }
    //   }
    // },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto", "Lato", "Montserrat"]
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages"
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/content/pages`,
    //     name: "pages"
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/settings`,
        name: "settings"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     defaultLayouts: {
    //       // This entry template will switch the page template based on
    //       // a frontmatter value provided in the CMS, allowing users to
    //       // choose different template layouts.
    //       default: require.resolve(
    //         `${__dirname}/src/page-templates/cms-entry.template.js`
    //       )
    //     }
    //   }
    // },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./src/data/`
      }
    },
    
    // `gatsby-plugin-postcss`,
    "gatsby-plugin-purgecss", // must be after other CSS plugins
    // {
    //   resolve: 'gatsby-plugin-sw',
    //   options: {
    //     swPath: 'src/utils/my-service-worker.js', // Default to 'src/sw.js'
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Top Bike Tours Portugal`,
        short_name: `TopBikeTours`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "white",
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
