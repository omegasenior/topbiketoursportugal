import React from "react";
// import PropTypes from "prop-types";
import LanguageSwitcher from "./LanguageSwitcher";
import _filter from "lodash/filter";
import _first from "lodash/first";

import { Link, StaticQuery, graphql } from "gatsby";
import { Nav, Navbar } from "styled-bootstrap-components";
// import Img from "gatsby-image";
// import { Container } from 'styled-container-component';
import { Button } from "styled-button-component";
import styled from "styled-components";
import { Facebook } from "styled-icons/boxicons-logos/Facebook";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Youtube } from "styled-icons/boxicons-logos/Youtube";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Tripadvisor } from "styled-icons/fa-brands/Tripadvisor";
import { AlternateEmail } from "styled-icons/material/AlternateEmail";
import { PhoneAlt } from "styled-icons/fa-solid/PhoneAlt";
// const StyledContainer = styled(Container)`
//   z-index:2;
//   background:transparent!important;
//   // position:fixed;
// `

// import "./Navbar.scss";

const StyledTripAdvisor = styled(Tripadvisor)`
  vertical-align: -0.3em;
`;

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  tripadvisor: StyledTripAdvisor
};

const TopContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledBurgerButton = styled(Button)`
  background: #fff;
  margin: 10px;
  height: 40px;
`;

const LanguageSwitcherContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: right;
  display: flex;
  background-color: rgba(0, 0, 0, 0.45) !important;
  align-items: center;
  z-index: 1000;

  div {
    align-items: center;
    flex: auto;
    padding: 20px 35px 0 20px;
  }

  .contactsContainer {
    text-align: left;
  }

  a {
    margin: 0 !important;
    padding: 10px;
    color: #fff !important;
    text-decoration: none !important;
  }
`;

const StyledNavbar = styled(Navbar)`
  background-color: rgba(0, 0, 0, 0.45) !important;
  padding: 0;
  // position: fixed;
  // top: 41.5px;
  width: 100%;
  z-index: 1000;
  font-size: 1.25rem;
  max-height: 500px;
  min-height: 100px;
  transition: max-height 300ms ease-in-out, background 0.4s ease-in-out;

  a.logo:before {
    display: none;
  }

  .logo {
    width: 148px;

    img {
      max-width: 148px;
      // max-height: 100%;
      transition: all 250ms linear;
      // margin: -5px;
    }

    .white {
      display: block;
    }
    .black {
      display: none;
    }
  }

  a {
    color: #fff !important;
    text-decoration: none !important;
    margin-right: 40px;
    position: relative;
    text-shadow: 1px 1px 3px #222;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -10px;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      // box-shadow: 1px 1px 3px 0px #363636;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  a:last {
    margin: 0;
  }

  nav {
    padding: 0 10px;
    justify-content: flex-end;
  }

  &.fixed-nav {
    box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.4);
    background-color: #fff !important;
    position: fixed;
    top: 0;

    max-height: 70px;
    padding: 10px 0;
    a {
      color: #000!important;
      text-shadow: none;

      &:before {
        background-color: #000;
      }
    }
    .logo {
      width: 98px;
      height: 70px;
      margin-left: 25px;
    }

    .logo .white {
      display: none;
    }

    .logo .black {
      display: block;
    }

    .logo img {
      max-width: 130px !important;
      margin: -20px -17px;
    }

    // .logo .gatsby-image-wrapper img {
    //   max-width: 98px !important;
    //   max-height: 70px !important;
    // }
  }
`;

let lastScrollY = 0;
let ticking = false;

const NavbarComponent = class extends React.Component {
  navBar = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      stickyNav: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > 10) {
          this.navBar.current.classList.add("fixed-nav");
        } else {
          this.navBar.current.classList.remove("fixed-nav");
        }
        // this.navBar.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      ticking = true;
    }
  };

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const defaultLink = _first(
      _filter(this.props.menu, item => item.isHome === true)
    ) || {
      link: "/"
    };
    // console.log(JSON.stringify(menu));
    var hidden = this.state.hidden;
    return (
      <StaticQuery
        query={graphql`
          query LogoQuery {
            file(relativePath: { eq: "logo2.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 208, height: 143) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            settings: settingsYaml {
              socialNetworks {
                display
                icon
                link
              }
            }
          }
        `}
        render={data => (
          <TopContainer>
            <LanguageSwitcherContainer>
              <div className="contactsContainer">
                <a href="#">
                  <PhoneAlt size="18" /> (+351) 915 316 999​
                </a>
                <a href="mailto:info@topbiketoursportugal.com">
                  <AlternateEmail size="18" />
                  info@topbiketoursportugal.com
                </a>
              </div>
              <div>
                {data &&
                  data.settings &&
                  data.settings.socialNetworks &&
                  data.settings.socialNetworks.map((social, index) => {
                    const SocialIcon = icons[social.icon];
                    return (
                      <a
                        rel="noopener noreferrer"
                        key={`i${index}`}
                        href={social.link}
                        target="_blank"
                        title={social.display}
                      >
                        <SocialIcon
                          size="18"
                          title={social.display}
                        ></SocialIcon>
                      </a>
                    );
                  })}
                <LanguageSwitcher />
              </div>
            </LanguageSwitcherContainer>
            <StyledNavbar expandSm ref={this.navBar}>
              <Nav>
                <Link to={defaultLink.link} className="logo">
                  {/* <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt="Top Bike Tours Portugal"
                  /> */}
                  <img
                    className="white"
                    src="/img/logo_white.png"
                    alt="Top Bike Tours Portugal"
                  />
                  <img
                    className="black"
                    src="/img/logo.svg"
                    alt="Top Bike Tours Portugal"
                  />
                </Link>
                <StyledBurgerButton
                  light
                  outline
                  toggleCollapse
                  expandSm
                  onClick={() => this.handleOpenCloseNav()}
                >
                  <span>&#9776;</span>
                </StyledBurgerButton>
              </Nav>
              <Nav collapse expandSm hidden={hidden}>
                {this.props &&
                  this.props.menu &&
                  this.props.menu.map((menuItem, index) => (
                    <Link key={`mi${index}`} to={menuItem.link}>
                      {menuItem.display}
                    </Link>
                  ))}
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/bike-hollidays">Bike Holidays</Link> */}
                {/* <Link to="/city-tours">City Tours</Link> */}
                {/* <Link to="/blog">Blog</Link> */}
                {/* <Link to="/tour-calendar">Calendar</Link> */}
                {/* <Link to="/rental">Rental</Link> */}
                {/* <Link to="/contact">Contact</Link> */}
                {/* <Link to="/about">About</Link> */}
              </Nav>
            </StyledNavbar>
          </TopContainer>
        )}
      />
    );
  }
};

// NavbarComponent.propsTypes = {
//   menu: PropTypes.arrayOf(
//     PropTypes.shape({
//       description: PropTypes.string,
//       display: PropTypes.string,
//       enable: PropTypes.string,
//       link: PropTypes.string
//     })
//   )
// };

export default NavbarComponent;
