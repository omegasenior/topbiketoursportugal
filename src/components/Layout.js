import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import NavbarComponent from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { ChevronUp } from 'styled-icons/feather/ChevronUp';
import Scroll from '../components/Scroll';

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
  &:hover{
    opacity: 1;
    cursor:pointer;
    span{
      // display:none;
      opacity:0;
    }
    svg{
      transform: translateY(7px);
    }
  }
  svg{
    width: 30px;
    margin-top: 0;
    margin-bottom: -7px;
    transition: all 200ms linear;
  }
  span{
    font:12px Lato,sans-serif;
    opacity:1;
    transition: all 200ms linear;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f9f9f9;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <React.Fragment>
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />

        </Helmet>
        <header>
        <NavbarComponent />
        <Banner></Banner>

        </header>
        <>{children}</>
        <Footer/>
        <Scroll>
          <ScrollUpButton  aria-label="Scroll to top" role="navigation">
            <ChevronUp>Top</ChevronUp>
            <span>Top</span>
          </ScrollUpButton>
        </Scroll>
      </React.Fragment>
    )}
  />
)

export default TemplateWrapper
