import React from "react";
import { MapPin, Smartphone, Mail } from "react-feather";
import { graphql } from "gatsby";

import PageHeader from "../components/PageHeader";
import { HTMLContent } from "../components/Content";
import FormSimpleAjax from "../components/FormSimpleAjax";
import Content from "../components/Content";
import GoogleMap from "../components/GoogleMap";
import Layout from "../layout/LayoutBootstrap";
import "./ContactPage.scss";

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  // featuredImage,
  address,
  email,
  location,
  phone,
  mobile,
  googleApiKey
}) => (
  <main className="Contact">
    {/* <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    /> */}
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          <HTMLContent content={body} />
          <div className="Contact--Details">
            {address && address.street && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.pt/maps/search/${encodeURI(
                  address.street
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address.street}
                {address.postalCode && `, ${address.postalCode}`}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {mobile && (
              <a className="Contact--Details--Item" href={`tel:${mobile}`}>
                <Smartphone /> {mobile}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>

        <div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>

    {location && <GoogleMap locations={location} mapkey={googleApiKey} />}
    {/* <script type="application/ld+json"> {
"@context" : "http://schema.org",
"@type" : "Step 1: Choose a Business Type",
"name":"Top Bike Tour Portugal",
"url":"https://www.topbiketoursportugal.com/",
"email":"info@topbiketoursportugal",
"telephone":"915316999",
"openingHours": [
"10:00", "13:00", "14:00", "19:00"],
"aggregateRating":{
"@type":"AggregateRating",
"ratingValue":"5",
"reviewCount":"10"},
"paymentAccepted":"Visa, Master Card, Discover, Amex"
} </script> */}

  </main>
  
);

const ContactPage = ({ data: { page, settings } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
    feature={page.frontmatter.feature}
    language={page.frontmatter.language}
  >
    <ContactPageTemplate
      {...settings}
      {...settings[page.language || "en"]}
      {...page.frontmatter}
      body={page.html}
    />
  </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    settings: settingsYaml {
      googleTrackingId
      googleApiKey
      siteUrl
      mobile
      phone
      email
      location {
        lat
        lng
      }
      tourOperator
      travelAgency
      socialNetworks {
        display
        icon
        link
      }
      pt {
        address {
          city
          country
          hint
          postalCode
          street
        }
      }
      en {
        address {
          city
          country
          hint
          postalCode
          street
        }
      }
    }
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage
      html
      frontmatter {
        title
        templateKey
        language
        subtitle
        featuredImage {
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
