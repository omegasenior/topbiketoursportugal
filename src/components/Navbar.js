import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Nav, Navbar } from 'styled-bootstrap-components'
import Img from "gatsby-image"
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import styled from "styled-components"

const StyledContainer = styled(Container)`
  z-index:2;
  background:transparent!important;
  // position:fixed;
`

const StyledBurgerButton = styled(Button)`
      background: #fff;
      margin: 10px;
      height: 40px;
`

const StyledNavbar = styled(Navbar)`
  background-color:transparent!important;
  padding:0;
  position:fixed;
  top:0;
  width:100%;
  z-index:1000;
  .logo{
    transition: all 2s;
    .gatsby-image-wrapper{
      transition: all 2s;
    }
  }
  transition: all 1s;
  a{
    color:#fff;
    margin-right: 10px;
  }
  nav {
    padding:0 10px;
  }
  &.fixed-nav {
    box-shadow: 0 0 12px 0px rgba(0,0,0,.4);
    background-color:#fff!important;
    height: 70px;
    padding: 10px 0;
    a {
      color:#000;
    }
    .logo{
      width: 98px;
      height: 70px;
      /*picture img{
        width: 98px;
        height: 70px;

      }*/
    }
    .logo .gatsby-image-wrapper{
      max-width: 98px!important;
      max-height: 70px!important;
    }
  }
`

let lastScrollY = 0;
let ticking = false;

const NavbarComponent = class extends React.Component {
  navBar = React.createRef();

  constructor(props) {
    super();
    this.state = {
      hidden: true,
      stickyNav: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > 150) {
          this.navBar.current.classList.add("fixed-nav");
        }
        else {
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
      hidden: !this.state.hidden,
    });
  }

  render() {
    var hidden = this.state.hidden;
    return (
      <StaticQuery
        query={graphql`
        query LogoQuery {
            file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 208, height: 143) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
      `}
        render={data => (
          <>
              <StyledNavbar expandSm ref={this.navBar}>
                <Nav>
                  <Link to="/" className="logo"><Img fixed={data.file.childImageSharp.fixed} alt="Top Bike Tours Portugal" /></Link>
                  <StyledBurgerButton light outline toggleCollapse expandSm onClick={() => this.handleOpenCloseNav()}>
                    <span>&#9776;</span>
                  </StyledBurgerButton>
                </Nav>
                <Nav collapse expandSm hidden={hidden}>
                  <Link to="/bike-hollidays">Bike Holidays</Link>
                  <Link to="/tour-calendar">Calendar</Link>
                  <Link to="/city-tours">City Tours</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/rental">Rental</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/about">About</Link>
                </Nav>
              </StyledNavbar>
          </>
        )}
      />
    )
  }
}

export default NavbarComponent