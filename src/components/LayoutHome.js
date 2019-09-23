import React from "react";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import NavbarComponent from "../components/Navbar";
import Banners from "./banners";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import LanguageSwitcher from "../components/LanguageSwitcher";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { ChevronUp } from "styled-icons/feather/ChevronUp";
import Scroll from "../components/Scroll";

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

const TemplateWrapper = ({ children, meta, title, language }) => {
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
          menu: menusJson(title: { eq: "Home" }) {
            en {
              links {
                description
                display
                enable
                link
              }
            }
            pt {
              links {
                description
                display
                enable
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
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
          data.settingsYaml || {};
        const menu = data.menu[language || "en"].links;

        // console.log(JSON.stringify(language));
        // console.log(JSON.stringify(data));

        return (
          <React.Fragment>
            <GlobalStyle />
            <Helmet>
              <html lang={language || `en`} />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta charset="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />

              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta
                property="og:title"
                content={data.site.siteMetadata.title}
              />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.jpg" />
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
            <LanguageSwitcher />
            <header>
              <NavbarComponent menu={menu} />
              <Banners banners={data.banners} />
            </header>
            <>{children}</>
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