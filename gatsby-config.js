module.exports = {
  siteMetadata: {
    title: 'Top Bike Tours Portugal',
    siteUrl: 'https://boring-kepler-5712ff.netlify.com/',
    description: `
    Top Bike Tours Portugal is a provider of holiday’s packages and routes, which offers an incredible holiday experience, entertainment and leisure activities based on quality and value.
    `,
    canonicalUrl: 'https://www.topbiketoursportugal.com',
    image: 'https://www.topbiketoursportugal.com/images/jason-lengstorf.jpg',
    author: {
      name: 'Top Bike Tours Portugal',
      minibio: `
      Founded in 2013, Top Bike Tours Portugal formerly Fold n 'Visit is a very young company, with experience in pedestrian and cycling tours in Porto and long distance cycling routes to the north of the Iberian Peninsula. Our activities are coordinated by tourism professionals, with a huge knowledge of heritage and sports.
      `,
    },
    organization: {
      name: 'Top Bike Tours Portugal',
      url: 'https://www.topbiketoursportugal.com',
      logo: 'https://www.topbiketoursportugal.com/android-chrome-512x512.png',
    },
    social: {
      twitter: 'https://twitter.com/FoldnVisit',
      fbAppID: '',
      youtube: 'https://www.youtube.com/channel/UCqryPkh_snkIAqvDXFvaK7A',
      youtube: 'https://www.youtube.com/channel/UCqryPkh_snkIAqvDXFvaK7A',
      facebook: 'https://www.facebook.com/topbiketoursportugal/',
      instagram: 'https://www.instagram.com/topbiketoursportugal/',
      googleplus: 'https://plus.google.com/u/0/112634467779546919402',

    },
    categories: [
      {
        slug: 'acting-like-a-grown-up',
        name: 'Acting Like a Grown-Up',
      },
      {
        slug: 'finding-direction',
        name: 'Finding Direction',
      },
      {
        slug: 'happiness',
        name: 'Building Happiness',
      },
      {
        slug: 'motivation',
        name: 'Staying Motivated',
      },
      {
        slug: 'remote-productivity',
        name: 'Remote Productivity',
      },
      {
        slug: 'remote-work',
        name: 'Living & Working Remotely',
      },
      {
        slug: 'storytelling',
        name: 'Storytelling',
      },
      {
        slug: 'impact',
        name: 'Creating an Impact',
      },
    ],
    icon: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto','Lato','Montserrat']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-purgecss', // must be after other CSS plugins
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
        display: `standalone`,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array

  ],
}
