import React from "react";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import NavbarComponent from "../components/Navbar";
import Banners from "../components/Banners";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ChevronUp } from "styled-icons/feather/ChevronUp";
import Scroll from "../components/Scroll";

// import "../sass/style.scss";

const ScrollUpButton = styled.button`
  opacity: 0.7;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 60px;
  border: none;
  background: #2e2f2e;
  color: #fff;
  padding: 7px;
  border-radius: 4px;
  padding-bottom: 9px;
  &:hover {
    opacity: 1;
    cursor: pointer;
    span {
      // display:none;
      opacity: 0;
    }
    svg {
      transform: translateY(7px);
    }
  }
  svg {
    width: 30px;
    margin-top: 0;
    margin-bottom: -7px;
    transition: all 200ms linear;
  }
  span {
    font: 12px Lato, sans-serif;
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f9f9f9;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
  }
  header{
    min-height:115px;
  } 
   @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transfo rm: translateY(-15px);
    }
  }
`;

const TemplateWrapper = ({ children, meta, title, language, feature }) => {
  // console.log(language);
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
          settingsYaml {
            en {
              description
              keywords
              title
            }
            pt {
              description
              keywords
              title
            }
          }
          menu: menusJson(
            title: { eq: "Home" }
            en: { links: { elemMatch: { enabled: { eq: true } } } }
            pt: { links: { elemMatch: { enabled: { eq: true } } } }
          ) {
            en {
              links {
                description
                display
                enabled
                link
              }
            }
            pt {
              links {
                description
                display
                enabled
                link
              }
            }
          }
          banners: allBannerJson {
            nodes {
              id
              title
              description
              button
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
      `}
      render={data => {
        const { socialMediaCard, googleTrackingId } = data.settingsYaml || {};
        const menu = data.menu[language || "en"].links;
        const defaultMetadata = data.settingsYaml[language || "en"];

        // console.log(JSON.stringify(language));
        // console.log(JSON.stringify(data));

        return (
          <React.Fragment>
            <GlobalStyle />
            <Helmet titleTemplate={data.settingsYaml.titleformat}>
              <html lang={language || `en`} />
              <title>{title || defaultMetadata.title}</title>
              <meta
                name="description"
                content={
                  (meta && meta.description) || defaultMetadata.description
                }
              />

              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta
                property="og:title"
                content={title || defaultMetadata.title}
              />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/icons/icon-48x48.png" />
              <link
                rel="shortcut icon"
                type="image/png"
                href="/icons/icon-48x48.png"
              />
              <meta charset="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
            </Helmet>
            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />
            <header>
              <NavbarComponent menu={menu} />
              {feature && (
                <div
                  className="feature"
                  style={{
                    color: (feature.textcolor || "white") + `!important`
                  }}
                >
                  {/* <Img
                    objectFit="cover"
                    objectPosition="50% 50%"
                    fluid={feature.image.childImageSharp.fluid}
                    alt={feature.title}
                  /> */}
                  <BackgroundImage
                    fluid={feature.image.childImageSharp.fluid}
                    backgroundColor={`#fff`}
                  >
                    {feature.title && (
                      <h1
                        style={{
                          color: feature.textcolor || "white"
                        }}
                      >
                        {feature.title}
                      </h1>
                    )}
                  </BackgroundImage>
                </div>
              )}
              {!feature && <Banners banners={data.banners} />}
            </header>
            <main>{children}</main>
            <Footer />
            <Scroll>
              <ScrollUpButton aria-label="Scroll to top" role="navigation">
                <ChevronUp>Top</ChevronUp>
                <span>Top</span>
              </ScrollUpButton>
            </Scroll>
          </React.Fragment>
        );
      }}
    />
  );
};

TemplateWrapper.propsTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      display: PropTypes.string,
      enable: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default TemplateWrapper;
